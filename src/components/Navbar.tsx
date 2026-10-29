"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  BookOpen,
  Crown,
  FileQuestion,
  GraduationCap,
  ChevronRight,
  DownloadCloud,
} from "lucide-react";
import { BOOKS } from "@/data/books";
import { Book } from "@/types";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const filtered = BOOKS.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          (b.subCategory && b.subCategory.toLowerCase().includes(q))
      ).slice(0, 5);
      setSearchResults(filtered);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchDropdown(false);
      router.push(`/danh-muc?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/10 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  CĐHA<span className="text-indigo-600">-Cập-Nhật</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Medical
                </span>
              </div>
              <span className="hidden sm:block text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Thư viện y khoa & Chẩn đoán hình ảnh
              </span>
            </div>
          </Link>

          {/* Search bar Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 relative">
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full flex items-center bg-slate-100/80 hover:bg-slate-100 border border-slate-200 rounded-full p-1 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all"
            >
              <Search className="w-4 h-4 text-slate-400 mx-3 shrink-0" />
              <input
                type="text"
                placeholder="Tìm kiếm sách, tác giả, chuyên khoa (Harrison, Netter, ECG...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim().length > 1 && setShowSearchDropdown(true)}
                className="flex-1 py-1.5 bg-transparent text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full hover:scale-105 transition-transform shadow-md shadow-indigo-500/20 shrink-0"
              >
                Tìm kiếm
              </button>
            </form>

            {/* Live Search Dropdown */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[11px] font-bold uppercase text-slate-400 px-3 py-1.5 tracking-wider">
                  Gợi ý sách tìm thấy ({searchResults.length})
                </div>
                <div className="space-y-1">
                  {searchResults.map((b) => (
                    <Link
                      key={b.id}
                      href={`/sach/${b.slug}`}
                      onClick={() => setShowSearchDropdown(false)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="w-10 h-14 object-cover rounded-lg border border-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 truncate">
                          {b.title}
                        </h4>
                        <p className="text-xs text-slate-500 truncate">{b.author} • {b.publishYear}</p>
                        <span className="inline-block text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded mt-0.5 font-medium">
                          {b.category}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/danh-muc?q=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setShowSearchDropdown(false)}
                  className="block text-center text-xs font-semibold text-indigo-600 hover:text-indigo-700 py-2 border-t border-slate-100 mt-1"
                >
                  Xem tất cả kết quả cho \"{searchQuery}\" →
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links & Action */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Trang chủ
            </Link>
            <Link href="/danh-muc" className="hover:text-indigo-600 transition-colors">
              Danh mục
            </Link>
            <Link href="/danh-muc?cat=video-courses" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              Khóa học Video
            </Link>
            <Link href="/yeu-cau-sach" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
              <FileQuestion className="w-4 h-4 text-indigo-600" />
              Yêu cầu sách
            </Link>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/nang-cap-vip"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-extrabold rounded-xl shadow-md shadow-orange-500/20 hover:scale-105 transition-all"
            >
              <Crown className="w-4 h-4" />
              <span>Nâng cấp VIP</span>
            </Link>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar below Header */}
        <div className="md:hidden mt-3">
          <form
            onSubmit={handleSearchSubmit}
            className="relative w-full flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 focus-within:border-indigo-500"
          >
            <Search className="w-4 h-4 text-slate-400 ml-2 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Tìm sách y khoa, tác giả, chuyên khoa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 py-1.5 bg-transparent text-slate-900 text-xs placeholder-slate-400 focus:outline-none min-w-0"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg shrink-0"
            >
              Tìm
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100"
            >
              Trang chủ
            </Link>
            <Link
              href="/danh-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100"
            >
              Kho tài liệu & Danh mục sách
            </Link>
            <Link
              href="/danh-muc?cat=video-courses"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-purple-600" />
              Khóa học Video Y Khoa
            </Link>
            <Link
              href="/yeu-cau-sach"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100 flex items-center gap-2"
            >
              <FileQuestion className="w-4 h-4 text-indigo-600" />
              Yêu cầu tài liệu
            </Link>
            <Link
              href="/huong-dan-tai-sach"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 hover:text-indigo-600 py-2 border-b border-slate-100 flex items-center gap-2"
            >
              <DownloadCloud className="w-4 h-4 text-teal-600" />
              Hướng dẫn tải sách
            </Link>
            <Link
              href="/nang-cap-vip"
              onClick={() => setMobileMenuOpen(false)}
              className="text-amber-600 font-bold py-2 flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Đăng ký Hội viên VIP
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
