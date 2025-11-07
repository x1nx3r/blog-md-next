import { getPostsMetadata } from '@/lib/posts';

export async function GET() {
  const posts = getPostsMetadata();
  const baseUrl = 'https://x1nx3r.dev';
  const buildDate = new Date().toUTCString();

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Mega Nugraha's Blog</title>
    <description>Personal blog and portfolio of Mega Nugraha. Full-stack developer sharing thoughts on web development, machine learning, and technology.</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <generator>Next.js</generator>
    <webMaster>monmega110@gmail.com (Mega Nugraha)</webMaster>
    <managingEditor>monmega110@gmail.com (Mega Nugraha)</managingEditor>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Programming</category>
    <ttl>1440</ttl>
    
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.summary}]]></description>
      <link>${baseUrl}/post/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/post/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>monmega110@gmail.com (${post.author || 'Mega Nugraha'})</author>
      <category>Technology</category>
      <source url="${baseUrl}/feed.xml">Mega Nugraha's Blog</source>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  });
}