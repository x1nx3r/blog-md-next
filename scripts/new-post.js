#!/usr/bin/env node

/**
 * Simple script to create a new blog post
 * Usage: node scripts/new-post.js "My Post Title"
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

function createPost(title) {
  const slug = slugify(title);
  const date = new Date().toISOString().split("T")[0];
  const postsDir = path.join(__dirname, "..", "src", "content", "posts");
  const filePath = path.join(postsDir, `${slug}.md`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`❌ Error: Post "${slug}.md" already exists!`);
    process.exit(1);
  }

  const template = `---
title: "${title}"
date: "${date}"
author: "Mega Nugraha"
summary: "Add your post summary here..."
published: true
---

## Introduction

Write your post content here...

## Section 2

More content...

## Conclusion

Wrap it up...
`;

  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }

  fs.writeFileSync(filePath, template);
  console.log(`✅ Created new post: ${filePath}`);
  console.log(`📝 Post slug: ${slug}`);
  console.log(`🔗 URL: /post/${slug}`);
}

// Get title from command line
const title = process.argv[2];

if (!title) {
  console.error("❌ Error: Please provide a post title");
  console.log('Usage: node scripts/new-post.js "My Post Title"');
  process.exit(1);
}

createPost(title);
