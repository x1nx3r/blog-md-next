import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Header from "@/components/Header";
import SidebarBox from "@/components/SidebarBox";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

function formatDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Mega Nugraha`,
      description: post.summary,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function PostPage({ params }) {
  const { slug } = params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <div className="newspaper-folio newspaper-ink-specks">
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Mega Nugraha Press</span>
            <span className="newspaper-registration-mark"></span>
          </div>
          <span className="newspaper-smallcaps">Special Feature</span>
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Vol. II</span>
            <span className="newspaper-dateline">Jakarta Bureau</span>
            <span className="newspaper-smallcaps">Filed {formatDate(post.date)}</span>
          </div>
        </div>

        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
          <main className="space-y-8 newspaper-text">
            <article className="newspaper-ink-specks space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps hover:text-black transition-colors"
              >
                <span aria-hidden="true">←</span>
                Return to newsroom archive
              </Link>

              <div className="newspaper-separator"></div>

              <span className="newspaper-section-label">Feature Report</span>
              <time className="block text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps">
                {formatDate(post.date)}
              </time>

              <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text">
                {post.title}
              </h1>

              <div className="text-xs sm:text-sm text-gray-600 newspaper-smallcaps">
                By <span className="newspaper-ink-underline">{post.author}</span> • Staff Correspondent
              </div>

              <div className="newspaper-thin-separator"></div>

              <div className="markdown-body newspaper-text newspaper-vintage-text space-y-6">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>
          </main>

          <aside className="space-y-6 newspaper-text">
            <SidebarBox />
          </aside>
        </div>
      </div>
    </div>
  );
}
