# Content Management Workflow

## 📝 Simple Markdown → Deploy Pipeline

This blog uses a streamlined content management approach:

```
Write Markdown → Git Commit → Vercel Auto-Deploy → Live Blog
```

## 🚀 Adding New Posts

### 1. Create New Post
```bash
npm run new-post "Your Post Title"
```

This generates a new markdown file in `src/content/posts/` with:
- Proper frontmatter template
- Auto-generated slug
- Current date
- Your author info

### 2. Edit Content
Edit the generated `.md` file with your content:

```markdown
---
title: "Your Post Title"
date: "2025-10-09"
author: "Mega Nugraha"
summary: "Add your post summary here..."
published: true
---

## Your Content Here

Write your post content in markdown...
```

### 3. Deploy
```bash
git add .
git commit -m "Add new post: Your Post Title"
git push
```

Vercel automatically:
- Detects the git push
- Runs `npm run build`
- Generates static pages for all posts
- Deploys to production

## 📁 Content Structure

```
src/content/posts/
├── post-slug-1.md
├── post-slug-2.md
└── your-new-post.md
```

Each post becomes available at `/post/your-post-slug`

## ⚡ Benefits of This Approach

- **Zero Database Costs**: No Firebase/external DB needed
- **Ultra Fast**: Static generation = ~100ms page loads
- **SEO Perfect**: Pre-rendered HTML for all posts
- **Version Control**: Full content history in git
- **Simple Workflow**: Just markdown files
- **Auto-Deploy**: Push to deploy, no manual steps
- **Offline Capable**: All content in codebase

## 🛠️ Available Scripts

```bash
# Create new post
npm run new-post "Post Title"

# Development server
npm run dev

# Build for production
npm run build

# Production server
npm run start

# Lint code
npm run lint
```

## 📦 Deployment Pipeline

1. **Local Development**: 
   - Write posts in markdown
   - Preview with `npm run dev`

2. **Git Workflow**:
   - Commit new/edited posts
   - Push to main branch

3. **Vercel Deployment**:
   - Auto-detects changes
   - Builds static site
   - Deploys globally

## 🎯 Content Best Practices

- **Frontmatter**: Always include title, date, summary
- **Images**: Place in `/public/` folder, reference with `/image.png`
- **Slugs**: Auto-generated, but customize if needed
- **Drafts**: Set `published: false` to hide posts
- **SEO**: Write descriptive summaries for better discovery

This simple approach gives you all the benefits of a modern blog without the complexity of external databases or content management systems.