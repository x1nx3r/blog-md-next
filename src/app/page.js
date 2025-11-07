import Link from "next/link";
import Header from "@/components/Header";
import NewspaperFolio from "@/components/NewspaperFolio";
import FeaturedArticle from "@/components/FeaturedArticle";
import ToplineNews from "@/components/ToplineNews";
import SecondaryFeature from "@/components/SecondaryFeature";
import SpotlightGrid from "@/components/SpotlightGrid";
import NewspaperSidebar from "@/components/NewspaperSidebar";
import HighlightCards from "@/components/HighlightCards";
import { getPostsMetadata, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

function extractFeatureContent(slug, fallbackContent) {
  if (!slug) {
    return fallbackContent;
  }

  try {
    const { content } = getPostBySlug(slug);
    return content.length > 0 ? content : fallbackContent;
  } catch (error) {
    console.error("Failed to pull featured content", error);
    return fallbackContent;
  }
}

export default function HomePage() {
  const posts = getPostsMetadata();
  const [featuredPost, ...restPosts] = posts;

  const toplinePosts = restPosts.slice(0, 3);
  const secondaryFeature = restPosts[3];
  const spotlightPosts = restPosts.slice(4, 7);
  const digestHighlights = restPosts.slice(7, 10);
  const wirePosts = restPosts.slice(10);

  const featureTitle = featuredPost?.title ?? "Presses Idle Awaiting Copy";
  const featureSummary =
    featuredPost?.summary ??
    "The newsroom is still typesetting the next big scoop. Return shortly for freshly inked pages.";
  const featureDate = featuredPost ? formatDate(featuredPost.date) : null;
  const featureLink = featuredPost ? `/post/${featuredPost.slug}` : null;

  const now = new Date();
  const folioDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const editionNumber = posts.length ? String(posts.length).padStart(2, "0") : "01";

  const fallbackFeatureContent = featuredPost
    ? `Mega Nugraha files a front-page report titled **"${featureTitle}."** ${featureSummary}\n\nSources inside the newsroom insist this dispatch pairs best with an over-caffeinated coding session and a generous helping of sticky notes.\n\nFor meticulous details, code snippets, and self-inflicted debugging tales, follow through to the full article and let the presses keep rolling.`
    : "The newsroom is currently polishing the lead plates and preparing copy for the next circulation.\n\nWhile the editors wrestle with typesetting, the archive remains open for perusal and the suggestion box welcomes telegrams.\n\nCheck back soon as the presses whirl back to life with freshly inked stories.";

  const featureContent = extractFeatureContent(featuredPost?.slug, fallbackFeatureContent);

  const highlightLabels = ["Global Dispatch", "Culture Desk", "Lab Report"];
  const highlightCards = digestHighlights.map((post, index) => ({
    post,
    label: highlightLabels[index] ?? "Spotlight",
  }));

  return (
    <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <NewspaperFolio 
          date={folioDate}
          editionNumber={editionNumber}
        />

        <section className="text-center newspaper-slight-tilt newspaper-ink-specks space-y-2">
          
          <Header />
        </section>

        <ToplineNews posts={toplinePosts} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <main className="lg:col-span-3 space-y-8">
            <FeaturedArticle
              title={featureTitle}
              summary={featureSummary}
              date={featureDate}
              link={featureLink}
              content={featureContent}
            />

            <SecondaryFeature post={secondaryFeature} />

            <SpotlightGrid posts={spotlightPosts} />

          </main>

          <NewspaperSidebar wirePosts={wirePosts} />
        </div>

        <HighlightCards highlightCards={highlightCards} />

        <footer className="text-center pt-4 text-xs text-gray-600 newspaper-faded newspaper-ink-specks">
          <div className="newspaper-thin-separator mb-4"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="newspaper-folio-sides">
              <span className="newspaper-smallcaps">Printed on Recycled Electrons</span>
              <span className="newspaper-registration-mark"></span>
              <span className="newspaper-smallcaps">Edition {editionNumber}</span>
            </div>
            <div>
              © {now.getFullYear()} The Wandering Mind • All Rights Reserved • No AI was harmed in the making of this newspaper
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
