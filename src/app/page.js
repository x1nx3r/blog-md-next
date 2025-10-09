import Link from "next/link";
import Header from "@/components/Header";
import SidebarBox from "@/components/SidebarBox";
import PostCard from "@/components/PostCard";
import { getPostsMetadata } from "@/lib/posts";

export default function HomePage() {
  const posts = getPostsMetadata();

  return (
    <div className="min-h-screen bg-macchiato-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content */}
          <main className="flex-1 order-2 lg:order-1">
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-macchiato-text mb-4 md:mb-6">
                Latest Posts
              </h2>
              
              {posts.length > 0 ? (
                <div className="space-y-3 md:space-y-4">
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
              ) : (
                <div className="text-center py-8 md:py-12">
                  <p className="text-macchiato-subtext0 text-base md:text-lg">
                    No posts yet. Check back soon!
                  </p>
                </div>
              )}
            </section>
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
