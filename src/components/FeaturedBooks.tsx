"use client";

import React from "react";
import Link from "next/link";
import { Crown, ArrowRight, BookOpen } from "lucide-react";
import { BOOKS } from "@/data/books";
import BookCard from "./BookCard";
import { Book } from "@/types";

interface FeaturedBooksProps {
  onQuickDownload?: (book: Book) => void;
}

export default function FeaturedBooks({ onQuickDownload }: FeaturedBooksProps) {
  if (BOOKS.length === 0) {
    return (
      <section id="featured" className="py-16 bg-gradient-to-b from-[#0f172a] via-[#1a1f35] to-[#1e293b]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Kho Sách Nổi Bật Đang Được Cập Nhật
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Các đầu sách y khoa và khóa học video chất lượng cao đang được ban biên tập CĐHA-Cập-Nhật tuyển chọn và số hóa.
            </p>
            <div className="pt-2">
              <Link
                href="/yeu-cau-sach"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors shadow-lg shadow-indigo-600/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>Yêu cầu sách bạn cần tìm</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const featuredBook = BOOKS[0];
  const otherFeatured = BOOKS.slice(1, 7);

  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-[#0f172a] via-[#1a1f35] to-[#1e293b]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {otherFeatured.map((book) => (
            <BookCard key={book.id} book={book} onQuickDownload={onQuickDownload} />
          ))}
        </div>
      </div>
    </section>
  );
}
