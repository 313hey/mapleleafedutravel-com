const DEFAULT_TO = "xushaochun@mapleleaf.net.cn";
const DEFAULT_FROM = "Maple Leaf Edu-Travel <noreply@mapleleafedutravel.com>";

function json(data, status = 200, origin = "*") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

function allowedOrigin(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!origin) return "*";
  return allowed.includes(origin) ? origin : "";
}

function escapeHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readPayload(request) {
  const type = request.headers.get("Content-Type") || "";
  if (type.includes("application/json")) {
    return request.json();
  }

  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

function buildMessage(payload) {
  const name = escapeHeader(payload.name);
  const organization = escapeHeader(payload.organization);
  const email = escapeHeader(payload.email);
  const message = String(payload.message || "").trim();

  return [
    "New enquiry from the Maple Leaf Edu-Travel website:",
    "",
    `Name: ${name}`,
    `School / Organization: ${organization}`,
    `Email: ${email}`,
    "",
    "Learning goals / preferred destination:",
    message || "(No message provided)",
    "",
    "Source: https://www.mapleleafedutravel.com/"
  ].join("\n");
}

export default {
  async fetch(request, env) {
    const origin = allowedOrigin(request, env);

    if (request.method === "OPTIONS") {
      return json({ ok: true }, 204, origin || "*");
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405, origin || "*");
    }

    if (!origin) {
      return json({ ok: false, error: "Origin not allowed" }, 403, "null");
    }

    try {
      const payload = await readPayload(request);

      if (String(payload.honey || payload._honey || "").trim()) {
        return json({ ok: true }, 200, origin);
      }

      const name = String(payload.name || "").trim();
      const organization = String(payload.organization || "").trim();
      const email = String(payload.email || "").trim();

      if (!name || !organization || !emailIsValid(email)) {
        return json({ ok: false, error: "Please provide name, organization and a valid email." }, 400, origin);
      }

      const to = env.TO_EMAIL || DEFAULT_TO;
      const from = env.FROM_EMAIL || DEFAULT_FROM;
      const subject = "New Maple Leaf Edu-Travel Website Enquiry";

      await env.SEND_EMAIL.send({
        to,
        from,
        subject,
        reply_to: email,
        text: buildMessage(payload)
      });
      return json({ ok: true }, 200, origin);
    } catch (error) {
      return json({ ok: false, error: "Unable to send enquiry." }, 500, origin || "*");
    }
  }
};
