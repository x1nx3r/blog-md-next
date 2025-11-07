import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Mega Nugraha - Developer & Problem Creator",
  description: "Personal blog and portfolio of Mega Nugraha. Allegedly a developer. Realistically just someone who's too stubborn to quit and too caffeinated to think clearly.",
  keywords: ["Mega Nugraha", "developer", "blog", "portfolio", "Next.js", "React", "TypeScript", "LLM", "machine learning"],
  authors: [{ name: "Mega Nugraha", url: "https://github.com/x1nx3r" }],
  creator: "Mega Nugraha",
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
    title: "Mega Nugraha - Developer & Problem Creator",
    description: "Personal blog and portfolio of Mega Nugraha",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Nugraha - Developer & Problem Creator",
    description: "Personal blog and portfolio of Mega Nugraha",
  },
};

export default function RootLayout({ children }) {
  // Use NEXT_PUBLIC_GA_ID in your environment to avoid committing your measurement ID.
  // If not provided, the placeholder 'G-XXXXXXXXXX' will be used — replace it with your real ID.
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
  return (
    <html lang="en">
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
