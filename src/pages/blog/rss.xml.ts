import { getCollection } from 'astro:content';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => +b.data.pubDate - +a.data.pubDate);
  const items = posts
    .map((p) => {
      const url = `https://ideja-it.hr/blog/${p.id}/`;
      return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.pubDate.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
    })
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>IDEJA IT blog</title><link>https://ideja-it.hr/blog/</link><description>IT, sigurnost i eRačun za tvrtke i knjigovodstvene urede</description><language>hr</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
