import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Header from "@/components/Header";
import NewspaperFolio from "@/components/NewspaperFolio";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <NewspaperFolio 
          publicationName="Mega Nugraha Press"
          date="Special Feature"
          editionNumber={`Filed ${formatDate(post.date)}`}
        />

        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <main className="lg:col-span-3 newspaper-text newspaper-vintage-text">
            <article 
              className="pr-0 lg:pr-8 newspaper-slight-tilt newspaper-ink-specks"
              style={{ borderRight: "1px solid rgba(107, 107, 107, 0.3)" }}
            >
              

              <div className="flex items-center gap-4">
                <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps hover:text-black transition-colors mb-2"
                >
                  <span aria-hidden="true">←</span>
                  Return to newsroom archive
                </Link>
                <div className="flex-1"></div>
                <time className="flex items-center text-[1rem] uppercase tracking-[0.35em] text-gray-600 newspaper-smallcaps mb-2">
                  {formatDate(post.date)}
                </time>
                
                <span className="newspaper-section-label">Feature Report</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight newspaper-headline newspaper-vintage-text newspaper-text mb-4">
                {post.title}
              </h1>

              <div className="text-sm text-gray-600 newspaper-smallcaps mb-5 newspaper-text">
                By <span className="newspaper-ink-underline">{post.author}</span> • Staff Correspondent
              </div>

              <div className="newspaper-separator mb-6"></div>

              <div className="markdown-body columns-1 md:columns-2 gap-8 text-justify leading-relaxed newspaper-text newspaper-vintage-text newspaper-columns">
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
