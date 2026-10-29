"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Download,
  Eye,
  Star,
  Crown,
  FileText,
  Video,
  Share2,
  Copy,
  Check,
  ShieldCheck,
  BookOpen,
  Calendar,
  Layers,
  FileSpreadsheet,
  ExternalLink,
  PlayCircle,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { BOOKS } from "@/data/books";
import BookCard from "@/components/BookCard";
import VietQrModal from "@/components/VietQrModal";
import { Lesson } from "@/types";

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const book = BOOKS.find((b) => b.slug === params.slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-[#0f172a] pt-40 pb-20 text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Không tìm thấy tài liệu</h2>
        <p className="text-sm text-slate-400 mb-6">Tài liệu y khoa bạn tìm kiếm không tồn tại hoặc đã được chuyển dời.</p>
        <Link href="/danh-muc" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm">
          Quay lại kho sách
        </Link>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<"description" | "preview" | "video">("description");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(
    book.lessons && book.lessons.length > 0 ? book.lessons[0] : null
  );
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedBooks = BOOKS.filter(
    (b) => b.id !== book.id && (b.categorySlug === book.categorySlug || b.category === book.category)
  ).slice(0, 4);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] pt-32 pb-24 text-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link href="/danh-muc" className="hover:text-white transition-colors">Kho tài liệu</Link>
          <span>/</span>
          <Link href={`/danh-muc?cat=${book.categorySlug}`} className="text-indigo-400 hover:underline">
            {book.category}
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{book.title}</span>
        </div>

        {/* Hero Book Info Card matching GMHS */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 relative z-10">
            {/* Left Cover 2:3 */}
            <div className="w-full sm:w-72 lg:w-80 shrink-0 mx-auto lg:mx-0">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-800">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                {book.isVipOnly ? (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                    <Crown className="w-3.5 h-3.5" /> Tài Liệu VIP
                  </span>
                ) : (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500 text-white shadow-lg">
                    Miễn phí
                  </span>
                )}
              </div>

              {/* Share & Copy Link button */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Đã sao chép link</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Chia sẻ tài liệu</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Information & Actions */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {book.category}
                </span>
                {book.subCategory && (
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
                    {book.subCategory}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 text-slate-400">
                  {book.language}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
                {book.title}
              </h1>

              <p className="text-sm text-slate-300 mb-6">
                Tác giả: <strong className="text-white">{book.author}</strong>
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Năm xuất bản</span>
                  <strong className="text-white font-bold text-sm flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-400" /> {book.publishYear}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Định dạng file</span>
                  <strong className="text-white font-bold text-sm flex items-center gap-1.5">
                    {book.format === "VIDEO" ? (
                      <Video className="w-4 h-4 text-pink-400" />
                    ) : (
                      <FileText className="w-4 h-4 text-indigo-400" />
                    )}
                    {book.format} ({book.fileSize})
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Số trang / Thời lượng</span>
                  <strong className="text-white font-bold text-sm flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-400" />
                    {book.pages ? `${book.pages} trang` : book.fileSize}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Lượt tải xuống</span>
                  <strong className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                    <Download className="w-4 h-4" /> {book.downloads.toLocaleString()}
                  </strong>
                </div>
              </div>

              {/* Action Buttons matching GMHS */}
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Download button */}
                  {book.isVipOnly ? (
                    <button
                      onClick={() => setIsQrModalOpen(true)}
                      className="flex-1 sm:flex-none px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-orange-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Crown className="w-4 h-4" />
                      <span>Tải nhanh (60k) / Nâng cấp VIP</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => alert("Bắt đầu tải sách miễn phí!")}
                      className="flex-1 sm:flex-none px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Tải sách miễn phí</span>
                    </button>
                  )}

                  {/* Read preview tab trigger */}
                  <button
                    onClick={() => setActiveTab("preview")}
                    className="flex-1 sm:flex-none px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    <span>Đọc thử trực tuyến</span>
                  </button>

                  {book.lessons && book.lessons.length > 0 && (
                    <button
                      onClick={() => setActiveTab("video")}
                      className="flex-1 sm:flex-none px-6 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-pink-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Xem video ({book.lessons.length} bài)</span>
                    </button>
                  )}
                </div>

                {/* Trust guarantee badge matching GMHS */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Link tải trực tiếp Google Drive tốc độ cao, file PDF nguyên bản chất lượng sắc nét.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-5 py-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "description"
                ? "border-indigo-500 text-indigo-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Mô tả & Mục lục</span>
          </button>

          <button
            onClick={() => setActiveTab("preview")}
            className={`px-5 py-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "preview"
                ? "border-indigo-500 text-indigo-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Đọc thử / Xem trước</span>
          </button>

          {book.lessons && book.lessons.length > 0 && (
            <button
              onClick={() => setActiveTab("video")}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "video"
                  ? "border-indigo-500 text-indigo-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Video className="w-4 h-4 text-pink-400" />
              <span>Khóa học Video ({book.lessons.length} bài)</span>
            </button>
          )}
        </div>

        {/* Tab 1: Description & Table of Contents */}
        {activeTab === "description" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Detailed description */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-indigo-500 rounded-full" />
                  Giới thiệu & Tổng quan tài liệu
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                  {book.description}
                </p>
              </div>

              {/* Table of contents */}
              {book.tableOfContents && (
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-purple-500 rounded-full" />
                    Mục lục tài liệu
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {book.tableOfContents.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Promo Box in Tab */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 to-[#1e293b] border border-indigo-500/30 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Gói Hội Viên VIP CĐHA-Cập-Nhật</h4>
                    <p className="text-xs text-slate-400">Đặc quyền không giới hạn</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Tải toàn bộ 15.000+ sách Y Dược
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Xem trọn bộ khóa học video chuyên sâu
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Yêu cầu sách ưu tiên trong 24h
                  </li>
                </ul>
                <Link
                  href="/nang-cap-vip"
                  className="block text-center py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Nâng cấp VIP ngay (399.000đ)
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Embedded PDF Previewer */}
        {activeTab === "preview" && (
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">Đọc Thử / Xem Trước Tài Liệu</h3>
                <p className="text-xs text-slate-400">Xem trước một phần trang sách trước khi tải trọn bộ</p>
              </div>
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Tải trọn bộ bản đẹp
              </button>
            </div>

            {/* Embedded PDF container */}
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <div className="space-y-4 max-w-md z-10">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Đọc thử: {book.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tài liệu mẫu đã sẵn sàng để xem trực tiếp. Nhấn nút bên dưới để mở toàn màn hình hoặc tải file PDF gốc về thiết bị của bạn.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => alert("Mở trình đọc PDF toàn màn hình!")}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mở trình đọc sách Fullscreen
                  </button>
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Tải về máy ({book.fileSize})
                  </button>
                </div>
              </div>

              {/* Notice note */}
              <div className="absolute bottom-3 left-4 right-4 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Nội dung nhúng an toàn từ Google Drive / PDF Viewer chuẩn mã hóa
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Video Course Player */}
        {activeTab === "video" && book.lessons && (
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-pink-400" />
                Khóa Học Video Bài Giảng Chuyên Sâu
              </h3>
              <p className="text-xs text-slate-400">Bài giảng trực quan thực hành trên ca bệnh lâm sàng</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Player Area */}
              <div className="lg:col-span-2 space-y-4">
                <div className="aspect-video w-full rounded-2xl bg-black border border-white/10 overflow-hidden relative shadow-2xl flex items-center justify-center">
                  <iframe
                    src={selectedLesson?.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                    title={selectedLesson?.title || "Video bài giảng"}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider block mb-1">
                    Đang phát • Bài {selectedLesson?.order}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {selectedLesson?.title}
                  </h4>
                  <span className="text-xs text-slate-400 mt-1 block flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Thời lượng: {selectedLesson?.duration}
                  </span>
                </div>
              </div>

              {/* Playlist Lessons Sidebar */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center justify-between pb-2 border-b border-white/10">
                  <span>Danh sách bài học</span>
                  <span className="text-xs text-slate-400 font-normal">{book.lessons.length} bài</span>
                </h4>

                <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                  {book.lessons.map((lesson) => {
                    const isPlaying = selectedLesson?.id === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 ${
                          isPlaying
                            ? "bg-indigo-600/20 border border-indigo-500/40 text-white"
                            : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] text-slate-300"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                            isPlaying
                              ? "bg-indigo-500 text-white"
                              : "bg-white/10 text-slate-400"
                          }`}
                        >
                          {isPlaying ? <PlayCircle className="w-4 h-4" /> : lesson.order}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold line-clamp-2 leading-snug">
                            {lesson.title}
                          </p>
                          <span className="text-[11px] text-slate-400 mt-1 block flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {lesson.duration}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Books Section */}
        {relatedBooks.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-indigo-500 rounded-full" />
              Sách Y Khoa Cùng Chuyên Mục
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedBooks.map((b) => (
                <BookCard
                  key={b.id}
                  book={b}
                  onQuickDownload={(item) => {
                    // trigger modal
                    setIsQrModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <VietQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        book={book}
      />
    </div>
  );
}
