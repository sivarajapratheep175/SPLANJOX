import { randomUUID } from 'node:crypto';

interface ApiRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  socket?: { remoteAddress?: string };
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(data: unknown): void;
}

const ALLOWED_PROJECT_TYPES = new Set([
  'Startup MVP',
  'Web Application',
  'Mobile Application',
  'Backend & API',
  'AI & Automation',
  'Technical Consultation',
  'Other',
]);

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(req: ApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  existing.count += 1;
  return true;
}

function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function parseBody(rawBody: unknown): Record<string, unknown> {
  if (rawBody && typeof rawBody === 'object' && !Array.isArray(rawBody)) {
    return rawBody as Record<string, unknown>;
  }
  if (typeof rawBody === 'string') {
    try {
      const parsed = JSON.parse(rawBody);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return {};
    }
  }
  return {};
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({
      ok: false,
      message: 'Method not allowed. Use POST to submit an inquiry.',
    });
    return;
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    res.status(429).json({
      ok: false,
      message:
        'Too many inquiries sent recently. Please wait 15 minutes or email sivarajapratheep175@gmail.com directly.',
    });
    return;
  }

  const body = parseBody(req.body);

  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    res.status(400).json({
      ok: false,
      message: 'Inquiry could not be verified.',
    });
    return;
  }

  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const projectType = typeof body.projectType === 'string' ? body.projectType.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const errors: Record<string, string> = {};

  if (fullName.length < 2 || fullName.length > 100) {
    errors.fullName = 'Please enter your full name (2 to 100 characters).';
  }
  if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!ALLOWED_PROJECT_TYPES.has(projectType)) {
    errors.projectType = 'Please select a valid project type.';
  }
  if (message.length < 10 || message.length > 4000) {
    errors.message = 'Please describe your problem or project (10 to 4000 characters).';
  }

  if (Object.keys(errors).length > 0) {
    res.status(400).json({
      ok: false,
      message: 'Please correct the highlighted fields and try again.',
      errors,
    });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    res.status(503).json({
      ok: false,
      emailNotConfigured: true,
      message:
        'Automated email delivery is not configured on the server yet. Please use the direct email option below or write to sivarajapratheep175@gmail.com.',
    });
    return;
  }

  const inquiryId = randomUUID();
  const createdAt = new Date().toISOString();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || 'SPLANJOX Website <onboarding@resend.dev>';
  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || 'sivarajapratheep175@gmail.com';

  const textBody = [
    'New project inquiry via SPLANJOX website',
    '',
    `Inquiry ID: ${inquiryId}`,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    `Submitted: ${createdAt}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[SPLANJOX Inquiry] ${projectType} — ${fullName}`,
        text: textBody,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => 'Unknown email provider error');
      console.error('Resend relay error:', errText);
      res.status(502).json({
        ok: false,
        inquiryId,
        message:
          'Email forwarding encountered a provider error. Please send your inquiry directly to sivarajapratheep175@gmail.com.',
      });
      return;
    }

    res.status(201).json({
      ok: true,
      inquiryId,
      deliveryMode: 'email',
      message: 'Thank you. Your inquiry has been received and emailed to SPLANJOX.',
    });
  } catch (err) {
    console.error('Resend relay exception:', err);
    res.status(502).json({
      ok: false,
      inquiryId,
      message:
        'Network error while forwarding your inquiry. Please email sivarajapratheep175@gmail.com directly.',
    });
  }
}
