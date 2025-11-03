import Link from "next/link";

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

export default function PostCard({ slug, title, date, summary, variant = "standard" }) {
  const formattedDate = formatDate(date);

  const stylesByVariant = {
    standard:
      "mb-8 pb-6 border-b border-gray-300 last:border-none", // default column/story layout
    condensed:
      "py-4 border-b border-dashed border-gray-400 last:border-none", // sidebar teasers
    column:
      "mb-6", // used inside multi-column sections
  };

  const headingByVariant = {
    standard: "text-2xl font-bold",
    condensed: "text-lg font-semibold",
    column: "text-xl font-semibold",
  };

  const containerClasses = stylesByVariant[variant] ?? stylesByVariant.standard;
  const headingClasses = headingByVariant[variant] ?? headingByVariant.standard;
  const breakStyle = variant === "column" ? { breakInside: "avoid-column" } : {};

  return (
    <article
      className={`newspaper-ink-specks ${containerClasses}`.trim()}
      style={breakStyle}
    >
      <Link href={`/post/${slug}`} className="block group space-y-2">
        <time
          className="block text-[0.65rem] uppercase tracking-[0.35em] text-gray-600 newspaper-smallcaps"
          aria-label={`Published on ${formattedDate}`}
        >
          {formattedDate}
        </time>

        <h3
          className={`${headingClasses} newspaper-headline newspaper-tight group-hover:underline`}
        >
          {title}
        </h3>

        <p className="text-sm text-gray-700 newspaper-tight leading-relaxed">
          {summary}
        </p>

        <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-700 newspaper-ink-underline group-hover:text-black transition-colors">
          Read full dispatch →
        </span>
      </Link>
    </article>
  );
}
