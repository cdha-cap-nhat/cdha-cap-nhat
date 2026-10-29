"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  Eye,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  AlertCircle,
  FileText,
  Download,
  FolderOpen,
  ChevronRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { POSTS } from "@/data/posts";
import { CATEGORIES } from "@/data/categories";

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy bài viết</h2>
        <p className="text-sm text-slate-500 mb-6">Ca bệnh hoặc bài phân tích này không tồn tại hoặc đã được dời đi.</p>
        <Link href="/" className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs">
          Về trang chủ CĐHA
        </Link>
      </div>
    );
  }

  const relatedPosts = POSTS.filter(
    (p) => p.id !== post.id && (p.specialtySlug === post.specialtySlug || p.modality === post.modality)
  ).slice(0, 3);

  const recentPosts = POSTS.slice(0, 5);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Đã sao chép liên kết bài viết!");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
          <span>/</span>
          <Link href={`/?cat=${post.specialtySlug}`} className="hover:text-blue-600">
            {post.specialty}
          </Link>
          <span>/</span>
          <span className="text-slate-800 truncate max-w-sm">{post.title}</span>
        </nav>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Article Content (70%) */}
          <main className="w-full lg:w-[68%] xl:w-[70%]">
            <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2">
                {post.categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`/?q=${encodeURIComponent(cat)}`}
                    className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors uppercase tracking-wider"
                  >
                    {cat}
                  </Link>
                ))}
                <span className="text-xs text-slate-400 ml-auto font-medium">{post.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {post.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-4 h-4 text-slate-400" />
                    Tác giả: <strong className="text-slate-800">{post.author}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-slate-400" />
                    {post.views.toLocaleString()} lượt xem
                  </span>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Chia sẻ
                </button>
              </div>

              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 italic text-center">
                  Hình ảnh minh họa ca lâm sàng: {post.title}
                </div>
              </div>

              {/* Excerpt Lead Paragraph */}
              <div className="p-4 rounded-xl bg-blue-50/70 border-l-4 border-blue-600 text-slate-700 text-sm leading-relaxed font-medium">
                {post.excerpt}
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {post.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Clinical Case Section (if applicable) */}
              {post.clinicalCase && (
                <div className="mt-8 pt-6 border-t border-slate-200 space-y-5">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-5 bg-blue-600 rounded-full" />
                    Chi Tiết Ca Bệnh Lâm Sàng
                  </h3>

                  {/* History */}
                  {post.clinicalCase.history && (
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4.5 space-y-1.5">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        1. Bệnh cảnh & Tiền sử
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {post.clinicalCase.history}
                      </p>
                    </div>
                  )}

                  {/* Findings */}
                  {post.clinicalCase.findings && (
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4.5 space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        2. Dấu hiệu hình ảnh học
                      </h4>
                      <ul className="space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600">
                        {post.clinicalCase.findings.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Diagnosis */}
                  {post.clinicalCase.diagnosis && (
                    <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-4.5 space-y-1">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-800">
                        3. Chẩn đoán xác định
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-emerald-900">
                        {post.clinicalCase.diagnosis}
                      </p>
                    </div>
                  )}

                  {/* Takeaways */}
                  {post.clinicalCase.takeaways && (
                    <div className="rounded-xl bg-amber-50/60 border border-amber-200 p-4.5 space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        4. Bài học kinh nghiệm & Cạm bẫy chẩn đoán
                      </h4>
                      <ul className="space-y-1.5 pl-2 text-xs sm:text-sm text-slate-700">
                        {post.clinicalCase.takeaways.map((t, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold shrink-0">✓</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Download attachment if available */}
              {post.downloadUrl && (
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-blue-600 shrink-0" />
                    <div>
                      <strong className="text-sm text-slate-900 block">Tài liệu đính kèm ca bệnh</strong>
                      <span className="text-xs text-slate-500">Tải toàn văn bài giảng hoặc chuyên khảo PDF</span>
                    </div>
                  </div>
                  <a
                    href={post.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Tải tài liệu PDF
                  </a>
                </div>
              )}

              {/* Back to list */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại danh sách ca bệnh</span>
                </Link>

                <div className="text-xs text-slate-400">
                  Nguồn: <strong>{post.source || "CĐHA | cdha.edu.vn"}</strong>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-10 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
                  Ca Bệnh & Bài Viết Cùng Chuyên Khoa
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((r) => (
                    <Link
                      key={r.id}
                      href={`/bai-viet/${r.slug}`}
                      className="bg-white rounded-xl border border-slate-200 p-4 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-blue-600 uppercase">
                          {r.specialty}
                        </span>
                        <h4 className="font-bold text-xs text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-snug">
                          {r.title}
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-3 block">
                        {r.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Right Sidebar (30%) */}
          <aside className="w-full lg:w-[32%] xl:w-[30%] space-y-6 shrink-0">
            {/* Widget: 8 Chuyên Ngành CĐHA */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                KHÁM PHÁ CÁC CHUYÊN NGÀNH CĐHA
              </h3>
              <div className="space-y-1">
                {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/?cat=${cat.slug}`}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      post.specialtySlug === cat.slug
                        ? "bg-blue-600 text-white font-bold shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget: Recent Posts */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                Bài viết & Ca bệnh mới nhất
              </h3>
              <div className="space-y-3.5">
                {recentPosts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/bai-viet/${p.slug}`}
                    className="group flex items-start gap-3 text-xs"
                  >
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0 bg-slate-100 group-hover:scale-105 transition-transform"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-snug mb-1 transition-colors">
                        {p.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 block">
                        {p.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget: Ebook prompt */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 shadow-md space-y-3">
              <BookOpen className="w-8 h-8 text-white/90" />
              <h4 className="font-bold text-sm leading-snug">Kho Sách Y Khoa CĐHA</h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                Tải hơn 15.000 đầu sách Y Dược, Atlas Giải phẫu, Rumack, Netter chất lượng cao.
              </p>
              <Link
                href="/danh-muc"
                className="inline-block w-full py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs text-center hover:bg-blue-50 transition-colors shadow-xs"
              >
                Vào kho sách CĐHA
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
