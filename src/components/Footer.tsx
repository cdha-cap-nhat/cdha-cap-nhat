import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Mail,
  ShieldAlert,
  Crown,
  Sparkles,
  HelpCircle,
  FileText,
  Send,
  HeartHandshake,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#070b15] pt-20 border-t border-white/5 overflow-hidden text-slate-400">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0f172a] rounded-[14px] flex items-center justify-center">
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
              Thư viện tài liệu y khoa số hàng đầu Việt Nam. Cung cấp hàng nghìn đầu sách y học,
              giáo trình nội trú, cẩm nang lâm sàng Tiếng Việt và Tiếng Anh chất lượng cao phục vụ
              công tác học tập và nghiên cứu của y bác sĩ.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:contact@CĐHA-Cập-Nhật"
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
                href="https://facebook.com/CĐHA-Cập-Nhật"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all"
                title="Fanpage Facebook"
              >
                <HeartHandshake className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sách & Chuyên ngành */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-indigo-500 rounded-full" />
              Chuyên ngành tiêu biểu
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/danh-muc?cat=lam-sang" className="hover:text-white transition-colors">
                  Y học lâm sàng (Nội, Ngoại, Sản, Nhi)
                </Link>
              </li>
              <li>
                <Link href="/danh-muc?cat=gay-me" className="hover:text-white transition-colors">
                  Gây mê Hồi sức (GMHS) & ICU
                </Link>
              </li>
              <li>
                <Link href="/danh-muc?cat=co-so" className="hover:text-white transition-colors">
                  Giải phẫu & Y học cơ sở
                </Link>
              </li>
              <li>
                <Link href="/danh-muc?cat=can-lam-sang" className="hover:text-white transition-colors">
                  Chẩn đoán hình ảnh & Cận lâm sàng
                </Link>
              </li>
              <li>
                <Link href="/danh-muc?cat=english" className="hover:text-white transition-colors">
                  Sách Tiếng Anh & Luyện thi USMLE
                </Link>
              </li>
              <li>
                <Link href="/danh-muc?cat=video-courses" className="hover:text-white transition-colors">
                  Khóa học Video bài giảng thực hành
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ & Chính sách */}
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
              <li>
                <Link href="/chinh-sach-dmca" className="hover:text-white transition-colors">
                  Chính sách bản quyền DMCA
                </Link>
              </li>
              <li>
                <Link href="/dieu-khoan" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
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
                  <a href="mailto:contact@CĐHA-Cập-Nhật" className="text-white hover:text-indigo-400 transition-colors font-medium text-xs sm:text-sm">
                    contact@CĐHA-Cập-Nhật
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hệ thống hỗ trợ duyệt gói VIP và tìm kiếm tài liệu hoạt động 24/7. Mọi phản hồi đều được trả lời trong vòng 24 giờ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching GMHS.vn notice */}
      <div className="border-t border-white/5 bg-[#04060d] py-5 px-6">
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
