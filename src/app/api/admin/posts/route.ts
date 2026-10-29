import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { POSTS } from "@/data/posts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ posts: POSTS });
  }

  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { slug, title, excerpt, author, readTime, htmlContent, tags } = body;

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const postsFilePath = path.join(process.cwd(), "src", "data", "posts.ts");
    if (!fs.existsSync(postsFilePath)) {
      return NextResponse.json({ error: "posts.ts file not found" }, { status: 500 });
    }

    let fileContent = fs.readFileSync(postsFilePath, "utf-8");

    // Check if post with slug exists in file
    if (!fileContent.includes(slug)) {
      return NextResponse.json({ error: "Slug not found in posts.ts" }, { status: 404 });
    }

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

    return NextResponse.json({
      success: true,
      message: "Cập nhật bài viết thành công!",
    });
  } catch (error: any) {
    console.error("Error updating post:", error);
    return NextResponse.json({ error: error.message || "Failed to update post" }, { status: 500 });
  }
}
