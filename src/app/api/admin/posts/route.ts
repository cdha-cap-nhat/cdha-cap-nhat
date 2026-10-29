import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { POSTS } from "@/data/posts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const getOverrides = (): Record<string, any> => {
  if (!(globalThis as any).__POST_OVERRIDES__) {
    (globalThis as any).__POST_OVERRIDES__ = {};
  }
  return (globalThis as any).__POST_OVERRIDES__;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const overrides = getOverrides();

  if (!slug) {
    const mergedPosts = POSTS.map((p) => (overrides[p.slug] ? { ...p, ...overrides[p.slug] } : p));
    return NextResponse.json({ posts: mergedPosts });
  }

  const basePost = POSTS.find((p) => p.slug === slug);
  if (!basePost && !overrides[slug]) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const post = { ...(basePost || {}), ...(overrides[slug] || {}) };
  return NextResponse.json({ post });
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { slug, title, excerpt, author, readTime, htmlContent, tags } = body;

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const overrides = getOverrides();
    const basePost = POSTS.find((p) => p.slug === slug) || {};

    const updatedPost = {
      ...basePost,
      ...(overrides[slug] || {}),
      ...(title !== undefined ? { title } : {}),
      ...(excerpt !== undefined ? { excerpt } : {}),
      ...(author !== undefined ? { author } : {}),
      ...(readTime !== undefined ? { readTime } : {}),
      ...(tags !== undefined ? { tags } : {}),
      ...(htmlContent !== undefined ? { htmlContent } : {}),
      updatedDate: "30 Tháng 10, 2026",
    };

    overrides[slug] = updatedPost;

    const postsFilePath = path.join(process.cwd(), "src", "data", "posts.ts");
    if (fs.existsSync(postsFilePath)) {
      let fileContent = fs.readFileSync(postsFilePath, "utf-8");

      // Check if post with slug exists in file
      if (fileContent.includes(slug)) {
        // Update title if provided
        if (title !== undefined) {
          fileContent = fileContent.replace(
            /(title:\s*)(["'`].*?["'`])(,)/,
            `$1${JSON.stringify(title)}$3`
          );
        }

        // Update author if provided
        if (author !== undefined) {
          fileContent = fileContent.replace(
            /(author:\s*)(["'`].*?["'`])(,)/,
            `$1${JSON.stringify(author)}$3`
          );
        }

        // Update readTime if provided
        if (readTime !== undefined) {
          fileContent = fileContent.replace(
            /(readTime:\s*)(["'`].*?["'`])(,)/,
            `$1${JSON.stringify(readTime)}$3`
          );
        }

        // Update excerpt if provided
        if (excerpt !== undefined) {
          fileContent = fileContent.replace(
            /(excerpt:\s*)(["'`].*?["'`])(,)/,
            `$1${JSON.stringify(excerpt)}$3`
          );
        }

        // Update tags if provided
        if (Array.isArray(tags)) {
          fileContent = fileContent.replace(
            /(tags:\s*)(\[.*?\])([\r\n\s]*\})/,
            `$1${JSON.stringify(tags)}$3`
          );
        }

        // Update htmlContent if provided
        if (htmlContent !== undefined) {
          const sanitizedHtml = htmlContent.replace(/`/g, "\\`").replace(/\${/g, "\\${");
          fileContent = fileContent.replace(
            /(htmlContent:\s*`)([\s\S]*?)(`[\s\S]*?views:)/,
            `$1\n${sanitizedHtml}\n    $3`
          );
        }

        fs.writeFileSync(postsFilePath, fileContent, "utf-8");
      }
    }

    return NextResponse.json({
      success: true,
      post: updatedPost,
      message: "Cập nhật bài viết thành công!",
    });
  } catch (error: any) {
    console.error("Error updating post:", error);
    return NextResponse.json({ error: error.message || "Failed to update post" }, { status: 500 });
  }
}
