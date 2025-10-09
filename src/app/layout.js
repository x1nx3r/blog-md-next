import "./globals.css";

export const metadata = {
  title: "Mega Nugraha - Developer & Problem Creator",
  description: "Personal blog and portfolio of Mega Nugraha. Allegedly a developer. Realistically just someone who's too stubborn to quit and too caffeinated to think clearly.",
  keywords: ["Mega Nugraha", "developer", "blog", "portfolio", "Next.js", "React", "TypeScript", "LLM", "machine learning"],
  authors: [{ name: "Mega Nugraha", url: "https://github.com/x1nx3r" }],
  creator: "Mega Nugraha",
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
    <html lang="en" className="bg-macchiato-base">
      <body className="antialiased bg-macchiato-base min-h-screen">
        <div className="bg-macchiato-base min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
