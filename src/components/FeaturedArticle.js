import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function FeaturedArticle({ 
  title, 
  summary, 
  date, 
  link, 
  content,
  author = "Mega Nugraha",
  bureau = "Bandung Bureau"
}) {
  return (
    <article
      className="pr-0 lg:pr-8 newspaper-slight-tilt newspaper-ink-specks"
      style={{ borderRight: "1px solid rgba(107, 107, 107, 0.3)" }}
    >
      <div className="flex items-center justify-center gap-4">
        <span className="newspaper-section-label">Late Final Edition</span>
        <span className="flex-1"></span>
        {date && <time className="flex items-center text-[1rem] uppercase tracking-[0.35em] text-gray-600 newspaper-smallcaps pb-2">{date}</time>}
      </div>
      {link ? (
        <Link href={link} className="group block mt-3">
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text group-hover:underline">
            {title}
          </h2>
        </Link>
      ) : (
        <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text mt-3">
          {title}
        </h2>
      )}
      <p className="newspaper-deck newspaper-tight mt-4">{summary}</p>

      <div className="newspaper-separator mt-5"></div>

      <div className="markdown-body columns-1 md:columns-2 gap-8 text-justify leading-relaxed newspaper-text newspaper-vintage-text newspaper-columns">
        <div className="text-sm md:text-base newspaper-tight">
            <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            >
            {content}
            </ReactMarkdown>
        </div>
      </div>

      {link && (
        <Link
          href={link}
          className="inline-block mt-4 text-xs uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline hover:text-black transition-colors"
        >
          Continue reading the full dispatch →
        </Link>
      )}
    </article>
  );
}