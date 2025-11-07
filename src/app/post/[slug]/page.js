import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Script from "next/script";
import Header from "@/components/Header";
import NewspaperFolio from "@/components/NewspaperFolio";
import SidebarBox from "@/components/SidebarBox";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    const postUrl = `https://x1nx3r.dev/post/${slug}`;
    const publishedDate = new Date(post.date).toISOString();
    
    // Extract keywords from content (simple approach)
    const keywords = [
      ...post.title.toLowerCase().split(' ').filter(word => word.length > 3),
      'programming', 
      'development', 
      'technology', 
      'Mega Nugraha',
      'blog'
    ];

    return {
      title: post.title,
      description: post.summary,
      keywords: keywords.join(', '),
      authors: [{ name: post.author || "Mega Nugraha" }],
      creator: post.author || "Mega Nugraha",
      publisher: "Mega Nugraha",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        type: 'article',
        url: postUrl,
        title: post.title,
        description: post.summary,
        siteName: "Mega Nugraha's Blog",
        publishedTime: publishedDate,
        authors: [post.author || "Mega Nugraha"],
        section: 'Technology',
        tags: keywords,
        images: [
          {
            url: `/og-post-${slug}.png`, // Generate these dynamically if needed
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.summary,
        images: [`/og-post-${slug}.png`],
        creator: '@x1nx3r', // Add your Twitter handle
      },
      alternates: {
        canonical: postUrl,
      },
      other: {
        'article:published_time': publishedDate,
        'article:author': post.author || "Mega Nugraha",
        'article:section': 'Technology',
        'article:tag': keywords.join(', '),
      },
    };
  } catch (error) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
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

  // Structured data for blog post
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "author": {
      "@type": "Person",
      "name": post.author || "Mega Nugraha",
      "url": "https://x1nx3r.dev/about"
    },
    "publisher": {
      "@type": "Person",
      "name": "Mega Nugraha",
      "url": "https://x1nx3r.dev"
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "url": `https://x1nx3r.dev/post/${slug}`,
    "image": [`https://x1nx3r.dev/og-post-${slug}.png`],
    "articleSection": "Technology",
    "inLanguage": "en-US",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://x1nx3r.dev/post/${slug}`
    }
  };

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema),
        }}
      />
      <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <NewspaperFolio 
          publicationName="Mega Nugraha Press"
          date="Special Feature"
          editionNumber={`Filed ${formatDate(post.date)}`}
        />

        <Header />

        {/* Breadcrumb Navigation */}
        <Breadcrumbs 
          items={[
            { label: "Home", href: "/" },
            { label: "Posts", href: "/#posts" },
            { label: post.title, href: null }
          ]}
        />

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
    </>
  );
}
