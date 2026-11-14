interface ApiRequest {
  method?: string;
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(data: unknown): void;
}

export default function handler(_req: ApiRequest, res: ApiResponse) {
  res.status(200).json({
    ok: true,
    service: 'splanjox-web',
    emailRelayConfigured: Boolean(process.env.RESEND_API_KEY?.trim()),
  });
}
