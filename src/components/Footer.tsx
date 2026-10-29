import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Mail,
  Crown,
  Sparkles,
  Send,
  HeartHandshake,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 pt-20 border-t border-slate-800 text-slate-400">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white tracking-tight">
                  CĐHA-Cập-Nhật Medical
                </span>
                <span className="text-xs text-indigo-300 font-semibold tracking-wider uppercase">
                  Thư viện Ebook Y Khoa
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Thư viện tài liệu y khoa số hàng đầu. Cung cấp sách y học, giáo trình nội trú, cẩm nang chẩn đoán hình ảnh và bài giảng lâm sàng chất lượng cao phục vụ công tác học tập và nghiên cứu.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:contact@cdha-cap-nhat.vn"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/40 transition-all"
                title="Email liên hệ"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/cdha_cap_nhat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#229ED9] hover:bg-[#229ED9]/20 hover:border-[#229ED9]/40 transition-all"
                title="Kênh Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/cdha.cap.nhat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all"
                title="Fanpage Facebook"
              >
                <HeartHandshake className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* KHÁM PHÁ CÁC CHUYÊN NGÀNH CĐHA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-indigo-500 rounded-full" />
              KHÁM PHÁ CÁC CHUYÊN NGÀNH CĐHA
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/danh-muc?cat=than-kinh" className="hover:text-white transition-colors">Thần kinh</Link></li>
              <li><Link href="/danh-muc?cat=dau-mat-co" className="hover:text-white transition-colors">Đầu mặt cổ</Link></li>
              <li><Link href="/danh-muc?cat=nguc" className="hover:text-white transition-colors">Ngực</Link></li>
              <li><Link href="/danh-muc?cat=bung-chau" className="hover:text-white transition-colors">Bụng - chậu</Link></li>
              <li><Link href="/danh-muc?cat=co-xuong-khop" className="hover:text-white transition-colors">Cơ xương khớp</Link></li>
              <li><Link href="/danh-muc?cat=nhi-khoa" className="hover:text-white transition-colors">Nhi khoa</Link></li>
              <li><Link href="/danh-muc?cat=san-phu-khoa" className="hover:text-white transition-colors">Sản phụ khoa</Link></li>
            </ul>
          </div>

          {/* Hỗ trợ bạn đọc */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Hỗ trợ bạn đọc
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/nang-cap-vip" className="hover:text-amber-400 font-semibold flex items-center gap-1.5 transition-colors">
                  <Crown className="w-4 h-4 text-amber-400" />
                  Đăng ký Hội viên VIP
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-tai-sach" className="hover:text-white transition-colors">
                  Hướng dẫn tải tài liệu
                </Link>
              </li>
              <li>
                <Link href="/yeu-cau-sach" className="hover:text-white transition-colors">
                  Yêu cầu tìm tài liệu y khoa
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-pink-500 rounded-full" />
              Thông tin liên hệ
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-slate-300">Email hỗ trợ & Bản quyền</span>
                  <a href="mailto:contact@cdha-cap-nhat.vn" className="text-white hover:text-indigo-400 transition-colors font-medium text-xs sm:text-sm">
                    contact@cdha-cap-nhat.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#060a12] py-5 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © 2026 <strong className="text-white">CĐHA-Cập-Nhật</strong> - Thư Viện EBook Y Học không phải là trang TMĐT mua bán sách.
          </p>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Nền tảng tri thức y khoa phi thương mại</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
