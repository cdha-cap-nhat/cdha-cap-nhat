import React from "react";
import Link from "next/link";
import {
  DownloadCloud,
  Smartphone,
  Laptop,
  BookOpen,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function GuidePage() {
  const platforms = [
    {
      title: "1. Tải và đọc trên iPhone / iPad (iOS)",
      icon: Smartphone,
      steps: [
        "Bấm nút \"Tải sách\" hoặc \"Tải nhanh\" trên trang chi tiết tài liệu.",
        "Trình duyệt Safari sẽ mở link Google Drive tốc độ cao hoặc tải trực tiếp file .pdf.",
        "Chọn biểu tượng Chia sẻ (Share) -> Chọn lưu vào ứng dụng \"Sách (Apple Books)\" hoặc \"GoodNotes / Notability\".",
        "Tài liệu sẽ được đồng bộ iCloud tự động để đọc mọi lúc offline mà không cần mạng.",
      ],
      recommendation: "Khuyên dùng: Apple Books, GoodNotes 6 để highlight và vẽ ghi chú trên Atlas giải phẫu.",
    },
    {
      title: "2. Tải và đọc trên điện thoại & máy tính bảng Android",
      icon: Smartphone,
      steps: [
        "Bấm nút \"Tải sách\" -> File PDF sẽ được tự động tải về thư mục \"Download\" của máy.",
        "Mở ứng dụng Quản lý tệp (Files) -> Chọn tệp vừa tải về.",
        "Mở bằng Google PDF Viewer, Adobe Acrobat Reader hoặc Xodo Docs.",
      ],
      recommendation: "Khuyên dùng: Xodo PDF Reader & Editor (miễn phí, hỗ trợ highlight và đọc 2 trang song song).",
    },
    {
      title: "3. Tải và đọc trên Máy tính (Windows / MacOS)",
      icon: Laptop,
      steps: [
        "Bấm nút \"Tải sách\" -> Chọn thư mục lưu trữ trên ổ đĩa máy tính.",
        "File PDF có dung lượng lớn (100MB - 300MB) nên dùng trình duyệt Chrome/Edge hoặc phần mềm hỗ trợ download.",
        "Mở đọc bằng Adobe Acrobat Reader, Foxit PDF Reader hoặc Microsoft Edge (rất nhẹ và mượt).",
      ],
      recommendation: "Khuyên dùng: Foxit PDF Reader hoặc Adobe Acrobat Pro để tra cứu mục lục bookmark nhanh.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">
            <DownloadCloud className="w-4 h-4" />
            <span>Cẩm nang bạn đọc</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hướng Dẫn Tải & Đọc Ebook Y Khoa
          </h1>
          <p className="text-sm text-slate-400">
            Cách tải tài liệu nhanh nhất và phần mềm đọc sách y khoa tối ưu trên mọi thiết bị
          </p>
        </div>

        {/* Guides for platforms */}
        <div className="space-y-8 mb-16">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">{p.title}</h2>
                </div>

                <div className="space-y-2.5 pl-2 sm:pl-4 text-xs sm:text-sm text-slate-600">
                  {p.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-medium flex items-center gap-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>{p.recommendation}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Large files & VIP */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Gặp khó khăn khi tải file dung lượng lớn?
            </h3>
            <p className="text-xs text-slate-400">
              Thành viên VIP được cung cấp link tải Google Drive trực tiếp tốc độ cao không giới hạn băng thông.
            </p>
          </div>
          <Link
            href="/nang-cap-vip"
            className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs rounded-xl shadow-lg shrink-0 hover:scale-105 transition-transform flex items-center gap-1.5"
          >
            <span>Nâng cấp VIP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
