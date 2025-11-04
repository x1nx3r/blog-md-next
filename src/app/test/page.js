import Image from "next/image";

export const metadata = {
  title: "1950s Newspaper Design Test | Mega Nugraha",
  description: "Testing a retro 1950s newspaper design for the blog",
};

export default function TestPage() {
  return (
    <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
      <div className="max-w-7xl mx-auto px-4 py-8 newspaper-page-curl">
        <div className="newspaper-folio newspaper-ink-specks">
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">The Wandering Mind Chronicle</span>
            <span className="newspaper-registration-mark"></span>
          </div>
          <span className="newspaper-smallcaps">Monday Edition • November 4, 2025</span>
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Price 5¢</span>
            <span className="newspaper-dateline">Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Newspaper Masthead */}
        <header className="text-center mb-8 newspaper-slight-tilt newspaper-ink-specks">
          <div className="text-xs uppercase tracking-wider mb-2 text-gray-600 newspaper-faded">
            Monday, November 4, 2025 • Vol. 1 • No. 1 • Est. 2024
          </div>
          <h1 className="text-6xl font-bold text-black mb-2 newspaper-masthead newspaper-vintage-text" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            THE WANDERING MIND
          </h1>
          <div className="text-lg italic text-gray-700 newspaper-text" style={{ fontFamily: '"Crimson Text", serif' }}>
            &ldquo;All the Code That&apos;s Fit to Print&rdquo;
          </div>
          <div className="text-sm mt-2 text-gray-600 newspaper-faded">
            Established by Mega Nugraha • Circulation: ∞
          </div>
          <div className="newspaper-edition-ribbon inline-block">Late Final Edition</div>
          <div className="newspaper-masthead-border mt-6"></div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Story - Takes up 3 columns */}
          <article className="lg:col-span-3 pr-8 newspaper-slight-tilt" style={{ borderRight: '1px solid rgba(107, 107, 107, 0.3)' }}>
            <div className="pb-4 mb-6 newspaper-ink-specks">
              <h2 className="text-4xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                LOCAL DEVELOPER DISCOVERS<br />
                <span className="newspaper-misaligned">REVOLUTIONARY METHOD TO</span><br />
                AVOID READING DOCUMENTATION
              </h2>
              <p className="newspaper-deck newspaper-tight">
                Midnight coffee, questionable commits, and the bold promise that no README shall ever be opened again.
              </p>
              <div className="text-sm text-gray-600 mt-2 newspaper-text newspaper-faded newspaper-smallcaps" style={{ fontFamily: '"Crimson Text", serif' }}>
                By <span className="newspaper-ink-underline">Mega Nugraha</span> • Staff Writer • Dateline: <span className="newspaper-dateline">Bandung</span>
              </div>
              <div className="newspaper-separator mt-4"></div>
            </div>
            
            <div className="columns-2 gap-8 text-justify leading-relaxed newspaper-text newspaper-vintage-text newspaper-columns newspaper-ink-specks" style={{ fontFamily: '"Crimson Text", serif' }}>
              <p className="text-lg newspaper-dropcap">
                In a breakthrough that has stunned the programming community, local developer Mega Nugraha has reportedly perfected the ancient art of &quot;just trying random things until something works.&quot;
              </p>
              
              <p className="mt-4 newspaper-slight-tilt newspaper-tight">
                The revolutionary technique, which sources close to the matter describe as &quot;professionally irresponsible yet surprisingly effective,&quot; has already been implemented across multiple projects with what Nugraha calls &quot;catastrophic success.&quot;
              </p>
              
              <figure className="mt-5 mb-5 newspaper-ink-specks" style={{ columnSpan: 'all', breakInside: 'avoid' }}>
                <div className="newspaper-photo" style={{ aspectRatio: '4 / 3' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1000&q=60"
                    alt="Vintage typesetter operating a linotype machine"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="newspaper-photo-caption">
                  Linotype operator beams as deadline slips yet another hour past midnight.
                </figcaption>
              </figure>

              <p className="mt-4 newspaper-tight">
                &ldquo;I used to waste hours reading documentation,&rdquo; Nugraha explained during a recent interview conducted entirely through Stack Overflow comments. <span className="newspaper-misaligned">&ldquo;Now I just copy-paste code from GitHub Issues until my terminal stops showing red text.&rdquo;</span>
              </p>

              <p className="mt-4 newspaper-slight-tilt newspaper-tight">
                The methodology, tentatively named &quot;Shotgun Debugging,&quot; has drawn criticism from senior developers who argue that such practices could lead to &quot;functioning code&quot; and &quot;satisfied clients&quot; - outcomes they describe as &quot;unprecedented and potentially dangerous.&quot;
              </p>
              
              <p className="mt-4 newspaper-faded newspaper-tight">
                When reached for comment, ChatGPT simply responded with a perfectly formatted explanation that Nugraha immediately copied without reading.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="newspaper-border border-2 border-black p-4 mb-6 newspaper-slight-tilt newspaper-worn-edge newspaper-ink-specks">
              <span className="newspaper-section-label">Technology Desk</span>
              <h3 className="text-xl font-bold text-black pb-2 mb-3 newspaper-headline" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                TECH SECTION
              </h3>
              <div className="newspaper-thin-separator mb-3"></div>
              <div className="space-y-4 text-sm newspaper-text">
                <div className="newspaper-slight-tilt">
                  <h4 className="font-bold text-black">React 19 Released</h4>
                  <p className="text-gray-700 text-xs newspaper-faded">Developers worldwide simultaneously excited and terrified</p>
                </div>
                <div>
                  <h4 className="font-bold text-black newspaper-misaligned">Docker Containers Escape</h4>
                  <p className="text-gray-700 text-xs">Local man&apos;s laptop overheating, film at 11</p>
                </div>
                <div className="newspaper-slight-tilt">
                  <h4 className="font-bold text-black">CSS Grid vs Flexbox</h4>
                  <p className="text-gray-700 text-xs newspaper-faded">Peace talks scheduled for never</p>
                </div>
              </div>
            </div>

            <div className="newspaper-border border border-gray-400 p-4 newspaper-worn-edge newspaper-ink-specks">
              <span className="newspaper-section-label">Classified Notices</span>
              <h3 className="text-lg font-bold text-black pb-2 mb-3 newspaper-headline" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                CLASSIFIEDS
              </h3>
              <div className="newspaper-thin-separator mb-3"></div>
              <div className="space-y-3 text-xs newspaper-text newspaper-vintage-text">
                <div className="newspaper-slight-tilt">
                  <strong>WANTED:</strong> Senior Developer who remembers jQuery. Must have strong back for carrying legacy code.
                </div>
                <div className="newspaper-faded">
                  <strong>FOR SALE:</strong> Slightly used JavaScript framework. Only 3 dependencies, 847 vulnerabilities.
                </div>
                <div className="newspaper-slight-tilt">
                  <strong>LOST:</strong> My understanding of async/await. <span className="newspaper-misaligned">Last seen in a Promise chain.</span> Reward offered.
                </div>
              </div>
            </div>

            <div className="newspaper-ad newspaper-ink-specks">
              <div className="newspaper-ad-heading">Need a Web Presence?</div>
              <div className="newspaper-ad-divider"></div>
              <p className="text-xs uppercase tracking-widest text-gray-700">Full-stack craftsmanship • Overnight deployment</p>
              <div className="newspaper-ad-price">$19</div>
              <p className="text-sm newspaper-tight">
                Custom landing pages, automated newsletters, and handcrafted RSS feeds. Mention code <span className="newspaper-ink-underline">RETRO</span> for a free favicon refresh.
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 newspaper-ink-specks">
          <div className="newspaper-separator mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="newspaper-slight-tilt">
              <span className="newspaper-section-label">Sports Desk</span>
              <h3 className="text-2xl font-bold text-black pb-2 mb-3 newspaper-headline" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                SPORTS
              </h3>
              <div className="newspaper-thin-separator mb-3"></div>
              <h4 className="font-bold text-black newspaper-text">Vim vs Emacs Championship Postponed</h4>
              <p className="text-sm text-gray-700 mt-1 newspaper-faded">
                Due to both competitors refusing to figure out how to exit their respective editors.
              </p>
            </article>

            <article>
              <span className="newspaper-section-label">Weather Bureau</span>
              <h3 className="text-2xl font-bold text-black pb-2 mb-3 newspaper-headline" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                WEATHER
              </h3>
              <div className="newspaper-thin-separator mb-3"></div>
              <div className="text-sm text-gray-700 newspaper-text">
                <div className="font-bold">Today: Mostly Cloudy</div>
                <div className="newspaper-misaligned">High: 404°F (Error)</div>
                <div>Low: null°F</div>
                <div className="mt-2 italic newspaper-faded">Perfect weather for debugging indoors</div>
              </div>
            </article>

            <article className="newspaper-slight-tilt">
              <span className="newspaper-section-label">Opinion Page</span>
              <h3 className="text-2xl font-bold text-black pb-2 mb-3 newspaper-headline" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                OPINION
              </h3>
              <div className="newspaper-thin-separator mb-3"></div>
              <h4 className="font-bold text-black text-sm newspaper-text">Why Tabs vs Spaces Matters More Than World Peace</h4>
              <p className="text-xs text-gray-700 mt-1 italic newspaper-faded">
                Editorial by Anonymous Keyboard Warrior
              </p>
            </article>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 pt-4 text-xs text-gray-600 newspaper-faded newspaper-ink-specks">
          <div className="newspaper-thin-separator mb-4"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="newspaper-folio-sides">
              <span className="newspaper-smallcaps">Printed on Recycled Electrons</span>
              <span className="newspaper-registration-mark"></span>
              <span className="newspaper-smallcaps">Edition 37</span>
            </div>
            <div>© 2025 The Wandering Mind • All Rights Reserved • No AI was harmed in the making of this newspaper</div>
          </div>
        </footer>
      </div>
    </div>
  );
}