import Link from "next/link";
import SidebarBox from "./SidebarBox";
import { formatDate } from "@/lib/utils";

export default function NewspaperSidebar({ wirePosts = [] }) {
  return (
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
          <p className="markdown-body text-xs text-gray-700 newspaper-tight">
            Telegraph lines are quiet tonight. Drop the editor a note if you have a scoop worth printing.
          </p>
        </div>
      )}

      <div className="newspaper-ad newspaper-ink-specks">
        <div className="newspaper-ad-heading">Developer For Hire</div>
        <div className="newspaper-ad-divider"></div>
        <p className="text-xs uppercase tracking-widest text-gray-700 newspaper-smallcaps newspaper-text">
          Full-Stack Development • Cloud Solutions • DevOps Expertise
        </p>
        <div className="newspaper-ad-price">$15<span className="text-base">/hour</span></div>
        <p className="text-sm newspaper-tight newspaper-text">
          <strong>Specializing in:</strong> Next.js, React, Node.js, Python, TypeScript, Docker, Firebase, Cloudflare & Linux systems.
        </p>
        <div className="newspaper-ad-divider mt-3"></div>
        <p className="text-xs newspaper-tight newspaper-text">
          Ready to tackle your next project. Contact through <span className="newspaper-ink-underline">GitHub</span> or direct mail above.
        </p>
      </div>
    </aside>
  );
}