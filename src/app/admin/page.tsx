"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Crown,
  Users,
  Settings,
  Plus,
  Search,
  CheckCircle,
  Clock,
  Trash2,
  Edit,
  Save,
  QrCode,
  ShieldAlert,
} from "lucide-react";
import { BOOKS } from "@/data/books";
import { CATEGORIES } from "@/data/categories";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"books" | "vip-requests" | "settings">("books");
  const [bookList, setBookList] = useState(BOOKS);
  const [search, setSearch] = useState("");

  const [vipRequests, setVipRequests] = useState([
    { id: "REQ-01", user: "Dr. Nguyen Tuan", email: "tuan.dr@gmail.com", amount: 399000, memo: "CDHA VIP 8892", status: "PENDING", time: "10 phút trước" },
    { id: "REQ-02", user: "Le Thi Mai (SV Y5)", email: "maiy5@hmu.edu.vn", amount: 399000, memo: "CDHA VIP 7712", status: "APPROVED", time: "1 giờ trước" },
    { id: "REQ-03", user: "Tran Quoc Bao", email: "baotq@ump.edu.vn", amount: 60000, memo: "CDHA BOOK 9901", status: "APPROVED", time: "3 giờ trước" },
  ]);

  const [settings, setSettings] = useState({
    bankName: "Vietcombank (VCB)",
    accountNumber: "1911682737",
    accountOwner: "HO KINH DOANH TRUC TUYEN TTHL",
    vipPrice: 399000,
    singlePrice: 60000,
    maintenanceMode: false,
  });

  const handleApproveVip = (id: string) => {
    setVipRequests(
      vipRequests.map((r) => (r.id === id ? { ...r, status: "APPROVED" } : r))
    );
  };

  const filtered = bookList.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a1a] pt-32 pb-24 text-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Admin Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Hệ Thống Quản Trị CĐHA-Cập-Nhật Medical
              </h1>
              <p className="text-xs text-slate-400">
                Quản lý thư viện sách, duyệt hội viên VIP và cấu hình hệ thống
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("books")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "books" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Kho sách ({bookList.length})
            </button>
            <button
              onClick={() => setActiveTab("vip-requests")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "vip-requests" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              <Crown className="w-4 h-4 text-amber-400" />
              Duyệt VIP ({vipRequests.filter((r) => r.status === "PENDING").length})
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "settings" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              <QrCode className="w-4 h-4" />
              Cấu hình VietQR
            </button>
          </div>
        </div>

        {/* Tab 1: Book Management */}
        {activeTab === "books" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm kiếm tài liệu cần sửa/xóa..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                onClick={() => alert("Mở form thêm sách mới vào cơ sở dữ liệu!")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm tài liệu mới</span>
              </button>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-slate-400 font-semibold uppercase tracking-wider border-b border-white/10">
                    <tr>
                      <th className="p-4">Tài liệu</th>
                      <th className="p-4">Chuyên ngành</th>
                      <th className="p-4">Loại</th>
                      <th className="p-4">Lượt tải</th>
                      <th className="p-4">Năm</th>
                      <th className="p-4 text-right">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtered.map((b) => (
                      <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 flex items-center gap-3">
                          <img src={b.coverImage} alt="" className="w-10 h-14 object-cover rounded-lg border border-white/10 shrink-0" />
                          <div className="min-w-0">
                            <strong className="text-white block font-bold text-sm truncate max-w-sm">{b.title}</strong>
                            <span className="text-slate-400 text-xs truncate max-w-xs block">{b.author}</span>
                          </div>
                        </td>
                        <td className="p-4 text-slate-300 font-medium">{b.category}</td>
                        <td className="p-4">
                          {b.isVipOnly ? (
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              VIP
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              Miễn phí
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-indigo-300 font-mono font-bold">{b.downloads.toLocaleString()}</td>
                        <td className="p-4 text-slate-400">{b.publishYear}</td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => alert(`Sửa thông tin: ${b.title}`)}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                            title="Chỉnh sửa"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Bạn có chắc muốn xóa: ${b.title}?`)) {
                                setBookList(bookList.filter((item) => item.id !== b.id));
                              }
                            }}
                            className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                            title="Xóa"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: VIP Requests */}
        {activeTab === "vip-requests" && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 text-slate-400 font-semibold uppercase tracking-wider border-b border-white/10">
                  <tr>
                    <th className="p-4">Mã Đơn</th>
                    <th className="p-4">Người dùng</th>
                    <th className="p-4">Số tiền</th>
                    <th className="p-4">Cú pháp Chuyển khoản</th>
                    <th className="p-4">Thời gian</th>
                    <th className="p-4">Trạng thái</th>
                    <th className="p-4 text-right">Xử lý</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {vipRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-white/[0.02]">
                      <td className="p-4 font-mono font-bold text-indigo-400">{req.id}</td>
                      <td className="p-4">
                        <strong className="text-white block">{req.user}</strong>
                        <span className="text-slate-400">{req.email}</span>
                      </td>
                      <td className="p-4 font-mono font-bold text-amber-400">{req.amount.toLocaleString()} VNĐ</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-indigo-300">
                          {req.memo}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400">{req.time}</td>
                      <td className="p-4">
                        {req.status === "APPROVED" ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                            <CheckCircle className="w-3.5 h-3.5" /> Đã duyệt
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                            <Clock className="w-3.5 h-3.5" /> Chờ xác nhận
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        {req.status === "PENDING" && (
                          <button
                            onClick={() => handleApproveVip(req.id)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
                          >
                            Kích hoạt VIP
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: System & VietQR Settings */}
        {activeTab === "settings" && (
          <div className="max-w-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <QrCode className="w-5 h-5 text-indigo-400" />
              Cấu hình Thông tin Chuyển khoản VietQR
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Ngân hàng</label>
                <input
                  type="text"
                  value={settings.bankName}
                  onChange={(e) => setSettings({ ...settings, bankName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Số tài khoản ngân hàng</label>
                <input
                  type="text"
                  value={settings.accountNumber}
                  onChange={(e) => setSettings({ ...settings, accountNumber: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Tên chủ tài khoản (In hoa không dấu)</label>
                <input
                  type="text"
                  value={settings.accountOwner}
                  onChange={(e) => setSettings({ ...settings, accountOwner: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white uppercase focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Giá gói VIP (VNĐ)</label>
                  <input
                    type="number"
                    value={settings.vipPrice}
                    onChange={(e) => setSettings({ ...settings, vipPrice: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Giá tải sách lẻ (VNĐ)</label>
                  <input
                    type="number"
                    value={settings.singlePrice}
                    onChange={(e) => setSettings({ ...settings, singlePrice: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => alert("Đã lưu cài đặt VietQR thành công!")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Lưu cấu hình hệ thống</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
