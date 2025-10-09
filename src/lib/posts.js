import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

/**
 * Get all post slugs
 * @returns {string[]} Array of post slugs
 */
export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

/**
 * Get post data by slug
 * @param {string} slug - The post slug
 * @returns {Object} Post data with metadata and content
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split("T")[0],
    author: data.author || "Mega Nugraha",
    summary: data.summary || content.split(/\s+/).slice(0, 30).join(" ") + "...",
    published: data.published !== false,
    ...data,
  };
}

/**
 * Get all posts sorted by date
 * @returns {Object[]} Array of post objects
 */
export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

/**
 * Get post metadata without content (for listings)
 * @returns {Object[]} Array of post metadata
 */
export function getPostsMetadata() {
  const posts = getAllPosts();
  return posts.map(({ slug, title, date, author, summary }) => ({
    slug,
    title,
    date,
    author,
    summary,
  }));
}
