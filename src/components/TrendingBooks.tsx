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
  BookOpen,
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

  if (BOOKS.length === 0) {
    return (
      <section id="trending" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#0c1222]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 max-w-lg mx-auto space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Sách Xu Hướng Đang Được Cập Nhật
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Danh sách các tài liệu được quan tâm nhiều nhất sẽ hiển thị tại đây khi có tài liệu mới.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const sortedBooks = [...BOOKS].sort((a, b) => {
    if (activeTab === "hot") return b.views - a.views;
    if (activeTab === "week") return b.downloads - a.downloads;
    return b.rating - a.rating;
  });

  return (
    <section id="trending" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0c1222]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
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
        </div>
      </div>
    </section>
  );
}
