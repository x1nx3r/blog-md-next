import Link from "next/link";

const navLinks = [
  { href: "/", label: "Front Page" },
  { href: "/about", label: "About the Editor" },
  { href: "https://github.com/x1nx3r", label: "GitHub Bureau", external: true },
  { href: "mailto:monmega110@gmail.com", label: "Send a Mail", external: true },
];

export default function Header() {
  return (
    <header className="w-full text-center newspaper-ink-specks">
        <div className="text-sm uppercase tracking-wider text-gray-600 newspaper-faded mb-2">
              Not So-Daily Bulletin • Established 2024 • Independent Developer Chronicle
            </div>
      <div className="flex flex-col items-center space-y-4">

        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-black newspaper-masthead newspaper-vintage-text manufacturing-consent-regular">
          A Wandering Mind&apos;s Journal
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl newspaper-tight">
          Dispatches from my not-so-latest experiments, exploits, and the occasional wanders to the unkown that's successful enough to be written down.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm uppercase tracking-[0.35em] newspaper-smallcaps text-gray-700">
          {navLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-3">
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className="hover:text-black transition-colors">
                  {link.label}
                </Link>
              )}
              {index !== navLinks.length - 1 && (
                <span className="text-gray-400" aria-hidden="true">
                  &bull;
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
      <div className="newspaper-masthead-border mt-6"></div>
    </header>
  );
}
