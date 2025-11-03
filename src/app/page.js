import Link from "next/link";
import Header from "@/components/Header";
import SidebarBox from "@/components/SidebarBox";
import { getPostsMetadata, getPostBySlug } from "@/lib/posts";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return dateString;
  }
}

function extractFeatureParagraphs(slug, fallbackParagraphs) {
  if (!slug) {
    return fallbackParagraphs;
  }

  try {
    const { content } = getPostBySlug(slug);
    const paragraphs = content
      .split(/\n\s*\n+/)
      .map((block) => block.trim())
      .filter((block) => block && !block.startsWith("```") && !block.endsWith("```"))
      .map((block) =>
        block
          .replace(/```[\s\S]*?```/g, "")
          .replace(/^#{1,6}\s*/gm, "")
          .replace(/^>\s?/gm, "")
          .replace(/!\[(.*?)\]\((.*?)\)/g, "$1")
          .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
          .replace(/`([^`]+)`/g, "$1")
          .replace(/\*\*([^*]+)\*\*/g, "$1")
          .replace(/\*([^*]+)\*/g, "$1")
          .replace(/_{1,2}([^_]+)_{1,2}/g, "$1")
          .replace(/^\s*[-*+]\s+/gm, "• ")
          .replace(/^\s*\d+\.\s+/gm, (match) => match.trim())
          .replace(/\s+/g, " ")
          .trim()
      )
      .filter(Boolean)
      .flatMap((block) =>
        block.includes("• ")
          ? block.split(/(?=• )/).map((line) => line.trim())
          : [block]
      );

    return paragraphs.length > 0 ? paragraphs : fallbackParagraphs;
  } catch (error) {
    console.error("Failed to pull featured paragraphs", error);
    return fallbackParagraphs;
  }
}

export default function HomePage() {
  const posts = getPostsMetadata();
  const [featuredPost, ...restPosts] = posts;

  const toplinePosts = restPosts.slice(0, 3);
  const secondaryFeature = restPosts[3];
  const spotlightPosts = restPosts.slice(4, 7);
  const digestHighlights = restPosts.slice(7, 10);
  const wirePosts = restPosts.slice(10);

  const featureTitle = featuredPost?.title ?? "Presses Idle Awaiting Copy";
  const featureSummary =
    featuredPost?.summary ??
    "The newsroom is still typesetting the next big scoop. Return shortly for freshly inked pages.";
  const featureDate = featuredPost ? formatDate(featuredPost.date) : null;
  const featureLink = featuredPost ? `/post/${featuredPost.slug}` : null;

  const now = new Date();
  const folioDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const editionNumber = posts.length ? String(posts.length).padStart(2, "0") : "01";

  const fallbackFeatureParagraphs = featuredPost
    ? [
        `Mega Nugraha files a front-page report titled "${featureTitle}". ${featureSummary}`,
        "Sources inside the newsroom insist this dispatch pairs best with an over-caffeinated coding session and a generous helping of sticky notes.",
        "For meticulous details, code snippets, and self-inflicted debugging tales, follow through to the full article and let the presses keep rolling.",
      ]
    : [
        "The newsroom is currently polishing the lead plates and preparing copy for the next circulation.",
        "While the editors wrestle with typesetting, the archive remains open for perusal and the suggestion box welcomes telegrams.",
        "Check back soon as the presses whirl back to life with freshly inked stories.",
      ];

  const featureParagraphs = extractFeatureParagraphs(featuredPost?.slug, fallbackFeatureParagraphs);

  const highlightLabels = ["Global Dispatch", "Culture Desk", "Lab Report"];
  const highlightCards = digestHighlights.map((post, index) => ({
    post,
    label: highlightLabels[index] ?? "Spotlight",
  }));

  return (
    <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <div className="newspaper-folio newspaper-ink-specks">
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Mega Nugraha Press</span>
            <span className="newspaper-registration-mark"></span>
          </div>
          <span className="newspaper-smallcaps">{folioDate}</span>
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Vol. II</span>
            <span className="newspaper-dateline">Jakarta, Indonesia</span>
            <span className="newspaper-smallcaps">No. {editionNumber}</span>
          </div>
        </div>

        <section className="text-center newspaper-slight-tilt newspaper-ink-specks space-y-2">
          <div className="text-xs uppercase tracking-wider text-gray-600 newspaper-faded">
            Daily Bulletin • Established 2024 • Independent Developer Chronicle
          </div>
          <Header />
          <div className="newspaper-masthead-border mt-6"></div>
        </section>

        {toplinePosts.length > 0 && (
          <section className="newspaper-ink-specks">
            <div className="newspaper-separator mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toplinePosts.map((post) => (
                <article key={post.slug} className="space-y-2 newspaper-text">
                  <time className="block text-[0.6rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps mb-2">
                    {formatDate(post.date)}
                  </time>
                  <Link href={`/post/${post.slug}`} className="group block">
                    <h3 className="text-lg font-semibold text-black newspaper-headline leading-snug group-hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-700 newspaper-tight">
                    {post.summary}
                  </p>
                  <Link
                    href={`/post/${post.slug}`}
                    className="inline-block mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <main className="lg:col-span-3 space-y-8">
            <article
              className="pr-0 lg:pr-8 newspaper-slight-tilt newspaper-ink-specks"
              style={{ borderRight: "1px solid rgba(107, 107, 107, 0.3)" }}
            >
              <span className="newspaper-section-label">Late Final Edition</span>
              {featureDate && (
                <time className="block text-[0.65rem] uppercase tracking-[0.35em] text-gray-600 newspaper-smallcaps">
                  {featureDate}
                </time>
              )}
              {featureLink ? (
                <Link href={featureLink} className="group block mt-3">
                  <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text group-hover:underline">
                    {featureTitle}
                  </h2>
                </Link>
              ) : (
                <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text mt-3">
                  {featureTitle}
                </h2>
              )}
              <p className="newspaper-deck newspaper-tight mt-4">{featureSummary}</p>
              <div className="text-sm text-gray-600 mt-3 newspaper-text newspaper-faded newspaper-smallcaps">
                By <span className="newspaper-ink-underline">Mega Nugraha</span> • Staff Writer • Dateline:
                <span className="newspaper-dateline ml-2">Bandung Bureau</span>
              </div>
              <div className="newspaper-separator mt-5"></div>

              <div className="columns-1 md:columns-2 gap-8 text-justify leading-relaxed newspaper-text newspaper-vintage-text newspaper-columns">
                {featureParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm md:text-base newspaper-tight mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {featureLink && (
                <Link
                  href={featureLink}
                  className="inline-block mt-4 text-xs uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
                >
                  Continue reading the full dispatch →
                </Link>
              )}
            </article>

            {secondaryFeature && (
              <article className="newspaper-ink-specks newspaper-text">
                <div className="newspaper-separator mb-5"></div>
                <span className="newspaper-section-label">Second Lead</span>
                <time className="block text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps">
                  {formatDate(secondaryFeature.date)}
                </time>
                <Link href={`/post/${secondaryFeature.slug}`} className="block group mt-3">
                  <h3 className="text-3xl font-bold text-black leading-snug newspaper-headline newspaper-vintage-text group-hover:underline">
                    {secondaryFeature.title}
                  </h3>
                </Link>
                <p className="text-sm sm:text-base text-gray-700 newspaper-tight leading-relaxed mt-3">
                  {secondaryFeature.summary}
                </p>
                <Link
                  href={`/post/${secondaryFeature.slug}`}
                  className="inline-block mt-4 text-xs uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
                >
                  Read the full report →
                </Link>
              </article>
            )}

            {spotlightPosts.length > 0 && (
              <section className="newspaper-ink-specks newspaper-text">
                <div className="newspaper-separator mb-5"></div>
                <span className="newspaper-section-label">Front Page Spotlights</span>
                <div className="grid gap-6 md:grid-cols-2">
                  {spotlightPosts.map((post) => (
                    <article key={post.slug} className="newspaper-spotlight-card newspaper-ink-specks newspaper-text">
                      <time className="block text-[0.6rem] uppercase tracking-[0.3em] text-gray-500 newspaper-smallcaps">
                        {formatDate(post.date)}
                      </time>
                      <Link href={`/post/${post.slug}`} className="block group">
                        <h3 className="text-xl font-semibold text-black mt-2 newspaper-headline group-hover:underline">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-700 newspaper-tight mt-2">
                        {post.summary}
                      </p>
                      <Link
                        href={`/post/${post.slug}`}
                        className="inline-block mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
                      >
                        View article →
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}

          </main>

          <aside className="lg:col-span-1 space-y-6">
            <SidebarBox />

            {wirePosts.length > 0 ? (
              <div className="newspaper-ink-specks newspaper-text">
                <div className="newspaper-separator mb-4"></div>
                <span className="newspaper-section-label">News Wire</span>
                <ul className="space-y-3 text-sm text-gray-700 newspaper-tight newspaper-text">
                  {wirePosts.map((post) => (
                    <li key={post.slug} className="border-b border-dashed border-gray-300 pb-2 last:border-none last:pb-0">
                      <Link href={`/post/${post.slug}`} className="flex flex-col gap-1 hover:text-black transition-colors">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 newspaper-smallcaps">
                          {formatDate(post.date)}
                        </span>
                        <span className="font-semibold text-black newspaper-headline text-base">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="newspaper-ink-specks newspaper-text">
                <div className="newspaper-separator mb-4"></div>
                <span className="newspaper-section-label">News Wire</span>
                <p className="text-xs text-gray-700 newspaper-tight">
                  Telegraph lines are quiet tonight. Drop the editor a note if you have a scoop worth printing.
                </p>
              </div>
            )}

            <div className="newspaper-ad newspaper-ink-specks">
              <div className="newspaper-ad-heading">Commission Work Accepted</div>
              <div className="newspaper-ad-divider"></div>
              <p className="text-xs uppercase tracking-widest text-gray-700">
                Custom web experiences • Local-first tooling • Overnight turnarounds
              </p>
              <div className="newspaper-ad-price">$29</div>
              <p className="text-sm newspaper-tight">
                Secure your slot in the workshop. Mention code <span className="newspaper-ink-underline">LINOTYPE</span> for a complimentary retro favicon polish.
              </p>
            </div>
          </aside>
        </div>

        {highlightCards.length > 0 && (
          <section className="newspaper-ink-specks">
            <div className="newspaper-separator mb-6"></div>
            <span className="newspaper-section-label">Also In This Edition</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {highlightCards.map(({ post, label }) => (
                <article key={`${label}-${post.slug}`} className="newspaper-slight-tilt newspaper-text">
                  <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gray-500 newspaper-smallcaps mb-2">
                    {label}
                  </span>
                  <time className="block text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps mb-2">
                    {formatDate(post.date)}
                  </time>
                  <Link href={`/post/${post.slug}`} className="block">
                    <h3 className="text-2xl font-bold text-black pb-2 mb-3 newspaper-headline newspaper-vintage-text hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="newspaper-thin-separator mb-3"></div>
                  <p className="text-sm text-gray-700 newspaper-tight">{post.summary}</p>
                  <Link
                    href={`/post/${post.slug}`}
                    className="inline-block mt-3 text-xs uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
                  >
                    Read the full story →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <footer className="text-center pt-4 text-xs text-gray-600 newspaper-faded newspaper-ink-specks">
          <div className="newspaper-thin-separator mb-4"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="newspaper-folio-sides">
              <span className="newspaper-smallcaps">Printed on Recycled Electrons</span>
              <span className="newspaper-registration-mark"></span>
              <span className="newspaper-smallcaps">Edition {editionNumber}</span>
            </div>
            <div>
              © {now.getFullYear()} The Wandering Mind • All Rights Reserved • No AI was harmed in the making of this newspaper
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
