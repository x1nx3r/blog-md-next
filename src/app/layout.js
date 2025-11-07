import "./globals.css";
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://x1nx3r.dev'),
  title: {
    default: "Mega Nugraha - Developer & Problem Creator",
    template: "%s | Mega Nugraha"
  },
  description: "Personal blog and portfolio of Mega Nugraha. Allegedly a developer. Realistically just someone who's too stubborn to quit and too caffeinated to think clearly.",
  keywords: [
    "Mega Nugraha", 
    "developer", 
    "blog", 
    "portfolio", 
    "Next.js", 
    "React", 
    "TypeScript", 
    "LLM", 
    "machine learning",
    "full-stack developer",
    "web development",
    "software engineering",
    "Indonesia developer",
    "technical blog",
    "coding tutorials"
  ],
  authors: [{ name: "Mega Nugraha", url: "https://github.com/x1nx3r" }],
  creator: "Mega Nugraha",
  publisher: "Mega Nugraha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://x1nx3r.dev",
    title: "Mega Nugraha - Developer & Problem Creator",
    description: "Personal blog and portfolio of Mega Nugraha. Full-stack developer sharing thoughts on web development, machine learning, and technology.",
    siteName: "Mega Nugraha's Blog",
    images: [
      {
        url: "/og-image.png", // You'll want to create this
        width: 1200,
        height: 630,
        alt: "Mega Nugraha - Developer & Problem Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Nugraha - Developer & Problem Creator",
    description: "Personal blog and portfolio of Mega Nugraha. Full-stack developer sharing thoughts on web development, machine learning, and technology.",
    images: ["/og-image.png"],
    creator: "@x1nx3r", // Add your Twitter handle if you have one
  },
  alternates: {
    canonical: "https://x1nx3r.dev",
    types: {
      'application/rss+xml': [
        { url: 'https://x1nx3r.dev/feed.xml', title: 'RSS Feed' }
      ],
    },
  },
  category: 'technology',
  classification: 'Personal Blog',
};

export default function RootLayout({ children }) {
  // Use NEXT_PUBLIC_GA_ID in your environment to avoid committing your measurement ID.
  // If not provided, the placeholder 'G-XXXXXXXXXX' will be used — replace it with your real ID.
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mega Nugraha's Blog",
    "description": "Personal blog and portfolio of Mega Nugraha. Full-stack developer sharing thoughts on web development, machine learning, and technology.",
    "url": "https://x1nx3r.dev",
    "author": {
      "@type": "Person",
      "name": "Mega Nugraha",
      "url": "https://x1nx3r.dev/about",
      "sameAs": [
        "https://github.com/x1nx3r",
        "https://linkedin.com/in/muhammad-mega-nugraha-5a6193253",
        "https://www.instagram.com/x1nx3r/"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://x1nx3r.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mega Nugraha",
    "alternateName": "Muhammad Mega Nugraha",
    "description": "Full-stack developer specializing in Next.js, React, Node.js, Python, and modern web technologies.",
    "url": "https://x1nx3r.dev",
    "image": "https://x1nx3r.dev/profile-image.jpg", // Add this image
    "sameAs": [
      "https://github.com/x1nx3r",
      "https://linkedin.com/in/muhammad-mega-nugraha-5a6193253",
      "https://www.instagram.com/x1nx3r/"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Next.js",
      "React",
      "Node.js", 
      "Python",
      "TypeScript",
      "Docker",
      "Firebase",
      "Cloudflare",
      "Linux",
      "Web Development",
      "Machine Learning"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "University in Indonesia" // Update with actual university
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#f6f1e7] text-black">
        {/* Global Google Analytics (GA4) via gtag.js — loads after hydration */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`,
          }}
        />

        {children}
      </body>
    </html>
  );
}
