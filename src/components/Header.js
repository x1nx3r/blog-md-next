import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full mb-6 md:mb-8">
      <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
        <div className="flex flex-col space-y-1 md:space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-macchiato-text px-4">
            A Wandering Mind&apos;s Journal
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-macchiato-subtext1 font-light px-4 max-w-3xl">
            A Blog Where I Document All the Thingamajig I Concocted and All the Whatchamacallit I Felt
          </p>
        </div>
        
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm px-4">
          <Link 
            href="/" 
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            Blog
          </Link>
          <span className="text-macchiato-overlay0 hidden sm:inline">•</span>
          <Link 
            href="/about" 
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            About
          </Link>
          <span className="text-macchiato-overlay0 hidden sm:inline">•</span>
          <a 
            href="https://github.com/x1nx3r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            GitHub
          </a>
          <span className="text-macchiato-overlay0 hidden sm:inline">•</span>
          <a 
            href="mailto:monmega110@gmail.com"
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
