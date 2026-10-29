import React from "react";
import Link from "next/link";
import { Send, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function BookRequestSection() {
  return (
    <section id="request" className="py-20 bg-gradient-to-b from-[#0c1222] via-[#0f172a] to-[#1e293b]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Ambient animated glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />

            <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                {/* Left content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 rounded-2xl text-indigo-400 border border-indigo-500/30 shadow-inner">
                      <Send className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Bạn đang tìm kiếm tài liệu Y khoa?
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Đừng ngần ngại gửi yêu cầu cho chúng tôi. Đội ngũ bác sĩ và quản trị viên CĐHA-Cập-Nhật sẽ nỗ lực tìm kiếm, quét số hóa và bổ sung tài liệu bạn cần sớm nhất có thể.
                  </p>
                </div>

                {/* Right button & guarantees */}
                <div className="flex flex-col items-center gap-4 shrink-0">
                  <Link
                    href="/yeu-cau-sach"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-extrabold rounded-2xl shadow-2xl shadow-indigo-500/40 hover:-translate-y-1 hover:scale-105 transition-all text-sm sm:text-base group"
                  >
                    <span>Yêu cầu ngay</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> Phản hồi trong 24h
                    </span>
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <ShieldCheck className="w-4 h-4" /> Hoàn toàn miễn phí
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
