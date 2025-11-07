import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function SpotlightGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="newspaper-ink-specks newspaper-text">
      <div className="newspaper-separator mb-5"></div>
      <span className="newspaper-section-label">Front Page Spotlights</span>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="newspaper-spotlight-card newspaper-ink-specks newspaper-text">
            <time className="block text-[0.6rem] uppercase tracking-[0.3em] text-gray-500 newspaper-smallcaps">
              {formatDate(post.date)}
            </time>
            <Link href={`/post/${post.slug}`} className="block group">
              <h3 className="text-xl font-semibold text-black mt-2 newspaper-headline group-hover:underline">
                {post.title}
              </h3>
            </Link>
            <p className="markdown-body text-sm text-gray-700 newspaper-tight mt-2">
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
  );
}