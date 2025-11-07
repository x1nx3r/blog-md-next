import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function ToplineNews({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="newspaper-ink-specks">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <article 
            key={post.slug} 
            className="space-y-2 newspaper-text newspaper-vintage-text pr-0 sm:pr-6 lg:pr-6"
            style={{ 
              borderRight: index < posts.length - 1 && posts.length > 1 ? "1px solid rgba(107, 107, 107, 0.3)" : "none"
            }}
          >
            <time className="block text-[0.6rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps mb-2">
              {formatDate(post.date)}
            </time>
            <Link href={`/post/${post.slug}`} className="group block">
              <h3 className="text-lg font-semibold text-black newspaper-headline newspaper-vintage-text newspaper-text leading-snug group-hover:underline">
                {post.title}
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-gray-700 newspaper-tight newspaper-text">
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
  );
}