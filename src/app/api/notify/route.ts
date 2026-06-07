import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting — resets on restart (acceptable for serverless)
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000; // 1 minute per IP

function escapeHtml(str: string): string {
  return String(str)
    .slice(0, 2000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  // Rate limiting by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (entry && now < entry.reset) {
    if (entry.count >= RATE_LIMIT) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 200 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, service, address, message } = body;

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !service?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Sanitize all inputs before embedding in HTML
  const sName    = escapeHtml(name);
  const sEmail   = escapeHtml(email);
  const sPhone   = escapeHtml(phone ?? "");
  const sService = escapeHtml(service);
  const sAddress = escapeHtml(address ?? "");
  const sMessage = escapeHtml(message ?? "");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
      <div style="background:#1d4ed8;padding:20px;border-radius:12px 12px 0 0;text-align:center">
        <h1 style="color:white;margin:0;font-size:22px">New Quote Request</h1>
        <p style="color:#bfdbfe;margin:4px 0 0">Altitude Service Solutions</p>
      </div>
      <div style="background:#f8fafc;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:120px">Name</td><td style="padding:8px 0;font-weight:600;color:#111">${sName}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Email</td><td style="padding:8px 0;font-weight:600;color:#111">${sEmail}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Phone</td><td style="padding:8px 0;font-weight:600;color:#111">${sPhone || "&#8212;"}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Service(s)</td><td style="padding:8px 0;font-weight:600;color:#1d4ed8">${sService}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px">Address</td><td style="padding:8px 0;font-weight:600;color:#111">${sAddress || "&#8212;"}</td></tr>
          ${sMessage ? `<tr><td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top">Message</td><td style="padding:8px 0;color:#111">${sMessage}</td></tr>` : ""}
        </table>
        <div style="margin-top:20px;text-align:center">
          <a href="mailto:${sEmail}" style="background:#1d4ed8;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">
            Reply to ${sName}
          </a>
        </div>
      </div>
      <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px">Altitude Service Solutions &middot; (678) 739-5229 &middot; Atlanta, GA</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Altitude Service Solutions <onboarding@resend.dev>",
      to: ["leonel@altitudess.net"],
      reply_to: email,
      subject: `New Quote — ${sName} | ${sService}`,
      html,
    }),
  });

  const resBody = await res.json().catch(() => ({}));
  console.log("Resend:", res.status, JSON.stringify(resBody));
  return NextResponse.json({ ok: res.ok, status: res.status });
}