import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CĐHA-Cập-Nhật - Thư Viện Ebook Y Khoa & Chẩn Đoán Hình Ảnh",
  description: "Thư viện ebook y khoa lớn nhất Việt Nam. Tải sách y học, giáo trình y khoa, tài liệu y tế tiếng Việt và tiếng Anh miễn phí & VIP. Dành cho sinh viên y khoa và chuyên gia y tế.",
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
