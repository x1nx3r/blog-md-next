import { getPostsMetadata } from '@/lib/posts';

export default function sitemap() {
  const baseUrl = 'https://x1nx3r.dev';
  const posts = getPostsMetadata();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic post pages
  const postPages = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...postPages];
}