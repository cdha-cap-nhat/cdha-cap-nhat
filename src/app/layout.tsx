import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CĐHA | CẬP NHẬT – CĐHA Cập nhật qua các khoá học video bài giảng hàng đầu trên thế giới",
  description: "CĐHA Cập nhật qua các khoá học video bài giảng hàng đầu trên thế giới: Bài giảng X-quang, Siêu âm, CT, MRI, Can thiệp và tài liệu y khoa chuyên sâu.",
  keywords: [
    "khóa học cđha",
    "video bài giảng chẩn đoán hình ảnh",
    "chẩn đoán hình ảnh",
    "ebook y khoa",
    "sách y học",
    "siêu âm",
    "ct scanner",
    "mri",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="light">
      <body className="bg-white text-slate-800 min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
