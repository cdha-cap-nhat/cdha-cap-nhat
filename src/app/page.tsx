"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Calendar,
  User,
  Eye,
  ChevronRight,
  Search,
  BookOpen,
  FolderOpen,
  Clock,
  ArrowRight,
  Sparkles,
  FileText,
  Video,
  FileQuestion,
} from "lucide-react";
import { POSTS } from "@/data/posts";
import { CATEGORIES } from "@/data/categories";

function HomePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCat = searchParams.get("cat") || "";
  const currentQuery = searchParams.get("q") || "";

  const [sidebarSearch, setSidebarSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search params
  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      // Filter by category
      if (currentCat) {
        const matchSpecialty = post.specialtySlug === currentCat;
        const matchCategory = post.categorySlugs.includes(currentCat);
        if (!matchSpecialty && !matchCategory) return false;
      }

      // Search query
      if (currentQuery.trim()) {
        const q = currentQuery.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(q);
        const matchExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchSpec = post.specialty.toLowerCase().includes(q);
        const matchCat = post.categories.some((c) => c.toLowerCase().includes(q));
        if (!matchTitle && !matchExcerpt && !matchSpec && !matchCat) return false;
      }

      return true;
    });
  }, [currentCat, currentQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const handleSidebarSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarSearch.trim()) {
      router.push(`/?q=${encodeURIComponent(sidebarSearch.trim())}`);
    }
  };

  const getActiveFilterTitle = () => {
    if (currentQuery) return `Kết quả tìm kiếm cho: "${currentQuery}"`;
    if (currentCat) {
      const catObj = CATEGORIES.find((c) => c.slug === currentCat);
      return `Chuyên ngành: ${catObj ? catObj.name : currentCat}`;
    }
    return "Khoá học & Video bài giảng mới nhất";
  };

  const recentPosts = POSTS.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Active Filter Title Banner if filtered */}
        {(currentCat || currentQuery) && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-blue-900 font-bold">
              <FolderOpen className="w-4 h-4 text-blue-600" />
              <span>{getActiveFilterTitle()}</span>
              <span className="text-xs font-normal text-blue-700">({filteredPosts.length} bài giảng)</span>
            </div>
            <Link
              href="/"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline shrink-0"
            >
              Xem tất cả bài giảng ✕
            </Link>
          </div>
        )}

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT COLUMN: Main Post Feed (70%) */}
          <main className="w-full lg:w-[68%] xl:w-[70%] space-y-8">
            {paginatedPosts.length > 0 ? (
              <div className="space-y-8">
                {paginatedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
                  >
                    {/* Post Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <Link href={`/bai-viet/${post.slug}`}>
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                        />
                      </Link>
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wide bg-blue-600 text-white shadow-sm">
                          {post.specialty}
                        </span>
                        {post.modality && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wide bg-slate-900/80 backdrop-blur-xs text-white">
                            {post.modality}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          <span className="font-semibold text-slate-700">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{post.views.toLocaleString()} lượt xem</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                        <Link href={`/bai-viet/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Action */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                        <Link
                          href={`/bai-viet/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider group"
                        >
                          <span>Xem chi tiết bài giảng</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-xs text-slate-400">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-4">
                    {currentPage > 1 && (
                      <button
                        onClick={() => {
                          setCurrentPage(currentPage - 1);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="px-3.5 h-9 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        ← Trang trước
                      </button>
                    )}
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentPage(i + 1);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    {currentPage < totalPages && (
                      <button
                        onClick={() => {
                          setCurrentPage(currentPage + 1);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="px-3.5 h-9 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        Tiếp theo →
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Chưa có video bài giảng nào được đăng tải
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Hệ thống đang chuẩn bị và cập nhật các video bài giảng, khóa học Chẩn đoán hình ảnh hàng đầu thế giới. Bạn có thể gửi yêu cầu bài giảng để chúng tôi ưu tiên cập nhật sớm nhất!
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <Link
                    href="/yeu-cau-sach"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    Gửi yêu cầu bài giảng
                  </Link>
                  <Link
                    href="/danh-muc"
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                  >
                    Khám phá thư viện Ebook
                  </Link>
                </div>
              </div>
            )}
          </main>

          {/* RIGHT COLUMN: Sidebar (30%) */}
          <aside className="w-full lg:w-[32%] xl:w-[30%] space-y-6 shrink-0">
            {/* Widget 1: Search */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                Tìm kiếm bài giảng
              </h3>
              <form onSubmit={handleSidebarSearch} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Tìm bài giảng, video, chuyên đề..."
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </form>
            </div>

            {/* Widget 2: Khám Phá Các Chuyên Ngành CĐHA (8 chuyên ngành) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                KHÁM PHÁ CÁC CHUYÊN NGÀNH CĐHA
              </h3>
              <div className="space-y-1">
                {CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
                  const count = POSTS.filter(
                    (p) => p.specialtySlug === cat.slug || p.categorySlugs.includes(cat.slug)
                  ).length;
                  const isCurrent = currentCat === cat.slug;

                  return (
                    <Link
                      key={cat.id}
                      href={`/?cat=${cat.slug}`}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        isCurrent
                          ? "bg-blue-600 text-white font-bold shadow-xs"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isCurrent ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: Bài Giảng Mới Nhất (hiện khi có bài) */}
            {recentPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                  Bài giảng mới nhất
                </h3>
                <div className="space-y-3.5">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/bai-viet/${post.slug}`}
                      className="group flex items-start gap-3 text-xs"
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-14 h-14 rounded-lg object-cover shrink-0 bg-slate-100 group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-snug mb-1 transition-colors">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 block">
                          {post.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Widget 4: Yêu cầu bài giảng & Ebook Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 shadow-md space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <FileQuestion className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-sm leading-snug">Yêu Cầu Khoá Học & Video Bài Giảng</h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                Bạn đang tìm kiếm khoá học hoặc bài giảng chuyên sâu nào? Hãy gửi yêu cầu để ban biên tập CĐHA cập nhật sớm nhất.
              </p>
              <Link
                href="/yeu-cau-sach"
                className="inline-block w-full py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs text-center hover:bg-blue-50 transition-colors shadow-xs"
              >
                Gửi yêu cầu bài giảng
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-20 text-center text-slate-400">Đang tải bài giảng...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
