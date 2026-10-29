import React from "react";
import { BookOpen, Users, Download, Stethoscope } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      count: "15,000+",
      label: "Đầu sách Y khoa",
      color: "from-indigo-500 to-blue-500",
      textColor: "text-indigo-400",
    },
    {
      icon: Users,
      count: "85,000+",
      label: "Bác sĩ & Sinh viên Y",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
    },
    {
      icon: Download,
      count: "480,000+",
      label: "Lượt tải tài liệu",
      color: "from-rose-500 to-orange-500",
      textColor: "text-rose-400",
    },
    {
      icon: Stethoscope,
      count: "68+",
      label: "Chuyên khoa & Bộ môn",
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
    },
  ];

  return (
    <section className="py-12 bg-[#0c1222] border-y border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shrink-0 shadow-lg`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {s.count}
                  </span>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
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
