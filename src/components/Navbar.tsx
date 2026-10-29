"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  FileQuestion,
  Video,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { POSTS } from "@/data/posts";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Search filter
  const searchResults = searchQuery.trim().length > 1
    ? POSTS.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.modality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categories.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchDropdown(false);
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      {/* Top Header Branding Banner */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Logo Title */}
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="CĐHA CẬP NHẬT Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-full shadow-xs shrink-0 group-hover:scale-105 transition-transform bg-white border border-slate-200/80"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                  CĐHA | CẬP NHẬT
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium italic">
                CĐHA Cập nhật qua các khoá học video bài giảng hàng đầu trên thế giới
              </p>
            </div>
          </Link>

          {/* Quick Header Search Bar */}
          <div className="relative w-full sm:w-80">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                placeholder="Tìm bài giảng, video, chuyên ngành..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full pl-9 pr-20 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold rounded-md transition-colors"
              >
                Tìm
              </button>
            </form>

            {/* Live Search Popup */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 text-xs">
                <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">
                  Bài giảng phù hợp:
                </div>
                {searchResults.map((post) => (
                  <Link
                    key={post.id}
                    href={`/bai-viet/${post.slug}`}
                    onClick={() => setShowSearchDropdown(false)}
                    className="block p-2 rounded-lg hover:bg-slate-50 text-slate-800 transition-colors truncate"
                  >
                    <span className="font-bold text-blue-600 block truncate">{post.title}</span>
                    <span className="text-[10px] text-slate-500">{post.specialty} • {post.date}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Link
              href="/"
              className="px-3.5 py-2.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Trang chủ
            </Link>

            {/* Dropdown Chuyên ngành CĐHA (8 chuyên ngành) */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("chuyen-nganh")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 px-3.5 py-2.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors text-blue-700 bg-blue-50/60"
              >
                <span>Chuyên ngành CĐHA</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "chuyen-nganh" && (
                <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in duration-150 normal-case">
                  {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/?cat=${cat.slug}`}
                      className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/yeu-cau-sach"
              className="px-3.5 py-2.5 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center gap-1.5"
            >
              <FileQuestion className="w-3.5 h-3.5 text-blue-600" />
              <span>Yêu cầu tài liệu & bài giảng</span>
            </Link>
          </nav>

          {/* Right link: All categories library */}
          <div className="hidden lg:flex items-center gap-3 py-2">
            <Link
              href="/danh-muc"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-bold transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kho Ebook Y Khoa</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full py-2.5">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Menu danh mục CĐHA
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-3 space-y-1.5 text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              Trang chủ
            </Link>

            <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              8 Chuyên ngành CĐHA
            </div>
            <div className="grid grid-cols-2 gap-1 pl-3">
              {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                <Link
                  key={cat.id}
                  href={`/?cat=${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-slate-600 hover:text-blue-600"
                >
                  • {cat.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 px-3 space-y-1.5">
              <Link
                href="/danh-muc"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-blue-600 font-bold"
              >
                📚 Kho Ebook Y Khoa
              </Link>
              <Link
                href="/yeu-cau-sach"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-700 font-bold"
              >
                ✍️ Gửi yêu cầu tài liệu & bài giảng
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
