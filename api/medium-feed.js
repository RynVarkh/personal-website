// api/medium-feed.js
export default async function handler(req, res) {
  const rssUrl = 'https://medium.com/feed/@rynvarkh';
  const response = await fetch(rssUrl);
  const xml = await response.text();
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(xml);
}