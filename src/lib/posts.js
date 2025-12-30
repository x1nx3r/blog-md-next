import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

/**
 * Get all post slugs
 * @returns {string[]} Array of post slugs
 */
export function getAllPostSlugs() {
  /**
   * Normalize filenames into safe slugs that we expose to the app.
   * - Replace literal '%' with '-percent-' so files with '%' are still addressable.
   * - Collapse whitespace into dashes.
   * - Replace remaining unsafe characters with dashes.
   * - Lowercase for consistency.
   */
  const normalizeFilenameToSlug = (name) =>
    name
      .replace(/\.md$/, "")
      .replace(/%/g, "-percent-")
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9\-_.]/g, "-")
      .toLowerCase();

  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        // If the raw filename is already a valid slug, keep it; otherwise return normalized slug
        const raw = fileName.replace(/\.md$/, "");
        const normalized = normalizeFilenameToSlug(fileName);
        return raw === normalized ? raw : normalized;
      });
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
  /**
   * Resolve a slug to an actual filename in the posts directory.
   * This helps when filenames contain unsafe characters (e.g. '%') but the
   * route or links use a normalized slug form.
   *
   * Strategy:
   * 1. Try exact match: <slug>.md
   * 2. Try to find a file whose normalized slug matches the requested slug.
   * 3. Try decodeURIComponent(slug) as a fallback.
   * 4. If none found, fall back to attempting to read <slug>.md (original behavior).
   */
  const normalizeFilenameToSlug = (name) =>
    name
      .replace(/\.md$/, "")
      .replace(/%/g, "-percent-")
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9\-_.]/g, "-")
      .toLowerCase();

  // Read available filenames once
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));

  // 1) Direct filename match
  let matchedFile = fileNames.find((f) => f.replace(/\.md$/, "") === slug);

  // 2) Normalized filename match
  if (!matchedFile) {
    matchedFile = fileNames.find((f) => normalizeFilenameToSlug(f) === slug);
  }

  // 3) Try decodeURIComponent (covers cases where slugs were percent-encoded)
  if (!matchedFile) {
    try {
      const decoded = decodeURIComponent(slug);
      matchedFile = fileNames.find((f) => f.replace(/\.md$/, "") === decoded);
    } catch (e) {
      // ignore decode errors
    }
  }

  // Build the path to the resolved file (or fallback to slug.md)
  const fullPath = path.join(postsDirectory, matchedFile || `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // If we resolved a different filename, use that as the canonical slug
  const finalSlug = matchedFile ? matchedFile.replace(/\.md$/, "") : slug;

  return {
    slug: finalSlug,
    content,
    title: data.title || finalSlug,
    date: data.date || new Date().toISOString().split("T")[0],
    author: data.author || "Mega Nugraha",
    summary:
      data.summary || content.split(/\s+/).slice(0, 30).join(" ") + "...",
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
