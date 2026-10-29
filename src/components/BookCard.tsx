import React from "react";
import Link from "next/link";
import { Book } from "@/types";
import { Download, Eye, Star, Crown, FileText, Video } from "lucide-react";

interface BookCardProps {
  book: Book;
  onQuickDownload?: (book: Book) => void;
  onPreview?: (book: Book) => void;
}

export default function BookCard({ book, onQuickDownload, onPreview }: BookCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/20">
      {/* Cover Image Container */}
      <Link href={`/sach/${book.slug}`} className="relative aspect-[2/3] w-full overflow-hidden bg-slate-800">
        <img
          src={book.coverImage}
          alt={book.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Badges Top Left & Top Right */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {book.isVipOnly ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
              <Crown className="w-3 h-3" /> VIP
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500/90 text-white backdrop-blur-md shadow-md">
              Miễn phí
            </span>
          )}

          {book.format === "VIDEO" ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-pink-500 text-white shadow-md">
              <Video className="w-3 h-3" /> Video
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-white/20 backdrop-blur-md text-white">
              <FileText className="w-3 h-3" /> PDF
            </span>
          )}
        </div>

        {/* Category tag bottom of image */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 z-10 font-medium">
          <span className="truncate bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md text-indigo-300">
            {book.category}
          </span>
          <span className="bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-md text-slate-300">
            {book.publishYear}
          </span>
        </div>
      </Link>

      {/* Book Info */}
      <div className="flex flex-col flex-1 p-4">
        <Link href={`/sach/${book.slug}`}>
          <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug mb-1.5 min-h-[2.5rem]">
            {book.title}
          </h3>
        </Link>

        <p className="text-xs text-slate-400 truncate mb-3">
          {book.author}
        </p>

        {/* Metrics Row */}
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{book.rating}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {book.views > 1000 ? `${(book.views / 1000).toFixed(1)}k` : book.views}
            </span>
            <span className="flex items-center gap-1 text-indigo-300">
              <Download className="w-3 h-3" />
              {book.downloads > 1000 ? `${(book.downloads / 1000).toFixed(1)}k` : book.downloads}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            href={`/sach/${book.slug}`}
            className="text-center py-2 px-2 text-xs font-semibold rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            Đọc thử
          </Link>
          <button
            onClick={() => onQuickDownload ? onQuickDownload(book) : null}
            className="py-2 px-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center gap-1 shadow-md shadow-indigo-600/20"
          >
            <Download className="w-3 h-3" />
            Tải sách
          </button>
        </div>
      </div>
    </div>
  );
}
