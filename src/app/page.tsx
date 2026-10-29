"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import TrendingBooks from "@/components/TrendingBooks";
import BookRequestSection from "@/components/BookRequestSection";
import { Book } from "@/types";

export default function HomePage() {
  const handleQuickDownload = (book: Book) => {
    if (book.downloadUrl) {
      window.open(book.downloadUrl, "_blank");
    } else {
      window.location.href = `/sach/${book.slug}`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <StatsSection />
      <FeaturedBooks onQuickDownload={handleQuickDownload} />
      <TrendingBooks onQuickDownload={handleQuickDownload} />
      <BookRequestSection />
    </div>
  );
}
