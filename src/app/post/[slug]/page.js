import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Header from "@/components/Header";
import SidebarBox from "@/components/SidebarBox";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
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
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-macchiato-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content */}
          <main className="flex-1 order-2 lg:order-1">
            <article className="bg-macchiato-mantle rounded-lg p-4 md:p-6 lg:p-8 border border-macchiato-surface0">
              {/* Back link */}
              <Link 
                href="/" 
                className="inline-flex items-center text-xs md:text-sm text-macchiato-subtext0 hover:text-macchiato-text transition-colors mb-4 md:mb-6"
              >
                <span className="mr-2">←</span>
                Back to posts
              </Link>
              
              {/* Post header */}
              <header className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-macchiato-surface0">
                <h1 className="text-2xl md:text-3xl font-bold text-macchiato-text mb-2 md:mb-3">
                  {post.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-macchiato-subtext0 gap-2 sm:gap-4">
                  <time className="font-mono">{post.date}</time>
                  <span className="hidden sm:inline">•</span>
                  <span>by {post.author}</span>
                </div>
              </header>
              
              {/* Post content */}
              <div className="markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <div className="lg:w-80 order-1 lg:order-2">
            <SidebarBox />
          </div>
        </div>
      </div>
    </div>
  );
}
