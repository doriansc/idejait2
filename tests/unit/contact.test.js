// Testovi za Cloudflare Pages Function kontakt obrasca. Pokretanje: npm run test:unit
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost, onRequest } from '../../functions/api/contact.js';

const ENV = { CONTACT_WEBHOOK_URL: 'https://hook.example/flow', CONTACT_WEBHOOK_KEY: 'tajna' };
const OK_BODY = { name: 'Ana', contact: 'ana@example.com', message: 'Pomoć', urgency: 'Ovaj tjedan' };

let calls;
let realFetch;
beforeEach(() => {
  calls = [];
  realFetch = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    return new Response('', { status: 200 });
  };
});
afterEach(() => {
  globalThis.fetch = realFetch;
});

const req = (body, headers = {}) =>
  new Request('https://ideja-it.hr/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://ideja-it.hr', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });

const call = async (body, { env = ENV, headers } = {}) => {
  const res = await onRequestPost({ request: req(body, headers), env });
  return { status: res.status, body: await res.json() };
};

test('ispravan upit ide na webhook s ključem i prazninama obrezanima', async () => {
  const r = await call({ ...OK_BODY, name: '  Ana  ' });
  assert.equal(r.status, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, ENV.CONTACT_WEBHOOK_URL);
  assert.equal(calls[0].init.headers['X-Contact-Key'], 'tajna');
  const sent = JSON.parse(calls[0].init.body);
  assert.equal(sent.name, 'Ana');
  assert.ok(sent.receivedAt);
});

test('bez ključa se header ne šalje', async () => {
  await call(OK_BODY, { env: { CONTACT_WEBHOOK_URL: ENV.CONTACT_WEBHOOK_URL } });
  assert.equal(calls[0].init.headers['X-Contact-Key'], undefined);
});

test('www poddomena je dopuštena po zadanom', async () => {
  const r = await call(OK_BODY, { headers: { Origin: 'https://www.ideja-it.hr' } });
  assert.equal(r.status, 200);
});

test('strani origin je odbijen', async () => {
  const r = await call(OK_BODY, { headers: { Origin: 'https://evil.example' } });
  assert.equal(r.status, 403);
  assert.equal(calls.length, 0);
});

test('ALLOWED_ORIGIN prihvaća popis odvojen zarezom', async () => {
  const env = { ...ENV, ALLOWED_ORIGIN: 'https://ideja-it.hr, https://redesign-astro.idejait2.pages.dev' };
  const r = await call(OK_BODY, { env, headers: { Origin: 'https://redesign-astro.idejait2.pages.dev' } });
  assert.equal(r.status, 200);
});

test('neispravan JSON vraća 400', async () => {
  const r = await call('{nije json');
  assert.equal(r.status, 400);
  assert.equal(r.body.error, 'format');
});

test('obavezna polja', async () => {
  const r = await call({ ...OK_BODY, message: '   ' });
  assert.equal(r.status, 400);
  assert.equal(r.body.error, 'required');
});

test('predugačko polje', async () => {
  const r = await call({ ...OK_BODY, name: 'x'.repeat(121) });
  assert.equal(r.status, 400);
  assert.equal(r.body.error, 'too_long:name');
});

test('honeypot tiho prihvaća, a ne šalje', async () => {
  const r = await call({ ...OK_BODY, website: 'http://spam' });
  assert.equal(r.status, 200);
  assert.equal(calls.length, 0);
});

test('bez webhooka vraća 503', async () => {
  const r = await call(OK_BODY, { env: {} });
  assert.equal(r.status, 503);
});

test('greška webhooka vraća 502', async () => {
  globalThis.fetch = async () => new Response('', { status: 500 });
  const r = await call(OK_BODY);
  assert.equal(r.status, 502);
});

test('mrežna greška webhooka vraća 502 umjesto iznimke', async () => {
  globalThis.fetch = async () => {
    throw new TypeError('fetch failed');
  };
  const r = await call(OK_BODY);
  assert.equal(r.status, 502);
});

test('ostale metode vraćaju 405', async () => {
  const res = onRequest();
  assert.equal(res.status, 405);
});
