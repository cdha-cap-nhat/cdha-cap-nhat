"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ChevronLeft, ChevronRight, CheckCircle2, Bookmark, ArrowLeft, ArrowRight, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Post } from "@/types";

interface ChapterSidebarProps {
  currentPostId: string;
  specialtyName: string;
  specialtySlug: string;
  chapters: Post[];
  prevPost?: Post | null;
  nextPost?: Post | null;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function ChapterSidebar({
  currentPostId,
  specialtyName,
  specialtySlug,
  chapters,
  prevPost,
  nextPost,
  isCollapsed = false,
  onToggleCollapse,
}: ChapterSidebarProps) {
  if (isCollapsed) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs flex flex-col items-center gap-3">
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          title="Mở rộng danh sách chương"
        >
          <PanelLeftOpen className="w-5 h-5" />
        </button>
        <span className="text-[11px] font-bold text-slate-500 [writing-mode:vertical-lr] rotate-180 tracking-wider">
          CHƯƠNG BÀI GIẢNG
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col max-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/70 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide truncate">
            <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="truncate">Chương & Bài giảng</span>
          </div>

          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors shrink-0"
              title="Thu gọn danh sách chương"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <Link
            href={`/?cat=${specialtySlug}`}
            className="hover:text-blue-600 font-semibold truncate hover:underline"
          >
            Chuyên khoa: {specialtyName}
          </Link>
          <span className="shrink-0 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold text-[10px]">
            {chapters.length} bài
          </span>
        </div>
      </div>

      {/* Quick Prev / Next Buttons */}
      <div className="grid grid-cols-2 gap-1 p-2 border-b border-slate-100 bg-slate-50/40 text-[11px] shrink-0">
        {prevPost ? (
          <Link
            href={`/bai-viet/${prevPost.slug}`}
            className="flex items-center gap-1 p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-colors truncate"
            title={`Bài trước: ${prevPost.title}`}
          >
            <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Bài trước</span>
          </Link>
        ) : (
          <span className="flex items-center gap-1 p-1.5 rounded-lg text-slate-300 cursor-not-allowed font-medium truncate">
            <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Bài trước</span>
          </span>
        )}

        {nextPost ? (
          <Link
            href={`/bai-viet/${nextPost.slug}`}
            className="flex items-center justify-end gap-1 p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-colors truncate text-right"
            title={`Bài tiếp: ${nextPost.title}`}
          >
            <span className="truncate">Bài tiếp</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        ) : (
          <span className="flex items-center justify-end gap-1 p-1.5 rounded-lg text-slate-300 cursor-not-allowed font-medium truncate text-right">
            <span className="truncate">Bài tiếp</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </span>
        )}
      </div>

      {/* Chapters / Articles List */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2 text-xs">
        {chapters.map((item, index) => {
          const isCurrent = item.id === currentPostId;

          return (
            <Link
              key={item.id}
              href={`/bai-viet/${item.slug}`}
              className={`block p-2.5 rounded-xl transition-all border ${
                isCurrent
                  ? "bg-blue-50/90 border-blue-200 text-blue-900 shadow-xs"
                  : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700"
              }`}
            >
              <div className="flex items-center justify-between gap-1.5 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Bài #{index + 1}
                </span>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-100/70 px-1.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Đang đọc
                  </span>
                )}
              </div>

              <h4
                className={`font-semibold line-clamp-2 leading-snug mb-1.5 ${
                  isCurrent ? "text-blue-900 font-bold" : "text-slate-800"
                }`}
              >
                {item.title}
              </h4>

              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>{item.date}</span>
                <span className="font-medium">{item.readTime || "15 phút"}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Category Link */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50 text-center shrink-0">
        <Link
          href={`/?cat=${specialtySlug}`}
          className="text-xs font-bold text-blue-600 hover:text-blue-800 block hover:underline"
        >
          Xem toàn bộ bài khoa {specialtyName} →
        </Link>
      </div>
    </div>
  );
}
