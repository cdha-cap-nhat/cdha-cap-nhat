"use client";

import React from "react";
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
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
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
              Thư Viện Tài Liệu Số & Chẩn Đoán Hình Ảnh
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
              CĐHA<span className="text-indigo-400">-Cập-Nhật</span> Medical
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Thư viện số chuyên sâu cung cấp sách y học, giáo trình lâm sàng, chẩn đoán hình ảnh (X-quang, CT, MRI, Siêu âm) và các tài liệu chuyên ngành chất lượng cao dành cho bác sĩ và sinh viên y khoa.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/danh-muc"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-bold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 group shadow-lg"
              >
                <span>Khám phá kho danh mục</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/yeu-cau-sach"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm rounded-xl transition-all"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Gửi yêu cầu tài liệu</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Medical Visual */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-[420px] lg:max-w-[480px] aspect-square">
            <div className="absolute inset-4 border border-dashed border-indigo-500/20 rounded-full animate-[spin_35s_linear_infinite]" />
            <div className="absolute inset-14 border border-dashed border-purple-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-24 border border-indigo-400/10 rounded-full animate-pulse" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-bounce duration-1000">
              <BookOpen className="w-14 h-14 text-white drop-shadow-lg" />
            </div>

            {/* Floating Medical Icons */}
            <div className="absolute top-[8%] left-[45%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0s" }}>
              <Heart className="w-6 h-6 text-rose-400" />
            </div>
            <div className="absolute top-[20%] left-[10%] w-13 h-13 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.6s" }}>
              <Brain className="w-7 h-7 text-purple-400" />
            </div>
            <div className="absolute top-[18%] right-[10%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1.2s" }}>
              <Dna className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="absolute bottom-[22%] left-[6%] w-13 h-13 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1.8s" }}>
              <Microscope className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="absolute bottom-[28%] right-[8%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "2.4s" }}>
              <Pill className="w-6 h-6 text-amber-400" />
            </div>
            <div className="absolute bottom-[6%] left-[32%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "3s" }}>
              <Stethoscope className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="absolute bottom-[10%] right-[25%] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "3.6s" }}>
              <GraduationCap className="w-6 h-6 text-pink-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
