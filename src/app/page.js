import Link from "next/link";
import Header from "@/components/Header";
import SidebarBox from "@/components/SidebarBox";
import PostCard from "@/components/PostCard";
import { getPostsMetadata } from "@/lib/posts";

export default function HomePage() {
  const posts = getPostsMetadata();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-macchiato-base">
      <div className="flex flex-col min-w-4xl max-w-4xl items-center m-5 p-5 rounded-sm bg-macchiato-crust">
        <Header />
        <div className="text-xl max-w-4xl min-w-3xl w-full flex flex-row justify-between items-start">
          <div className="flex flex-col rounded-sm p-3 m-2 text-macchiato-text">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                summary={post.summary}
              />
            ))}
          </div>
          <SidebarBox />
        </div>
      </div>
    </div>
  );
}
