import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const ALLOWED_PROJECT_TYPES = new Set([
  'Startup MVP',
  'Web Application',
  'Mobile Application',
  'Backend & API',
  'AI & Automation',
  'Technical Consultation',
  'Other',
]);

interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: string;
  ip: string;
  deliveryMode: 'email' | 'stored';
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
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

async function persistInquiry(inquiry: ContactInquiry): Promise<void> {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'inquiries.json');

  await mkdir(dataDir, { recursive: true });

  let existing: ContactInquiry[] = [];
  if (existsSync(filePath)) {
    try {
      const raw = await readFile(filePath, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        existing = parsed;
      }
    } catch {
      existing = [];
    }
  }

  existing.push(inquiry);
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
}

async function sendViaResend(inquiry: ContactInquiry): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false };
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || 'SPLANJOX Website <onboarding@resend.dev>';
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || 'sivarajapratheep175@gmail.com';

  const textBody = [
    'New project inquiry via SPLANJOX website',
    '',
    `Inquiry ID: ${inquiry.id}`,
    `Name: ${inquiry.fullName}`,
    `Email: ${inquiry.email}`,
    `Project Type: ${inquiry.projectType}`,
    `Submitted: ${inquiry.createdAt}`,
    '',
    'Message:',
    inquiry.message,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: inquiry.email,
      subject: `[SPLANJOX Inquiry] ${inquiry.projectType} — ${inquiry.fullName}`,
      text: textBody,
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => 'Unknown email provider error');
    return { sent: false, error: errText };
  }

  return { sent: true };
}

async function startServer(): Promise<void> {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      ok: true,
      service: 'splanjox-web',
      emailRelayConfigured: Boolean(process.env.RESEND_API_KEY?.trim()),
    });
  });

  app.post('/api/contact', async (req: Request, res: Response) => {
    const ip = getClientIp(req);

    if (!checkRateLimit(ip)) {
      res.status(429).json({
        ok: false,
        message: 'Too many inquiries sent recently. Please wait 15 minutes or email sivarajapratheep175@gmail.com directly.',
      });
      return;
    }

    const body = req.body && typeof req.body === 'object' ? req.body : {};

    // Honeypot anti-spam trap
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

    const emailConfigured = Boolean(process.env.RESEND_API_KEY?.trim());
    const inquiry: ContactInquiry = {
      id: randomUUID(),
      fullName,
      email,
      projectType,
      message,
      createdAt: new Date().toISOString(),
      ip,
      deliveryMode: emailConfigured ? 'email' : 'stored',
    };

    try {
      await persistInquiry(inquiry);
    } catch (err) {
      console.error('Failed to persist inquiry:', err);
      res.status(500).json({
        ok: false,
        message: 'Unable to record your inquiry right now. Please email sivarajapratheep175@gmail.com directly.',
      });
      return;
    }

    if (emailConfigured) {
      try {
        const relayResult = await sendViaResend(inquiry);
        if (!relayResult.sent) {
          console.error('Resend relay failed:', relayResult.error);
          res.status(502).json({
            ok: false,
            inquiryId: inquiry.id,
            message:
              'Your inquiry was saved on the server, but email forwarding failed. Please write directly to sivarajapratheep175@gmail.com.',
          });
          return;
        }

        res.status(201).json({
          ok: true,
          inquiryId: inquiry.id,
          deliveryMode: 'email',
          message: 'Thank you. Your inquiry has been received and emailed to SPLANJOX.',
        });
        return;
      } catch (err) {
        console.error('Email relay exception:', err);
        res.status(502).json({
          ok: false,
          inquiryId: inquiry.id,
          message:
            'Your inquiry was saved on the server, but email forwarding encountered a network error. Please write directly to sivarajapratheep175@gmail.com.',
        });
        return;
      }
    }

    res.status(201).json({
      ok: true,
      inquiryId: inquiry.id,
      deliveryMode: 'stored',
      message:
        'Your inquiry has been recorded by the SPLANJOX server. Automated email relay is not configured yet—for urgent requests, please also email sivarajapratheep175@gmail.com.',
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(process.cwd(), 'dist');
    app.use(express.static(distDir, { index: false }));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`SPLANJOX server listening on http://${HOST}:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start SPLANJOX server:', err);
  process.exit(1);
});
