import crypto from 'node:crypto';

const base = new URL(process.argv[2] || 'https://shar-production-open-tools.pages.dev');
for (const pathname of ['/', '/en/', '/ru/', '/robots.txt', '/sitemap.xml']) {
  const url = new URL(pathname, base);
  const response = await fetch(url, { redirect: 'manual' });
  const body = await response.text();
  const item = {
    url: url.href,
    status: response.status,
    location: response.headers.get('location'),
    bytes: Buffer.byteLength(body),
    title: body.match(/<title>(.*?)<\/title>/)?.[1] || null,
    canonical: body.match(/rel="canonical" href="([^"]+)/)?.[1] || null,
    robots: body.match(/name="robots" content="([^"]+)/)?.[1] || null,
    sha256: crypto.createHash('sha256').update(body).digest('hex'),
  };
  console.log(JSON.stringify(item));
  if (response.status !== 200) process.exitCode = 1;
}
