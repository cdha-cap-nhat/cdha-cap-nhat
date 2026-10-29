"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Flame,
  Calendar,
  CalendarDays,
  List as ListIcon,
  LayoutGrid,
  Download,
  Star,
  Eye,
  Crown,
  FileText,
  Video,
} from "lucide-react";
import { BOOKS } from "@/data/books";
import { Book, TrendingTab, ViewMode } from "@/types";
import BookCard from "./BookCard";

interface TrendingBooksProps {
  onQuickDownload?: (book: Book) => void;
}

export default function TrendingBooks({ onQuickDownload }: TrendingBooksProps) {
  const [activeTab, setActiveTab] = useState<TrendingTab>("hot");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  // Sorted books according to tab
  const sortedBooks = [...BOOKS].sort((a, b) => {
    if (activeTab === "hot") return b.views - a.views;
    if (activeTab === "week") return b.downloads - a.downloads;
    return b.rating - a.rating;
  });

  return (
    <section id="trending" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0c1222]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header matching GMHS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl text-white bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg shadow-rose-500/30 shrink-0 p-3">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Sách Xu Hướng
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Những đầu sách y khoa được tìm kiếm và tải nhiều nhất
              </p>
            </div>
          </div>

          {/* View mode toggle (List vs Grid) matching GMHS */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ListIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Danh sách</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Lưới</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs matching GMHS: Hot, Tuần, Tháng */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("hot")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap ${
              activeTab === "hot"
                ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white border-transparent shadow-lg shadow-rose-500/25"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            <Flame className="w-4 h-4 text-amber-300" />
            <span>Hot Nhất</span>
          </button>

          <button
            onClick={() => setActiveTab("week")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap ${
              activeTab === "week"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/25"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Theo Tuần</span>
          </button>

          <button
            onClick={() => setActiveTab("month")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap ${
              activeTab === "month"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/25"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span>Theo Tháng</span>
          </button>
        </div>

        {/* Books display matching selected view mode */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedBooks.slice(0, 8).map((book) => (
              <BookCard key={book.id} book={book} onQuickDownload={onQuickDownload} />
            ))}
          </div>
        ) : (
          <div className="space-y-3.5">
            {sortedBooks.slice(0, 7).map((book, idx) => {
              const rank = idx + 1;
              const rankColor =
                rank === 1
                  ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-amber-500/30"
                  : rank === 2
                  ? "bg-gradient-to-br from-slate-300 to-slate-500 text-white"
                  : rank === 3
                  ? "bg-gradient-to-br from-amber-600 to-amber-800 text-white"
                  : "bg-white/5 border border-white/10 text-slate-400";

              return (
                <div
                  key={book.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Ranking Number */}
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-lg ${rankColor}`}
                    >
                      {rank}
                    </div>

                    {/* Book Thumbnail */}
                    <Link
                      href={`/sach/${book.slug}`}
                      className="w-14 h-20 sm:w-16 sm:h-22 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:scale-105 transition-transform"
                    >
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {book.category}
                        </span>
                        {book.isVipOnly && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                            <Crown className="w-2.5 h-2.5" /> VIP
                          </span>
                        )}
                        <span className="text-xs text-slate-400 hidden sm:inline">
                          Năm {book.publishYear}
                        </span>
                      </div>

                      <Link href={`/sach/${book.slug}`}>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
                          {book.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        Tác giả: {book.author}
                      </p>
                    </div>
                  </div>

                  {/* Right Metrics & CTA */}
                  <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" /> {book.rating}
                      </span>
                      <span className="flex items-center gap-1 text-indigo-300 font-medium">
                        <Download className="w-3.5 h-3.5" /> {book.downloads.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/sach/${book.slug}`}
                        className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                      >
                        Đọc thử
                      </Link>
                      <button
                        onClick={() => onQuickDownload ? onQuickDownload(book) : null}
                        className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-1 shadow-md"
                      >
                        <Download className="w-3 h-3" />
                        Tải sách
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
