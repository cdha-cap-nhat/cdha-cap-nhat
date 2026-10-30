"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Calendar,
  User,
  Eye,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  Edit,
  Type,
  ListTree,
  BookOpen,
  ChevronRight,
  Maximize2,
  Check,
  X,
  ArrowUp,
} from "lucide-react";
import { Post } from "@/types";
import TableOfContents, { HeadingItem } from "./TableOfContents";
import ChapterSidebar from "./ChapterSidebar";
import ImageLightboxModal from "./ImageLightboxModal";

interface MedicalReadingLayoutProps {
  post: Post;
  relatedPosts: Post[];
  recentPosts: Post[];
  isAdmin: boolean;
}

type FontSize = "sm" | "base" | "lg" | "xl";

function extractInitialHeadings(html?: string): HeadingItem[] {
  if (!html) return [];
  const regex = /<h([2-4])(?:[^>]*id="([^"]*)")?[^>]*>(.*?)<\/h\1>/gi;
  const items: HeadingItem[] = [];
  let match;
  let idx = 0;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    let id = match[2];
    const rawText = match[3].replace(/<[^>]+>/g, "").trim();
    if (!id) {
      id =
        rawText
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "") || `heading-${idx}`;
    }
    if (!rawText.toLowerCase().includes("mục lục bài giảng")) {
      items.push({ id, text: rawText, level });
    }
    idx++;
  }
  return items;
}

export default function MedicalReadingLayout({
  post,
  relatedPosts,
  recentPosts,
  isAdmin,
}: MedicalReadingLayoutProps) {
  // Reading States
  const [fontSize, setFontSize] = useState<FontSize>("base");
  const [readingProgress, setReadingProgress] = useState(0);
  const [headings, setHeadings] = useState<HeadingItem[]>(() =>
    extractInitialHeadings(post.htmlContent)
  );
  const [activeHeadingId, setActiveHeadingId] = useState<string>(() => {
    const initial = extractInitialHeadings(post.htmlContent);
    return initial.length > 0 ? initial[0].id : "";
  });
  const [copiedLink, setCopiedLink] = useState(false);

  // Sidebar collapse states (desktop)
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  // Mobile / Tablet Drawers
  const [isMobileChaptersOpen, setIsMobileChaptersOpen] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Image Lightbox State
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    caption: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
    caption: "",
  });

  const articleContentRef = useRef<HTMLDivElement>(null);

  // Combine related and current post to create chapter list
  const specialtyPosts = relatedPosts.concat([post]);
  const currentIndex = specialtyPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? specialtyPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < specialtyPosts.length - 1
      ? specialtyPosts[currentIndex + 1]
      : null;

  // 1. Reading Progress Calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(Math.max((scrollY / docHeight) * 100, 0), 100);
        setReadingProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Extract Headings and setup IDs from article content
  useEffect(() => {
    if (!articleContentRef.current) return;

    const headingElements = articleContentRef.current.querySelectorAll("h2, h3, h4");
    const extracted: HeadingItem[] = [];

    headingElements.forEach((el, index) => {
      let id = el.id;
      if (!id) {
        const cleanText = el.textContent?.trim().toLowerCase() || `heading-${index}`;
        id = cleanText
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
        el.id = id;
      }

      const level = parseInt(el.tagName.substring(1), 10) || 2;
      const text = el.textContent?.trim() || "";

      if (!text.toLowerCase().includes("mục lục bài giảng")) {
        extracted.push({ id, text, level });
      }
    });

    if (extracted.length > 0) {
      setHeadings(extracted);
      if (!activeHeadingId) {
        setActiveHeadingId(extracted[0].id);
      }
    }
  }, [post.htmlContent, post.content, post.slug]);

  // 3. Intersection Observer for Active Heading
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveHeadingId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: [0, 1.0],
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // 4. Attach click listener to medical images inside article for Lightbox zoom
  useEffect(() => {
    if (!articleContentRef.current) return;

    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "img") {
        const img = target as HTMLImageElement;
        if (img.width < 80 && img.height < 80) return;

        let captionText = "";
        const figure = img.closest("figure");
        if (figure) {
          const figcaption = figure.querySelector("figcaption");
          if (figcaption) {
            captionText = figcaption.textContent || "";
          }
        }
        if (!captionText) {
          captionText = img.alt || "";
        }

        setLightboxState({
          isOpen: true,
          src: img.src,
          alt: img.alt || "Ảnh y khoa",
          caption: captionText,
        });
      }
    };

    const container = articleContentRef.current;
    container.addEventListener("click", handleImageClick);

    return () => {
      container.removeEventListener("click", handleImageClick);
    };
  }, [post.htmlContent, post.content]);

  const handleHeadingClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveHeadingId(id);
      setIsMobileTocOpen(false);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Font Size CSS Classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "text-[15px] sm:text-[16px] leading-[1.65]";
      case "lg":
        return "text-[18px] sm:text-[20px] leading-[1.8]";
      case "xl":
        return "text-[20px] sm:text-[22px] leading-[1.85]";
      case "base":
      default:
        // Desktop default 17px - 18px with line-height 1.75 - 1.8
        return "text-[17px] sm:text-[18px] leading-[1.75]";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-24 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Floating Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60]">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 transition-all duration-100 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Main Container - Desktop Width with responsive padding */}
      <div className="max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-8 py-5">
        {/* Top Header Bar: Breadcrumb & Responsive Reading Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 mb-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href={`/?cat=${post.specialtySlug}`}
              className="hover:text-blue-600 text-slate-700 transition-colors"
            >
              {post.specialty}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold truncate max-w-sm">
              {post.title}
            </span>
          </nav>

          {/* Reading Controls Toolbar */}
          <div className="flex items-center gap-2 flex-wrap shrink-0">
            {/* Drawer triggers for Laptop / Tablet / Mobile */}
            <div className="desktop:hidden flex items-center gap-1.5">
              <button
                onClick={() => setIsMobileChaptersOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold border border-blue-200 transition-colors shadow-xs"
                title="Danh mục chương bài giảng"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Chương ({specialtyPosts.length})</span>
              </button>

              <button
                onClick={() => setIsMobileTocOpen(true)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-bold border border-sky-200 transition-colors shadow-xs"
                title="Mục lục bài giảng"
              >
                <ListTree className="w-3.5 h-3.5" />
                <span>Mục lục ({Math.round(readingProgress)}%)</span>
              </button>
            </div>

            {/* Font Size Adjuster A- / A / A+ */}
            <div className="inline-flex items-center bg-slate-100/90 rounded-xl p-1 border border-slate-200 text-xs">
              <span className="px-2 text-[11px] font-bold text-slate-500 hidden sm:flex items-center gap-1">
                <Type className="w-3 h-3" />
                Cỡ chữ:
              </span>
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  fontSize === "sm"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Cỡ chữ nhỏ (15px)"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("base")}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  fontSize === "base"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Cỡ chữ chuẩn y khoa (17-18px)"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  fontSize === "lg"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Cỡ chữ lớn (19-20px)"
              >
                A+
              </button>
            </div>

            {/* Share / Copy Link */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
              title="Sao chép liên kết"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Đã chép link!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Chia sẻ</span>
                </>
              )}
            </button>

            {/* Admin Edit Button */}
            {isAdmin && (
              <Link
                href={`/admin/bai-viet/${post.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs"
                title="Chỉnh sửa bài giảng (Admin)"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Sửa bài (Admin)</span>
              </Link>
            )}
          </div>
        </div>

        {/* 3-COLUMN DESKTOP LAYOUT (15% - 70% - 15%) */}
        <div className="flex flex-col lg:flex-row gap-6 items-start relative">
          {/* CỘT TRÁI (15% trên Desktop ≥ 1440px / Hiển thị từ Laptop ≥ 1024px): Mục lục bài giảng (Table of Contents) */}
          <aside
            className={`hidden lg:block shrink-0 transition-all duration-300 sticky top-24 z-20 ${
              isLeftCollapsed
                ? "w-[56px]"
                : "w-[260px] desktop:w-[15%] desktop:min-w-[230px] desktop:max-w-[280px]"
            }`}
          >
            <TableOfContents
              headings={headings}
              activeId={activeHeadingId}
              readingProgress={readingProgress}
              onHeadingClick={handleHeadingClick}
              isCollapsed={isLeftCollapsed}
              onToggleCollapse={() => setIsLeftCollapsed(!isLeftCollapsed)}
            />
          </aside>

          {/* CỘT GIỮA (70% trên Desktop / Mở rộng trên Laptop & Mobile): Main Reading Content */}
          <main className="flex-1 w-full min-w-0">
            <article className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-10 lg:p-12 shadow-sm space-y-8">
              {/* Category Badges & Reading Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                    {post.specialty}
                  </span>
                  {post.modality && (
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                      {post.modality}
                    </span>
                  )}
                  {post.categories
                    .filter((c) => c !== post.specialty)
                    .map((cat, idx) => (
                      <Link
                        key={idx}
                        href={`/?q=${encodeURIComponent(cat)}`}
                        className="text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md">
                    ⏱️ Thời lượng đọc: <strong>{post.readTime || "15 phút"}</strong>
                  </span>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
                  {post.title}
                </h1>

                {/* Article Meta Header */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 pt-2 pb-4 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-4 h-4 text-blue-600" />
                    Tác giả: <strong className="text-slate-900">{post.author}</strong>
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    Cập nhật: {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Eye className="w-4 h-4 text-slate-400" />
                    {post.views.toLocaleString()} lượt đọc
                  </span>
                </div>
              </div>

              {/* Cover Featured Image (Clickable for Lightbox) */}
              {post.coverImage && (
                <div
                  className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 cursor-zoom-in shadow-xs transition-all hover:shadow-md"
                  onClick={() =>
                    setLightboxState({
                      isOpen: true,
                      src: post.coverImage,
                      alt: post.title,
                      caption: `Hình ảnh minh họa chính: ${post.title}`,
                    })
                  }
                  title="Nhấp để phóng to toàn màn hình"
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full max-h-[500px] object-cover group-hover:scale-[1.01] transition-transform duration-200"
                  />
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Phóng to</span>
                  </div>
                  <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 italic text-center font-medium">
                    Hình ảnh minh họa bài giảng: {post.title}
                  </div>
                </div>
              )}

              {/* Lead Paragraph / Summary Box */}
              {post.excerpt && (
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-indigo-50/90 border-l-4 border-blue-600 text-slate-800 text-base sm:text-lg leading-relaxed font-normal shadow-xs">
                  <div className="font-bold text-xs uppercase text-blue-900 tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span>TÓM TẮT NỘI DUNG then chốt</span>
                  </div>
                  {post.excerpt}
                </div>
              )}

              {/* Article Main HTML Body */}
              <div
                ref={articleContentRef}
                className={`article-body text-slate-800 ${getFontSizeClass()}`}
              >
                {post.htmlContent ? (
                  <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
                ) : (
                  <div className="space-y-4">
                    {post.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* PDF Document Download Attachment */}
              {post.downloadUrl && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="text-base text-slate-900 block font-bold">
                        Tài liệu toàn văn bài giảng
                      </strong>
                      <span className="text-xs text-slate-500">
                        Tải chuyên khảo PDF chuẩn phân giải cao để lưu trữ và học tập
                      </span>
                    </div>
                  </div>
                  <a
                    href={post.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm shrink-0 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Tải tài liệu PDF</span>
                  </a>
                </div>
              )}

              {/* Chapter Next / Prev Navigation Cards */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    href={`/bai-viet/${prevPost.slug}`}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-blue-600 font-bold mb-1.5">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>BÀI TRƯỚC ĐÓ</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-blue-700 line-clamp-2">
                      {prevPost.title}
                    </h4>
                  </Link>
                ) : (
                  <div className="p-4 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs flex items-center justify-center">
                    Đây là bài giảng đầu tiên của chuyên đề này.
                  </div>
                )}

                {nextPost ? (
                  <Link
                    href={`/bai-viet/${nextPost.slug}`}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group flex flex-col justify-between text-right"
                  >
                    <div className="flex items-center justify-end gap-1.5 text-xs text-slate-400 group-hover:text-blue-600 font-bold mb-1.5">
                      <span>BÀI TIẾP THEO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 group-hover:text-blue-700 line-clamp-2">
                      {nextPost.title}
                    </h4>
                  </Link>
                ) : (
                  <div className="p-4 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs flex items-center justify-center text-right">
                    Bạn đã đọc đến bài giảng mới nhất của chuyên đề.
                  </div>
                )}
              </div>

              {/* Source Attribution & Back */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay về trang chủ thư viện CĐHA</span>
                </Link>

                <div className="text-xs text-slate-400">
                  Nguồn: <strong className="text-slate-600">{post.source || "ACR BI-RADS® / CĐHA Cập Nhật"}</strong>
                </div>
              </div>
            </article>
          </main>

          {/* CỘT PHẢI (15% trên Desktop ≥ 1440px): Chapter Navigation & Related Articles */}
          <aside
            className={`hidden desktop:block shrink-0 transition-all duration-300 sticky top-24 z-20 ${
              isRightCollapsed
                ? "w-[56px]"
                : "w-[15%] min-w-[230px] max-w-[280px]"
            }`}
          >
            <ChapterSidebar
              currentPostId={post.id}
              specialtyName={post.specialty}
              specialtySlug={post.specialtySlug}
              chapters={specialtyPosts}
              prevPost={prevPost}
              nextPost={nextPost}
              isCollapsed={isRightCollapsed}
              onToggleCollapse={() => setIsRightCollapsed(!isRightCollapsed)}
            />
          </aside>
        </div>
      </div>

      {/* FLOATING ACTION TOOLBAR FOR TABLET & MOBILE (< 1440px) */}
      <div className="desktop:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-2xl border border-slate-700 flex items-center gap-2.5">
        {/* Open Chapters Drawer */}
        <button
          onClick={() => setIsMobileChaptersOpen(true)}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white px-2 py-1 rounded-md hover:bg-slate-800 transition-colors"
        >
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span>Chương</span>
        </button>

        <div className="w-px h-4 bg-slate-700" />

        {/* Open TOC Drawer */}
        <button
          onClick={() => setIsMobileTocOpen(true)}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white px-2 py-1 rounded-md hover:bg-slate-800 transition-colors"
        >
          <ListTree className="w-4 h-4 text-sky-400" />
          <span>Mục lục ({Math.round(readingProgress)}%)</span>
        </button>

        <div className="w-px h-4 bg-slate-700" />

        {/* Quick Font Size Switch */}
        <button
          onClick={() => {
            setFontSize((prev) =>
              prev === "sm" ? "base" : prev === "base" ? "lg" : prev === "lg" ? "xl" : "sm"
            );
          }}
          className="flex items-center gap-1 text-xs font-bold text-slate-200 hover:text-white px-2 py-1 rounded-md hover:bg-slate-800 transition-colors"
          title="Chuyển cỡ chữ"
        >
          <Type className="w-3.5 h-3.5 text-amber-400" />
          <span className="uppercase text-[11px] font-bold">{fontSize}</span>
        </button>

        <div className="w-px h-4 bg-slate-700" />

        {/* Quick Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* MOBILE / TABLET CHAPTERS DRAWER */}
      {isMobileChaptersOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setIsMobileChaptersOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-4 flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Danh mục chương bài giảng
              </span>
              <button
                onClick={() => setIsMobileChaptersOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-3">
              <ChapterSidebar
                currentPostId={post.id}
                specialtyName={post.specialty}
                specialtySlug={post.specialtySlug}
                chapters={specialtyPosts}
                prevPost={prevPost}
                nextPost={nextPost}
              />
            </div>
          </div>
        </div>
      )}

      {/* MOBILE / TABLET TOC DRAWER */}
      {isMobileTocOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setIsMobileTocOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-4 flex flex-col z-10 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <ListTree className="w-4 h-4 text-blue-600" />
                Mục lục bài giảng
              </span>
              <button
                onClick={() => setIsMobileTocOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-3">
              <TableOfContents
                headings={headings}
                activeId={activeHeadingId}
                readingProgress={readingProgress}
                onHeadingClick={handleHeadingClick}
              />
            </div>
          </div>
        </div>
      )}

      {/* FULL-RESOLUTION MEDICAL IMAGE LIGHTBOX MODAL */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        alt={lightboxState.alt}
        caption={lightboxState.caption}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
      />
    </div>
  );
}
