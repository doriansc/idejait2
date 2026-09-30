// Cloudflare Pages Function: prima kontakt obrazac i prosljeđuje ga na webhook
// (Power Automate "When an HTTP request is received" ili n8n Webhook) koji šalje mail na info@ideja-it.hr.
// Varijable okruženja u Cloudflare Pages postavkama:
//   CONTACT_WEBHOOK_URL  – obavezno, URL webhooka (tajna)
//   CONTACT_WEBHOOK_KEY  – nije obavezno; šalje se u headeru X-Contact-Key radi provjere na strani webhooka
//   ALLOWED_ORIGIN       – nije obavezno, zadano https://ideja-it.hr

const LIMITS = { name: 120, company: 160, contact: 160, urgency: 60, message: 5000, subject: 200, page: 200 };

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  const allowed = env.ALLOWED_ORIGIN || 'https://ideja-it.hr';
  const origin = request.headers.get('Origin');
  if (origin && origin !== allowed) return json(403, { ok: false, error: 'origin' });

  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'format' });
  }

  // Zamka za botove: polje "website" je skriveno od ljudi
  if (data.website) return json(200, { ok: true });

  const clean = {};
  for (const [k, max] of Object.entries(LIMITS)) {
    const v = typeof data[k] === 'string' ? data[k].trim() : '';
    if (v.length > max) return json(400, { ok: false, error: `too_long:${k}` });
    clean[k] = v;
  }
  if (!clean.name || !clean.contact || !clean.message) return json(400, { ok: false, error: 'required' });

  if (!env.CONTACT_WEBHOOK_URL) return json(503, { ok: false, error: 'not_configured' });

  const payload = {
    ...clean,
    receivedAt: new Date().toISOString(),
    ip: request.headers.get('CF-Connecting-IP') || '',
    country: request.cf?.country || '',
    userAgent: (request.headers.get('User-Agent') || '').slice(0, 300),
  };

  const res = await fetch(env.CONTACT_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(env.CONTACT_WEBHOOK_KEY ? { 'X-Contact-Key': env.CONTACT_WEBHOOK_KEY } : {}) },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return json(502, { ok: false, error: 'upstream' });
  return json(200, { ok: true });
}

export const onRequest = () => json(405, { ok: false, error: 'method' });
