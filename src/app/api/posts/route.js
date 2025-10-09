import { NextResponse } from "next/server";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

/**
 * GET /api/posts - Get all posts
 * GET /api/posts?slug=post-slug - Get a specific post
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      const post = getPostBySlug(slug);
      return NextResponse.json(post);
    } else {
      const posts = getAllPosts();
      return NextResponse.json(posts);
    }
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 404 }
    );
  }
}
