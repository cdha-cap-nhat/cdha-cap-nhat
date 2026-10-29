"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Brain,
  Dna,
  Microscope,
  Pill,
  Stethoscope,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Download,
} from "lucide-react";

const HERO_SLIDES = [
  {
    title: "Harrison\x27s Principles of Internal Medicine",
    subtitle: "Phiên bản thứ 21 - Cập nhật toàn diện nhất về Y học Nội khoa với hơn 4,000 trang kiến thức chuyên sâu và phác đồ điều trị mới nhất.",
    badge: "🔥 Tiêu chuẩn vàng Nội khoa Toàn cầu",
    slug: "harrisons-principles-of-internal-medicine-21",
    category: "Nội khoa lâm sàng",
    pages: "4,136 trang",
  },
  {
    title: "Atlas Giải Phẫu Người - Frank H. Netter",
    subtitle: "Bộ tranh giải phẫu y học chuẩn xác và sống động nhất thế giới với hệ thống danh từ song ngữ Việt - Anh phục vụ học tập và ngoại khoa.",
    badge: "📚 Bản Dịch Tiếng Việt Chuẩn",
    slug: "atlas-giai-phau-nguoi-frank-netter-tieng-viet",
    category: "Giải phẫu học",
    pages: "640 trang",
  },
  {
    title: "Khóa Học Video: Thực Hành Điện Tâm Đồ (ECG)",
    subtitle: "Trọn bộ 12 video bài giảng phân tích ca lâm sàng thực tế, nhồi máu cơ tim cấp, rối loạn nhịp nguy hiểm và bẫy lâm sàng.",
    badge: "✨ Video Bài Giảng Chuyên Sâu",
    slug: "khoa-hoc-video-thuc-hanh-phan-tich-dien-tam-do-nang-cao",
    category: "Video bài giảng",
    pages: "12 bài học • 8.5 giờ",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] pt-32 pb-20 overflow-hidden flex items-center bg-gradient-to-b from-[#0a0a1a] via-[#0f172a] to-[#0f172a]">
      {/* Dynamic ambient lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[90px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[90px] animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-pink-600/15 rounded-full blur-[80px] animate-pulse delay-700" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {slide.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
              {slide.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href={`/sach/${slide.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-bold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 group shadow-lg"
              >
                <span>Xem chi tiết & Tải ngay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/danh-muc"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm rounded-xl transition-all"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Khám phá 15.000+ sách</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Medical Visual matching GMHS.vn */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-[420px] lg:max-w-[480px] aspect-square">
            {/* Concentric rotating dashed rings */}
            <div className="absolute inset-4 border border-dashed border-indigo-500/20 rounded-full animate-[spin_35s_linear_infinite]" />
            <div className="absolute inset-14 border border-dashed border-purple-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-24 border border-indigo-400/10 rounded-full animate-pulse" />

            {/* Center Bouncing Book Emblem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-bounce duration-1000">
              <BookOpen className="w-14 h-14 text-white drop-shadow-lg" />
            </div>

            {/* Floating Medical Icons matching GMHS.vn */}
            {/* Heart */}
            <div
              className="absolute top-[8%] left-[45%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "0s" }}
            >
              <Heart className="w-6 h-6 text-rose-400" />
            </div>

            {/* Brain */}
            <div
              className="absolute top-[20%] left-[10%] w-13 h-13 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <Brain className="w-7 h-7 text-purple-400" />
            </div>

            {/* DNA */}
            <div
              className="absolute top-[18%] right-[10%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <Dna className="w-6 h-6 text-cyan-400" />
            </div>

            {/* Microscope */}
            <div
              className="absolute bottom-[22%] left-[6%] w-13 h-13 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "1.8s" }}
            >
              <Microscope className="w-7 h-7 text-emerald-400" />
            </div>

            {/* Pill */}
            <div
              className="absolute bottom-[28%] right-[8%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "2.4s" }}
            >
              <Pill className="w-6 h-6 text-amber-400" />
            </div>

            {/* Stethoscope */}
            <div
              className="absolute bottom-[6%] left-[32%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "3s" }}
            >
              <Stethoscope className="w-6 h-6 text-indigo-400" />
            </div>

            {/* Graduation Cap */}
            <div
              className="absolute bottom-[10%] right-[25%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "3.6s" }}
            >
              <GraduationCap className="w-6 h-6 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Carousel controls matching GMHS */}
        <div className="flex items-center justify-between sm:justify-center gap-6 mt-12 pt-6 border-t border-white/5">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
