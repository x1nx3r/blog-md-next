import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function SecondaryFeature({ post }) {
  if (!post) {
    return null;
  }

  return (
    <article className="newspaper-ink-specks newspaper-text">
      <div className="newspaper-separator mb-5"></div>
      <span className="newspaper-section-label">Second Lead</span>
      <time className="block text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps">
        {formatDate(post.date)}
      </time>
      <Link href={`/post/${post.slug}`} className="block group mt-3">
        <h3 className="text-3xl font-bold text-black leading-snug newspaper-headline newspaper-vintage-text group-hover:underline">
          {post.title}
        </h3>
      </Link>
      <p className="markdown-body text-sm sm:text-base text-gray-700 newspaper-tight leading-relaxed mt-3">
        {post.summary}
      </p>
      <Link
        href={`/post/${post.slug}`}
        className="inline-block mt-4 text-xs uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
      >
        Read the full report →
      </Link>
    </article>
  );
}