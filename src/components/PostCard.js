import Link from "next/link";

export default function PostCard({ slug, title, date, summary }) {
  return (
    <article className="bg-macchiato-mantle rounded-lg p-4 md:p-6 hover:bg-macchiato-surface0 transition-colors border border-macchiato-surface0">
      <Link href={`/post/${slug}`} className="block group">
        <div className="space-y-2 md:space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-lg md:text-xl font-semibold text-macchiato-text group-hover:text-macchiato-blue transition-colors">
              {title}
            </h2>
            <time className="text-xs md:text-sm text-macchiato-subtext0 font-mono">
              {date}
            </time>
          </div>
          
          <p className="text-sm md:text-base text-macchiato-subtext1 leading-relaxed line-clamp-3">
            {summary}
          </p>
          
          <div className="flex items-center text-xs md:text-sm text-macchiato-blue group-hover:text-macchiato-sapphire transition-colors">
            <span>Read more</span>
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
