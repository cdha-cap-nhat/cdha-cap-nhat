"use client";

import React, { useState } from "react";
import { ListTree, ChevronDown, ChevronRight, ArrowUp, PanelRightClose, PanelRightOpen } from "lucide-react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3, 4 for h4
}

interface TableOfContentsProps {
  headings: HeadingItem[];
  activeId: string;
  readingProgress: number;
  onHeadingClick: (id: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function TableOfContents({
  headings,
  activeId,
  readingProgress,
  onHeadingClick,
  isCollapsed = false,
  onToggleCollapse,
}: TableOfContentsProps) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isCollapsed) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs flex flex-col items-center gap-3">
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          title="Mở rộng mục lục"
        >
          <PanelRightOpen className="w-5 h-5" />
        </button>
        <span className="text-[11px] font-bold text-slate-500 [writing-mode:vertical-lr] rotate-180 tracking-wider">
          MỤC LỤC ({Math.round(readingProgress)}%)
        </span>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors mt-2"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col max-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/70 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
            <ListTree className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Mục lục bài giảng</span>
          </div>

          <div className="flex items-center gap-1">
            {onToggleCollapse && (
              <button
                onClick={onToggleCollapse}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                title="Thu gọn mục lục"
              >
                <PanelRightClose className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Reading Progress Indicator */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
            <span>Tiến độ đọc</span>
            <span className="text-blue-600 font-bold">{Math.round(readingProgress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-150"
              style={{ width: `${Math.min(Math.max(readingProgress, 0), 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Headings List - Scrollable */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 text-xs">
        {headings.length === 0 ? (
          <p className="text-slate-400 italic text-center py-6 text-[11px]">
            Đang phân tích cấu trúc bài viết...
          </p>
        ) : (
          headings.map((heading) => {
            const isActive = activeId === heading.id;
            const isH2 = heading.level === 2;
            const isH3 = heading.level === 3;
            const isH4 = heading.level >= 4;

            return (
              <button
                key={heading.id}
                onClick={() => onHeadingClick(heading.id)}
                className={`w-full text-left transition-all rounded-lg py-1.5 px-2.5 block leading-snug ${
                  isH2
                    ? "font-bold text-slate-800"
                    : isH3
                    ? "pl-4 text-slate-600 font-medium"
                    : "pl-6 text-[11px] text-slate-500"
                } ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600 shadow-xs"
                    : "hover:bg-slate-50 hover:text-blue-600"
                }`}
                title={heading.text}
              >
                <span className="line-clamp-2">{heading.text}</span>
              </button>
            );
          })
        )}
      </div>

      {/* Footer Tools */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500 shrink-0">
        <span className="text-[11px] text-slate-400">
          {headings.length} đề mục
        </span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 px-2.5 py-1 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-200/50 font-medium text-[11px] transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Đầu trang</span>
        </button>
      </div>
    </div>
  );
}
