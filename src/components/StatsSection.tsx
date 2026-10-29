import React from "react";
import { BookOpen, Users, Download, Stethoscope } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      count: "15,000+",
      label: "Đầu sách Y khoa",
      color: "from-indigo-600 to-blue-600",
    },
    {
      icon: Users,
      count: "85,000+",
      label: "Bác sĩ & Sinh viên Y",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Download,
      count: "480,000+",
      label: "Lượt tải tài liệu",
      color: "from-rose-500 to-orange-500",
    },
    {
      icon: Stethoscope,
      count: "68+",
      label: "Chuyên khoa & Bộ môn",
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors shadow-xs"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shrink-0 shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {s.count}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
