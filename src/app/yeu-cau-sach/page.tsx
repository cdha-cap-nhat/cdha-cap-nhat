"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, FileQuestion, BookOpen, Clock, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BookRequestPage() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
    publishYear: "",
    category: "Y học lâm sàng",
    referenceUrl: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.bookTitle.trim() || !formData.email.trim()) {
      alert("Vui lòng điền tên sách và email nhận thông báo!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 text-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
        </Link>

        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Đã tiếp nhận yêu cầu!</h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Cảm ơn bạn đã gửi yêu cầu tài liệu: <strong className="text-white">\"{formData.bookTitle}\"</strong>. Đội ngũ CĐHA-Cập-Nhật sẽ tìm kiếm và gửi link tải trực tiếp đến email <strong className="text-indigo-300">{formData.email}</strong> trong vòng 24 giờ.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      bookTitle: "",
                      author: "",
                      publishYear: "",
                      category: "Y học lâm sàng",
                      referenceUrl: "",
                      email: "",
                      notes: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Gửi yêu cầu sách khác
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <FileQuestion className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Yêu Cầu Tài Liệu & Sách Y Khoa
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Bạn không tìm thấy tài liệu cần thiết? Hãy gửi thông tin để chúng tôi hỗ trợ.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">
                    Tên sách / Tài liệu cần tìm <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Cẩm nang phẫu thuật nội soi ổ bụng, Oxford Handbook..."
                    value={formData.bookTitle}
                    onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Tác giả / Nhà xuất bản
                    </label>
                    <input
                      type="text"
                      placeholder="VD: ĐH Y Hà Nội, McGraw Hill..."
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Năm xuất bản / Phiên bản (Edition)
                    </label>
                    <input
                      type="text"
                      placeholder="VD: 2023, Tái bản lần 3..."
                      value={formData.publishYear}
                      onChange={(e) => setFormData({ ...formData, publishYear: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Chuyên khoa
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Y học lâm sàng">Y học lâm sàng (Nội, Ngoại, Sản, Nhi)</option>
                      <option value="Gây mê Hồi sức">Gây mê Hồi sức (GMHS) & ICU</option>
                      <option value="Y học cơ sở">Y học cơ sở (Giải phẫu, Sinh lý...)</option>
                      <option value="Cận lâm sàng">Cận lâm sàng (X-quang, CT, MRI, ECG)</option>
                      <option value="Dược học">Dược học & Dược lâm sàng</option>
                      <option value="Sách Tiếng Anh & USMLE">Sách Tiếng Anh & USMLE</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1.5">
                      Email nhận thông báo khi có sách <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tenban@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">
                    Link tham khảo bìa sách / mục lục (nếu có)
                  </label>
                  <input
                    type="url"
                    placeholder="https://amazon.com/... hoặc link ảnh bìa"
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">
                    Ghi chú thêm
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ghi chú về định dạng cần (PDF scan đẹp, bản dịch tiếng Việt hay bản gốc tiếng Anh)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Cam kết phản hồi trong vòng 24 giờ làm việc</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-extrabold rounded-xl shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi yêu cầu tài liệu</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
