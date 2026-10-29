"use client";

import React, { useState } from "react";
import {
  Crown,
  Check,
  Zap,
  ShieldCheck,
  Download,
  BookOpen,
  Headphones,
  Video,
  Clock,
  Sparkles,
} from "lucide-react";
import VietQrModal from "@/components/VietQrModal";

export default function VipUpgradePage() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const perks = [
    { title: "Tải không giới hạn 15.000+ Ebook", desc: "Toàn bộ sách Y Dược, USMLE, Gây mê hồi sức bản đẹp nhất" },
    { title: "Truy cập trọn bộ Khóa học Video", desc: "Xem không giới hạn các chuỗi video bài giảng lâm sàng & thủ thuật" },
    { title: "Đường truyền Google Drive VIP", desc: "Tốc độ tải cực nhanh, không quảng cáo, không mã độc rút gọn link" },
    { title: "Đặc quyền Yêu cầu tài liệu ưu tiên", desc: "Đội ngũ CĐHA-Cập-Nhật tìm kiếm và scan sách theo yêu cầu trong vòng 24 giờ" },
    { title: "Cập nhật sách mới trọn đời", desc: "Tự động tiếp cận các phiên bản sách mới xuất bản hàng tuần" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
            <Crown className="w-4 h-4" />
            <span>Chương trình tri ân sinh viên & Bác sĩ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nâng Cấp Hội Viên <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">VIP CĐHA-Cập-Nhật</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Mở khóa kho tàng tri thức y khoa lớn nhất Việt Nam. Tiết kiệm hàng chục triệu đồng chi phí mua sách ngoại văn và giáo trình chuyên sâu.
          </p>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free Tier */}
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Thành Viên Thường</h3>
                <p className="text-xs text-slate-400 mt-1">Dành cho bạn đọc tìm hiểu cơ bản</p>
              </div>

              <div className="text-3xl font-extrabold text-slate-800">
                Miễn phí <span className="text-xs font-normal text-slate-500">/ Vĩnh viễn</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  Đọc thử trực tuyến tất cả tài liệu
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  Tải sách miễn phí (giới hạn một số cuốn cơ bản)
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">✕</span>
                  Không xem được khóa học video chuyên sâu
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px]">✕</span>
                  Tải sách chuyên ngành VIP: 60.000đ/cuốn
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <div className="py-3 rounded-xl bg-slate-100 text-slate-600 text-center text-xs font-semibold">
                Đang sử dụng
              </div>
            </div>
          </div>

          {/* VIP Package Card matching GMHS */}
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-orange-50/50 border-2 border-amber-400 p-8 shadow-xl flex flex-col justify-between">
            {/* Top highlight badge */}
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-lg">
              Khuyên dùng (Tiết kiệm 50%)
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-extrabold text-slate-900">Hội Viên VIP Toàn Diện</h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">Toàn quyền tải không giới hạn mọi tài liệu</p>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-amber-400 font-mono">
                    399.000đ
                  </span>
                  <span className="text-sm text-slate-500 line-through">800.000đ</span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    -50% Khuyến mãi
                  </span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">Truy cập không giới hạn trọn gói 1 năm</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-800">
                {perks.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block">{p.title}</strong>
                      <span className="text-[11px] text-slate-400">{p.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Crown className="w-5 h-5" />
                <span>Nâng cấp VIP qua VietQR ngay</span>
              </button>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="max-w-2xl mx-auto text-center space-y-3 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Cam kết uy tín từ CĐHA-Cập-Nhật Medical
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Hệ thống kích hoạt VIP hoàn toàn tự động ngay sau khi chuyển khoản thành công. Nếu cần hỗ trợ thêm, vui lòng liên hệ trực tiếp qua Email <strong>contact@cdha-cap-nhat.vn</strong> hoặc Telegram để được giải quyết trong 5 phút.
          </p>
        </div>
      </div>

      <VietQrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        isVipUpgrade={true}
      />
    </div>
  );
}
