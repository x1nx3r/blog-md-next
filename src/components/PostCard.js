import Link from "next/link";

export default function PostCard({ slug, title, date, summary }) {
  return (
    <Link href={`/post/${slug}`} className="no-underline">
      <div className="m-2 flex flex-col items-start rounded-sm p-5 bg-macchiato-mantle font-['Figtree',sans-serif] hover:bg-macchiato-surface0 transition-colors cursor-pointer">
        <div className="mb-1 text-2xl font-['Figtree',sans-serif]">{title}</div>
        <div className="mb-1 text-sm text-macchiato-subtext0 font-['Figtree',sans-serif]">
          {date}
        </div>
        <div className="text-md text-macchiato-subtext1 font-['Figtree',sans-serif]">
          {summary}
        </div>
      </div>
    </Link>
  );
}
