import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CĐHA | CHẨN ĐOÁN HÌNH ẢNH – Học CĐHA qua các ca bệnh",
  description: "Cổng thông tin & Thư viện Chẩn đoán hình ảnh: Học CĐHA qua các ca bệnh lâm sàng, bài giảng X-quang, Siêu âm, CT, MRI và tài liệu y khoa chuyên sâu.",
  keywords: [
    "ebook y khoa",
    "sách y học",
    "chẩn đoán hình ảnh",
    "tải sách y khoa",
    "giáo trình y khoa",
    "tài liệu y tế",
    "y học lâm sàng",
    "usmle",
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
