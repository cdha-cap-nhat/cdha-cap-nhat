import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Mail,
  Send,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  MonitorPlay,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                CĐHA
              </div>
              <div>
                <span className="block text-base font-extrabold text-white tracking-tight uppercase">
                  CĐHA | CHẨN ĐOÁN HÌNH ẢNH
                </span>
                <span className="text-xs text-blue-400 font-medium italic">
                  Học CĐHA qua các ca bệnh
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400">
              Chuyên trang học tập, thảo luận ca bệnh lâm sàng và chia sẻ tài liệu Chẩn đoán hình ảnh (X-quang, Siêu âm, CT Scanner, Cộng hưởng từ MRI). Mục tiêu lan tỏa kiến thức chuẩn mực cho cộng đồng bác sĩ và sinh viên Y khoa.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="mailto:contact@cdha-cap-nhat.vn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                title="Email liên hệ"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/cdha_cap_nhat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#229ED9] hover:bg-[#229ED9]/20 transition-colors"
                title="Kênh Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/cdha.cap.nhat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors"
                title="Fanpage Facebook"
              >
                <HeartHandshake className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 8 Chuyên Ngành CĐHA */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3.5 bg-blue-500 rounded-full" />
              8 CHUYÊN NGÀNH CĐHA
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              <Link href="/?cat=than-kinh" className="hover:text-white transition-colors">• Thần kinh</Link>
              <Link href="/?cat=dau-mat-co" className="hover:text-white transition-colors">• Đầu mặt cổ</Link>
              <Link href="/?cat=nguc" className="hover:text-white transition-colors">• Ngực</Link>
              <Link href="/?cat=bung-chau" className="hover:text-white transition-colors">• Bụng - chậu</Link>
              <Link href="/?cat=co-xuong-khop" className="hover:text-white transition-colors">• Cơ xương khớp</Link>
              <Link href="/?cat=nhi-khoa" className="hover:text-white transition-colors">• Nhi khoa</Link>
              <Link href="/?cat=san-phu-khoa" className="hover:text-white transition-colors">• Sản phụ khoa</Link>
              <Link href="/?cat=vu" className="hover:text-white transition-colors">• Vú</Link>
            </div>
          </div>

          {/* Phương pháp CĐHA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3.5 bg-indigo-500 rounded-full" />
              Phương pháp CĐHA
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/?modality=sieu-am" className="hover:text-white transition-colors">Siêu âm (Ultrasound)</Link></li>
              <li><Link href="/?modality=ct" className="hover:text-white transition-colors">Cắt lớp vi tính (CT)</Link></li>
              <li><Link href="/?modality=mri" className="hover:text-white transition-colors">Cộng hưởng từ (MRI)</Link></li>
              <li><Link href="/?modality=xq" className="hover:text-white transition-colors">X-quang (X-Ray)</Link></li>
              <li><Link href="/?cat=can-thiep" className="hover:text-white transition-colors">Điện quang can thiệp</Link></li>
              <li className="pt-1">
                <Link href="/pacs" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors flex items-center gap-1.5">
                  <MonitorPlay className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Hệ thống PACS (Đọc phim)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ & Tài nguyên */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3.5 bg-emerald-500 rounded-full" />
              Tài nguyên & Hỗ trợ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/danh-muc" className="hover:text-white transition-colors font-medium">
                  📚 Thư viện Ebook Y Khoa
                </Link>
              </li>
              <li>
                <Link href="/yeu-cau-sach" className="hover:text-white transition-colors">
                  ✍️ Yêu cầu bài giảng & tài liệu
                </Link>
              </li>
              <li>
                <Link href="/huong-dan-tai-sach" className="hover:text-white transition-colors">
                  📖 Hướng dẫn đọc sách & cài đặt App
                </Link>
              </li>
              <li>
                <Link href="/nang-cap-vip" className="hover:text-amber-400 transition-colors font-semibold">
                  ⭐ Chương trình Hội viên VIP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#080d1a] py-4 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © 2026 <strong className="text-slate-300">CĐHA | CHẨN ĐOÁN HÌNH ẢNH</strong> – Học CĐHA qua các ca bệnh. Nền tảng chia sẻ học thuật y khoa phi thương mại.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>Nội dung phục vụ mục đích đào tạo & nghiên cứu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
