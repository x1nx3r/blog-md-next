import Link from "next/link";

const navLinks = [
  { href: "/", label: "Front Page" },
  { href: "/about", label: "About the Editor" },
  { href: "https://github.com/x1nx3r", label: "GitHub Bureau", external: true },
  { href: "mailto:monmega110@gmail.com", label: "Send a Telegram", external: true },
];

export default function Header() {
  return (
    <header className="w-full text-center newspaper-ink-specks">
      <div className="flex flex-col items-center space-y-4">
        <div className="newspaper-edition-ribbon mt-2">Established 2024</div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black newspaper-masthead newspaper-vintage-text">
          A Wandering Mind&apos;s Journal
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl newspaper-tight">
          Dispatches from Mega Nugraha&apos;s newsroom: experiments, exploits, and the occasional existential dread rendered in monospace.
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
    </header>
  );
}
