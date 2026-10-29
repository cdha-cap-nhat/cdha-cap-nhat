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
  Activity,
  Layers,
  CheckCircle2,
  Share2,
  MonitorPlay,
} from "lucide-react";
import { POSTS } from "@/data/posts";
import { CATEGORIES } from "@/data/categories";
import { Post } from "@/types";

function HomePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCat = searchParams.get("cat") || "";
  const currentModality = searchParams.get("modality") || "";
  const currentSub = searchParams.get("sub") || "";
  const currentQuery = searchParams.get("q") || "";
  const currentSource = searchParams.get("source") || "";

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

      // Filter by modality
      if (currentModality) {
        const modUpper = currentModality.toUpperCase();
        if (currentModality.toLowerCase() === "sieu-am" && post.modality !== "Siêu âm") return false;
        if (currentModality.toLowerCase() === "ct" && post.modality !== "CT") return false;
        if (currentModality.toLowerCase() === "mri" && post.modality !== "MRI") return false;
        if (currentModality.toLowerCase() === "xq" && post.modality !== "XQ") return false;
      }

      // Filter by subcategory (e.g. phan-mem-cxk, phu-khoa, tim...)
      if (currentSub) {
        if (!post.categorySlugs.includes(currentSub)) return false;
      }

      // Filter by source (e.g. rumack, radiopaedia...)
      if (currentSource) {
        if (!post.categorySlugs.includes(currentSource) && !post.slug.includes(currentSource)) return false;
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
  }, [currentCat, currentModality, currentSub, currentQuery, currentSource]);

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
    if (currentModality) {
      const modMap: Record<string, string> = {
        "sieu-am": "Siêu âm",
        ct: "Cắt lớp vi tính (CT)",
        mri: "Cộng hưởng từ (MRI)",
        xq: "X-quang (XQ)",
      };
      return `Phương pháp: ${modMap[currentModality.toLowerCase()] || currentModality}`;
    }
    if (currentSub) return `Phân loại: ${currentSub}`;
    if (currentSource) return `Tủ sách tham khảo: ${currentSource}`;
    return "Bài viết & Ca bệnh lâm sàng mới nhất";
  };

  // Recent posts for sidebar
  const recentPosts = POSTS.slice(0, 5);

  const archiveMonths = [
    { label: "Tháng 7 2026", count: 2 },
    { label: "Tháng 5 2026", count: 3 },
    { label: "Tháng 4 2026", count: 4 },
    { label: "Tháng 2 2026", count: 3 },
    { label: "Tháng 1 2026", count: 5 },
    { label: "Tháng 12 2025", count: 6 },
    { label: "Tháng 11 2025", count: 4 },
    { label: "Tháng 9 2025", count: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Active Filter Title Banner if filtered */}
        {(currentCat || currentModality || currentSub || currentQuery || currentSource) && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-blue-900 font-bold">
              <FolderOpen className="w-4 h-4 text-blue-600" />
              <span>{getActiveFilterTitle()}</span>
              <span className="text-xs font-normal text-blue-700">({filteredPosts.length} bài viết)</span>
            </div>
            <Link
              href="/"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline shrink-0"
            >
              Xem tất cả bài viết ✕
            </Link>
          </div>
        )}

        {/* 2-Column Layout matching cdha.edu.vn */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT COLUMN: Main Post Feed (70%) */}
          <main className="w-full lg:w-[68%] xl:w-[70%] space-y-8">
            {paginatedPosts.length > 0 ? (
              <div className="space-y-8">
                {paginatedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
                  >
                    {/* Category Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {post.categories.map((cat, idx) => (
                        <Link
                          key={idx}
                          href={`/?q=${encodeURIComponent(cat)}`}
                          className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors uppercase tracking-wider"
                        >
                          {cat}
                        </Link>
                      ))}
                      <span className="text-[11px] font-semibold text-slate-400 ml-auto hidden sm:inline-block">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Post Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug mb-3">
                      <Link href={`/bai-viet/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Post Metadata: Date, Author, Views */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        {post.views.toLocaleString()} lượt đọc
                      </span>
                      {post.clinicalCase && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Ca lâm sàng
                        </span>
                      )}
                    </div>

                    {/* Featured Image preview */}
                    <Link
                      href={`/bai-viet/${post.slug}`}
                      className="block relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-xl overflow-hidden mb-4 bg-slate-100 group"
                    >
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                    </Link>

                    {/* Post Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-2">
                      <Link
                        href={`/bai-viet/${post.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                      >
                        <span>Đọc tiếp</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span>Chuyên khoa:</span>
                        <Link
                          href={`/?cat=${post.specialtySlug}`}
                          className="text-slate-800 hover:text-blue-600 font-bold"
                        >
                          {post.specialty}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-6 pb-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {pageNum}
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
                <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Không tìm thấy bài viết hoặc ca bệnh phù hợp</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Không có ca lâm sàng nào khớp với tiêu chí tìm kiếm hiện tại. Bạn hãy thử chọn lại chuyên mục hoặc gửi yêu cầu để chúng tôi bổ sung bài giảng.
                </p>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                  >
                    Xem tất cả bài viết
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
                Tìm kiếm bài viết
              </h3>
              <form onSubmit={handleSidebarSearch} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Tìm kiếm ca bệnh, từ khóa..."
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </form>
            </div>

            {/* Widget PACS: HỆ THỐNG PACS DICOM */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 p-5 shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-indigo-800/60">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-indigo-200 flex items-center gap-2">
                    <MonitorPlay className="w-4 h-4 text-cyan-400" />
                    HỆ THỐNG PACS CĐHA
                  </h3>
                  <span className="text-[9px] bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 px-2 py-0.5 rounded-full font-bold">
                    Trực tuyến
                  </span>
                </div>
                <p className="text-xs text-indigo-100 font-semibold italic mb-2">
                  &ldquo;Rảnh vào đọc phim cho vui...&rdquo;
                </p>
                <p className="text-[11px] text-slate-300 mb-3.5 leading-relaxed">
                  Lưu trữ & đọc phim DICOM trực tuyến (CT, MRI, X-quang, Siêu âm) với đầy đủ công cụ đo đạc, chỉnh cửa sổ W/L và đối chiếu chẩn đoán.
                </p>
                <Link
                  href="/pacs"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all group"
                >
                  <span>Mở hệ thống đọc phim PACS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
                          isCurrent ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {count > 0 ? count : 1}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: Phương Pháp CĐHA */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                Phương pháp Chẩn đoán hình ảnh
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <Link
                  href="/?modality=sieu-am"
                  className="p-2.5 rounded-lg bg-blue-50/70 hover:bg-blue-100/80 text-blue-800 border border-blue-100 flex items-center justify-between transition-colors"
                >
                  <span>Siêu âm</span>
                  <span className="text-[10px] bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded font-bold">8</span>
                </Link>
                <Link
                  href="/?modality=ct"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-between transition-colors"
                >
                  <span>CT Scanner</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">2</span>
                </Link>
                <Link
                  href="/?modality=mri"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-between transition-colors"
                >
                  <span>Cộng hưởng từ (MRI)</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">3</span>
                </Link>
                <Link
                  href="/?modality=xq"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-between transition-colors"
                >
                  <span>X-quang</span>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">2</span>
                </Link>
              </div>
            </div>

            {/* Widget 4: Bài Viết & Ca Bệnh Mới Nhất */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                Ca bệnh & Bài viết mới nhất
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

            {/* Widget 5: Tủ Sách Tham Khảo & Đọc Sách Cho Vui */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                Tủ sách tham khảo & Casebook
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li>
                  <Link href="/?source=tntc-ca-lam-sang" className="hover:text-blue-600 flex items-center gap-1.5 py-1">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    TNTC – Ectopic Pregnancy Casebook
                  </Link>
                </li>
                <li>
                  <Link href="/?source=radiopaedia" className="hover:text-blue-600 flex items-center gap-1.5 py-1">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Radiopaedia Cases & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/?source=rumack" className="hover:text-blue-600 flex items-center gap-1.5 py-1">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Rumack Diagnostic Ultrasound 5th
                  </Link>
                </li>
                <li>
                  <Link href="/?source=the-fetus-net" className="hover:text-blue-600 flex items-center gap-1.5 py-1">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    The Fetus.net – Ca siêu âm tiền sản
                  </Link>
                </li>
              </ul>
            </div>

            {/* Widget 6: Lưu Trữ Theo Thời Gian (Archives) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                Lưu trữ theo tháng
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-600">
                {archiveMonths.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => router.push(`/?archive=${encodeURIComponent(m.label)}`)}
                    className="text-left py-1 hover:text-blue-600 truncate flex items-center justify-between"
                  >
                    <span>{m.label}</span>
                    <span className="text-[10px] text-slate-400">({m.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Widget 7: Ebook Banner Prompt */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 shadow-md space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-sm leading-snug">Kho Sách & Giáo Trình CĐHA Toàn Diện</h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                Hơn 15.000 đầu sách Y Dược, Atlas Giải phẫu Netter, Rumack, Harrison chất lượng cao tải trực tiếp.
              </p>
              <Link
                href="/danh-muc"
                className="inline-block w-full py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs text-center hover:bg-blue-50 transition-colors shadow-xs"
              >
                Khám phá kho sách ngay
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
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-20 text-center text-slate-400">Đang tải bài viết...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
