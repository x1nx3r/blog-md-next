import { notFound } from "next/navigation";
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
      title: `${post.title} | My Blog`,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-macchiato-base text-macchiato-text">
      <div className="flex flex-col min-w-3xl max-w-4xl items-center m-5 p-5 mx-20 mb-8 px-8 pb-8 rounded-sm bg-macchiato-crust">
        <Header />
        <div className="max-w-4xl min-w-3xl w-full flex flex-row justify-between items-start">
          <div className="max-w-4xl min-w-3xl w-full markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <SidebarBox />
        </div>
      </div>
    </div>
  );
}
