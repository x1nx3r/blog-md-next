import "./globals.css";

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
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#f6f1e7] text-black">
        {children}
      </body>
    </html>
  );
}
