import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: "RESEND_API_KEY not configured" }, { status: 200 });
  }

  const { name, email, phone, service, address, message } = await req.json();

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
      <div style="background:#1d4ed8;padding:20px;border-radius:12px 12px 0 0;text-align:center">
        <h1 style="color:white;margin:0;font-size:22px">🏠 New Quote Request</h1>
        <p style="color:#bfdbfe;margin:4px 0 0">Altitude Service Solutions</p>
      </div>
      <div style="background:#f8fafc;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:120px">Name</td><td style="padding:8px 0;font-weight:600;color:#111">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Email</td><td style="padding:8px 0;font-weight:600;color:#111">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Phone</td><td style="padding:8px 0;font-weight:600;color:#111">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Service(s)</td><td style="padding:8px 0;font-weight:600;color:#1d4ed8">${service}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Address</td><td style="padding:8px 0;font-weight:600;color:#111">${address || "—"}</td></tr>
          ${message ? `<tr><td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top">Message</td><td style="padding:8px 0;color:#111">${message}</td></tr>` : ""}
        </table>
        <div style="margin-top:20px;text-align:center">
          <a href="mailto:${email}" style="background:#1d4ed8;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">
            Reply to ${name}
          </a>
        </div>
      </div>
      <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px">Altitude Service Solutions · (678) 739-5229 · Atlanta, GA</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Altitude Service Solutions <onboarding@resend.dev>",
      to: ["leonel@altitudess.net", "ehleonel@yahoo.com"],
      reply_to: email,
      subject: `🏠 New Quote — ${name} | ${service}`,
      html,
    }),
  });

  const resBody = await res.json().catch(() => ({}));
  console.log("Resend response:", res.status, JSON.stringify(resBody));
  return NextResponse.json({ ok: res.ok, status: res.status, body: resBody });
}
