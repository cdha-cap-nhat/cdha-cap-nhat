"use client";

import React from "react";
import Link from "next/link";
import { Crown, ArrowRight, Star, Download, Eye, BookOpen } from "lucide-react";
import { BOOKS } from "@/data/books";
import BookCard from "./BookCard";
import { Book } from "@/types";

interface FeaturedBooksProps {
  onQuickDownload?: (book: Book) => void;
}

export default function FeaturedBooks({ onQuickDownload }: FeaturedBooksProps) {
  const featuredBook = BOOKS[0]; // Harrison
  const otherFeatured = BOOKS.slice(1, 7);

  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-[#0f172a] via-[#1a1f35] to-[#1e293b]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Title Header matching GMHS */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl text-white shadow-lg shadow-orange-500/25">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Sách Y Khoa Nổi Bật
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Những đầu sách gối đầu giường được cộng đồng y bác sĩ tin cậy nhất
              </p>
            </div>
          </div>

          <Link
            href="/danh-muc"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            <span>Xem tất cả sách</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Big Spotlight Card matching GMHS */}
        <div className="relative mb-12 rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 overflow-hidden hover:border-indigo-500/40 transition-all shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            <Link
              href={`/sach/${featuredBook.slug}`}
              className="w-48 sm:w-60 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 shadow-2xl border border-white/20 group"
            >
              <img
                src={featuredBook.coverImage}
                alt={featuredBook.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                <Crown className="w-3.5 h-3.5" /> Best Seller 2024
              </div>

              <Link href={`/sach/${featuredBook.slug}`}>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white hover:text-indigo-400 transition-colors mb-3 leading-snug">
                  {featuredBook.title}
                </h3>
              </Link>

              <p className="text-xs sm:text-sm font-medium text-slate-300 mb-2">
                Tác giả: <span className="text-indigo-300 font-semibold">{featuredBook.author}</span> • Năm XB: {featuredBook.publishYear}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                {featuredBook.description}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" /> {featuredBook.rating} / 5.0
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-slate-400" /> {featuredBook.views.toLocaleString()} lượt xem
                </span>
                <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                  <Download className="w-4 h-4" /> {featuredBook.downloads.toLocaleString()} lượt tải
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-200">
                  {featuredBook.pages} trang • {featuredBook.fileSize}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href={`/sach/${featuredBook.slug}`}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xs sm:text-sm rounded-xl hover:scale-105 transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Đọc thử chi tiết</span>
                </Link>
                <button
                  onClick={() => onQuickDownload ? onQuickDownload(featuredBook) : null}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>Tải tài liệu PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Grid Book Cards matching GMHS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {otherFeatured.map((book) => (
            <BookCard key={book.id} book={book} onQuickDownload={onQuickDownload} />
          ))}
        </div>
      </div>
    </section>
  );
}
