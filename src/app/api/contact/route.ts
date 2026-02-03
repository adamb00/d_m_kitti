import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const contactSchema = {
  required: ['name', 'email', 'message'],
} as const;

const parseBody = async (request: Request) => {
  const body = (await request.json()) as Record<string, unknown>;
  return {
    name: String(body.name ?? '').trim(),
    email: String(body.email ?? '').trim(),
    phone: String(body.phone ?? '').trim(),
    eventType: String(body.eventType ?? '').trim(),
    message: String(body.message ?? '').trim(),
  };
};

const getEnv = (key: string) => process.env[key] ?? '';

export async function POST(request: Request) {
  const data = await parseBody(request);

  for (const key of contactSchema.required) {
    if (!data[key]) {
      return Response.json(
        { ok: false, error: `Hiányzó mező: ${key}` },
        { status: 400 },
      );
    }
  }

  const host = getEnv('SMTP_HOST');
  const port = Number(getEnv('SMTP_PORT') || '587');
  const user = getEnv('SMTP_USER');
  const pass = getEnv('SMTP_PASS');
  const from = getEnv('SMTP_FROM') || user;
  const to = getEnv('CONTACT_TO') || 'mkitti19881212@gmail.com';

  if (!host || !user || !pass || !from) {
    return Response.json(
      { ok: false, error: 'Hiányzó SMTP beállítások.' },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `Új üzenet: ${data.name}`;
  const text = [
    `Név: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : null,
    data.eventType ? `Rendezvény típusa: ${data.eventType}` : null,
    '',
    data.message,
  ]
    .filter(Boolean)
    .join('\n');

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject,
    text,
  });

  return Response.json({ ok: true });
}
