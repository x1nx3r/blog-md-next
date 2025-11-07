/**
 * Image optimization utilities for SEO and performance
 * 
 * Recommendations for images on your blog:
 * 
 * 1. Create Open Graph images:
 *    - Size: 1200x630px (Facebook/LinkedIn optimal)
 *    - Format: PNG or JPG
 *    - Location: public/og-image.png, public/og-post-[slug].png
 *    - Include title text, branding, and key visual elements
 * 
 * 2. Profile/Author image:
 *    - Size: 400x400px minimum (square)
 *    - Format: JPG or WebP
 *    - Location: public/profile-image.jpg
 *    - High quality headshot or professional photo
 * 
 * 3. Blog post images (if adding):
 *    - Use Next.js Image component for automatic optimization
 *    - Always include descriptive alt text
 *    - Prefer WebP format for better compression
 *    - Use responsive sizes
 * 
 * 4. Favicon set (already configured):
 *    - Multiple sizes: 16x16, 32x32, 192x192, 512x512
 *    - Apple touch icon: 180x180
 *    - WebManifest for PWA support
 */

export const imageConfig = {
  // Recommended image sizes
  openGraph: { width: 1200, height: 630 },
  profile: { width: 400, height: 400 },
  postHero: { width: 800, height: 400 },
  
  // Next.js Image component defaults
  imageProps: {
    quality: 85,
    loading: 'lazy',
    placeholder: 'blur',
  },
  
  // Generate alt text for images
  generateAltText: (type, title) => {
    switch (type) {
      case 'profile':
        return 'Mega Nugraha - Full-Stack Developer';
      case 'og-home':
        return 'Mega Nugraha - Developer & Problem Creator';
      case 'og-post':
        return `${title} - Blog post by Mega Nugraha`;
      case 'og-about':
        return 'About Mega Nugraha - Full-Stack Developer';
      default:
        return title;
    }
  },
};

/**
 * TODO: Create these images manually or using a tool like Canva/Figma:
 * 
 * Required images to create:
 * - public/og-image.png (1200x630) - Main site Open Graph image
 * - public/profile-image.jpg (400x400) - Your profile photo
 * 
 * Optional but recommended:
 * - public/og-post-[slug].png for each blog post
 * - Consider using a service like Vercel OG Image Generation API
 *   for dynamic Open Graph images
 */

export default imageConfig;