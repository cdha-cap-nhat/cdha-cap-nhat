"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import TrendingBooks from "@/components/TrendingBooks";
import BookRequestSection from "@/components/BookRequestSection";
import VietQrModal from "@/components/VietQrModal";
import { Book } from "@/types";

export default function HomePage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const handleQuickDownload = (book: Book) => {
    setSelectedBook(book);
    setIsQrModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <HeroSection />
      <StatsSection />
      <FeaturedBooks onQuickDownload={handleQuickDownload} />
      <TrendingBooks onQuickDownload={handleQuickDownload} />
      <BookRequestSection />

      <VietQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        book={selectedBook}
      />
    </div>
  );
}
