"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  Check,
  ChevronDown,
  BookOpen,
  Crown,
  FileText,
  Video,
  ArrowUpDown,
  Sparkles,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { BOOKS } from "@/data/books";
import { Book } from "@/types";
import BookCard from "@/components/BookCard";
import VietQrModal from "@/components/VietQrModal";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [selectedFormat, setSelectedFormat] = useState<"all" | "PDF" | "VIDEO">("all");
  const [vipFilter, setVipFilter] = useState<"all" | "free" | "vip">("all");
  const [sortBy, setSortBy] = useState<"popular" | "downloads" | "year">("popular");
  const [selectedBookForQr, setSelectedBookForQr] = useState<Book | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setSelectedCategory(cat);
    const q = searchParams.get("q");
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Filter logic
  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      // Category filter
      if (selectedCategory !== "all") {
        const catObj = CATEGORIES.find((c) => c.slug === selectedCategory || c.id === selectedCategory);
        if (catObj && book.categorySlug !== catObj.slug && book.category !== catObj.name) {
          // Check if category matches
          const matchSub = catObj.subcategories?.some((s) => s.name === book.subCategory);
          if (!matchSub) return false;
        }
      }

      // Subcategory filter
      if (selectedSubCategory && book.subCategory !== selectedSubCategory) {
        return false;
      }

      // Format filter
      if (selectedFormat !== "all" && book.format !== selectedFormat) {
        return false;
      }

      // VIP filter
      if (vipFilter === "free" && book.isVipOnly) return false;
      if (vipFilter === "vip" && !book.isVipOnly) return false;

      // Query search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = book.title.toLowerCase().includes(q);
        const matchAuthor = book.author.toLowerCase().includes(q);
        const matchCat = book.category.toLowerCase().includes(q);
        const matchSub = book.subCategory?.toLowerCase().includes(q);
        if (!matchTitle && !matchAuthor && !matchCat && !matchSub) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "downloads") return b.downloads - a.downloads;
      return b.publishYear - a.publishYear;
    });
  }, [selectedCategory, selectedSubCategory, selectedFormat, vipFilter, searchQuery, sortBy]);

  const activeCategoryObj = CATEGORIES.find(
    (c) => c.slug === selectedCategory || c.id === selectedCategory
  ) || CATEGORIES[0];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
            <span>Trang chủ</span>
            <span>/</span>
            <span className="text-indigo-600">Chuyên ngành CĐHA</span>
            {selectedCategory !== "all" && (
              <>
                <span>/</span>
                <span className="text-white">{activeCategoryObj.name}</span>
              </>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            {activeCategoryObj.name}
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              {filteredBooks.length} đầu sách
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {"Khám phá kho tài liệu, cẩm nang và ca lâm sàng chẩn đoán hình ảnh phân theo từng cơ quan chuyên biệt"}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search within catalog */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Lọc theo tiêu đề, tác giả trong danh mục..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Format filter */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs">
              <button
                onClick={() => setSelectedFormat("all")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedFormat === "all" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Tất cả định dạng
              </button>
              <button
                onClick={() => setSelectedFormat("PDF")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedFormat === "PDF" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Ebook PDF
              </button>
              <button
                onClick={() => setSelectedFormat("VIDEO")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedFormat === "VIDEO" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Video bài giảng
              </button>
            </div>

            {/* VIP Filter */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs">
              <button
                onClick={() => setVipFilter("all")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  vipFilter === "all" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setVipFilter("free")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  vipFilter === "free" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Miễn phí
              </button>
              <button
                onClick={() => setVipFilter("vip")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  vipFilter === "vip" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                VIP
              </button>
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="popular" className="bg-slate-900">Xem nhiều nhất</option>
              <option value="downloads" className="bg-slate-900">Tải nhiều nhất</option>
              <option value="year" className="bg-slate-900">Mới xuất bản</option>
            </select>
          </div>
        </div>

        {/* Main layout with Sticky Sidebar matching GMHS */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="font-bold text-xs uppercase mb-4 tracking-widest text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
                  <div className="w-1 h-4 bg-indigo-500 rounded-full" />
                  KHÁM PHÁ CÁC CHUYÊN NGÀNH CĐHA
                </h3>

                <div className="space-y-1.5">
                  {CATEGORIES.map((cat) => {
                    const isSelected =
                      selectedCategory === cat.slug || selectedCategory === cat.id;

                    return (
                      <div key={cat.id}>
                        <button
                          onClick={() => {
                            setSelectedCategory(cat.slug);
                            setSelectedSubCategory("");
                          }}
                          className={`w-full group flex items-center justify-between py-2.5 px-3 rounded-xl transition-all text-xs font-semibold ${
                            isSelected
                              ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <span className="truncate">{cat.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                        </button>

                        {/* Subcategories list if selected */}
                        {isSelected && cat.subcategories && (
                          <div className="pl-4 pr-1 py-1 space-y-1 mt-1 border-l-2 border-indigo-500/30 ml-2">
                            {cat.subcategories.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => setSelectedSubCategory(selectedSubCategory === sub.name ? "" : sub.name)}
                                className={`w-full text-left py-1.5 px-2.5 rounded-lg text-[11px] transition-colors truncate block ${
                                  selectedSubCategory === sub.name
                                    ? "text-white font-bold bg-white/10"
                                    : "text-slate-400 hover:text-white"
                                }`}
                              >
                                • {sub.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* VIP Upgrade Promo card in Sidebar */}
              <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/20 p-5 text-center space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                  <Crown className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Gói Hội Viên VIP CĐHA-Cập-Nhật</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tải không giới hạn hơn 15.000 đầu sách Y Dược tốc độ cao nhất.
                </p>
                <a
                  href="/nang-cap-vip"
                  className="block w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
                >
                  Đăng ký ngay (399k)
                </a>
              </div>
            </div>
          </aside>

          {/* Book Grid */}
          <main className="flex-1 min-w-0">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onQuickDownload={(b) => {
                      setSelectedBookForQr(b);
                      setIsQrModalOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Không tìm thấy tài liệu phù hợp
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
                  Không có kết quả nào với bộ lọc hiện tại. Bạn có thể gửi yêu cầu để chúng tôi bổ sung cuốn sách này.
                </p>
                <a
                  href="/yeu-cau-sach"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors"
                >
                  Gửi yêu cầu tài liệu ngay
                </a>
              </div>
            )}
          </main>
        </div>
      </div>

      <VietQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        book={selectedBookForQr}
      />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0f172a] pt-32 text-center text-slate-400">Đang tải kho tài liệu...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
