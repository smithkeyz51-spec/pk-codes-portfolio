type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type VercelRequest = {
  method?: string;
  body?: ContactRequest | string;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: Record<string, string>) => void;
  setHeader: (name: string, value: string) => VercelResponse;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body: ContactRequest;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    return res.status(400).json({ error: "Invalid request body." });
  }
  const name = cleanText(body.name, MAX_NAME_LENGTH);
  const email = cleanText(body.email, MAX_EMAIL_LENGTH);
  const message = cleanText(body.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message || !emailPattern.test(email)) {
    return res.status(400).json({ error: "Please provide a valid name, email, and message." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.RESEND_TO_EMAIL || process.env.CONTACT_EMAIL || "smithkeyz51@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `New portfolio contact from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    console.error("Resend request failed", resendResponse.status, detail);
    return res.status(502).json({ error: "Unable to send your message right now." });
  }

  return res.status(200).json({ message: "Your message was sent successfully." });
}
