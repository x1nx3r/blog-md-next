import "./globals.css";

export const metadata = {
  title: "My Blog",
  description: "A blog built with Next.js and Markdown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
