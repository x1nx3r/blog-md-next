import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function HighlightCards({ highlightCards = [] }) {
  if (!highlightCards || highlightCards.length === 0) {
    return null;
  }

  return (
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
            <p className="markdown-body text-sm text-gray-700 newspaper-tight">{post.summary}</p>
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
  );
}