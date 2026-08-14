const crypto = require('crypto');

const ALLOWED_EVENTS = ['Lead', 'Contact', 'ViewContent', 'PageView'];

function sha256(value) {
  if (!value) return undefined;
  return crypto.createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

function normalizePhone(phone) {
  if (!phone) return undefined;
  let digits = String(phone).replace(/[^\d+]/g, '');
  if (!digits.startsWith('+')) digits = '+34' + digits.replace(/^0+/, '');
  return digits;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const token = process.env.META_CONVERSIONS_API_KEY;
  const pixelId = process.env.META_PIXEL_ID || '1061614056464511';

  if (!token) {
    res.status(500).json({ error: 'Missing META_CONVERSIONS_API_KEY env var' });
    return;
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  const { event_name, event_id, event_source_url, nombre, email, telefono, fbc, fbp } = body;

  if (!event_name || !event_id || !ALLOWED_EVENTS.includes(event_name)) {
    res.status(400).json({ error: 'Missing or invalid event_name/event_id' });
    return;
  }

  const clientIp = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || undefined;
  const userAgent = req.headers['user-agent'];

  const user_data = {};
  if (clientIp) user_data.client_ip_address = clientIp;
  if (userAgent) user_data.client_user_agent = userAgent;
  if (email) user_data.em = [sha256(email)];
  if (telefono) user_data.ph = [sha256(normalizePhone(telefono))];
  if (nombre) {
    const parts = String(nombre).trim().split(/\s+/);
    if (parts[0]) user_data.fn = [sha256(parts[0])];
    if (parts.length > 1) user_data.ln = [sha256(parts.slice(1).join(' '))];
  }
  if (fbc) user_data.fbc = fbc;
  if (fbp) user_data.fbp = fbp;

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url: event_source_url || 'https://yoruuia.com/meta-landing/index.html',
        action_source: 'website',
        user_data,
      },
    ],
  };

  // Modo de prueba: añade META_TEST_EVENT_CODE en Vercel (valor TEST9948) mientras
  // verificas los eventos en Meta Events Manager. Elimina esa env var para producción.
  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const metaRes = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
    const metaData = await metaRes.json();

    if (!metaRes.ok) {
      console.error('Meta CAPI error:', metaData);
      res.status(502).json({ error: 'Meta CAPI error', details: metaData });
      return;
    }

    res.status(200).json({ success: true, events_received: metaData.events_received });
  } catch (err) {
    console.error('CAPI handler error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
};
