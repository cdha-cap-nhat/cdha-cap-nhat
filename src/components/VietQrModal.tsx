"use client";

import React, { useState } from "react";
import { X, Check, Copy, QrCode, ShieldCheck, Download, Loader2, Crown } from "lucide-react";
import { Book } from "@/types";

interface VietQrModalProps {
  isOpen: boolean;
  onClose: () => void;
  book?: Book | null;
  isVipUpgrade?: boolean;
}

export default function VietQrModal({ isOpen, onClose, book, isVipUpgrade = false }: VietQrModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const bankName = "Vietcombank (VCB)";
  const bankBin = "970436";
  const accountNumber = "1911682737";
  const accountOwner = "HO KINH DOANH TRUC TUYEN TTHL";
  
  const amount = isVipUpgrade ? 399000 : 60000;
  const transferMemo = isVipUpgrade
    ? "CDHA VIP 8892"
    : `CDHA ${book?.slug.slice(0, 10).toUpperCase() || "BOOK"} 7761`;

  // Dynamic VietQR standard image url
  const qrUrl = `https://img.vietqr.io/image/${bankBin}-${accountNumber}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(
    transferMemo
  )}&accountName=${encodeURIComponent(accountOwner)}`;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSimulateCheck = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {isVipUpgrade ? "Nâng cấp Hội viên VIP" : "Tải nhanh sách lẻ (VietQR)"}
              </h3>
              <p className="text-xs text-slate-400">
                {isVipUpgrade ? "Gói VIP không giới hạn 1 năm" : book?.title}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Thanh toán thành công!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Hệ thống đã xác nhận chuyển khoản. {isVipUpgrade ? "Tài khoản của bạn đã được nâng cấp VIP thành công!" : "Link tải sách tốc độ cao đã được mở khóa."}
              </p>
              <div className="pt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Bắt đầu tải file PDF chất lượng cao (Google Drive Fast Mirror)");
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25"
                >
                  <Download className="w-4 h-4" />
                  Bắt đầu tải ngay
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* VietQR Code Image */}
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-inner max-w-[280px] mx-auto">
                <img
                  src={qrUrl}
                  alt="VietQR Chuyển khoản"
                  className="w-full aspect-square object-contain"
                />
                <span className="text-[11px] font-bold text-slate-600 mt-2 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Quét bằng App Ngân Hàng bất kỳ
                </span>
              </div>

              {/* Bank Details Table */}
              <div className="space-y-3 bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Ngân hàng</span>
                  <span className="font-bold text-white">{bankName}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Chủ tài khoản</span>
                  <span className="font-bold text-slate-200 uppercase">{accountOwner}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Số tài khoản</span>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-white text-sm tracking-wider font-mono">
                      {accountNumber}
                    </span>
                    <button
                      onClick={() => copyToClipboard(accountNumber, "acc")}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      title="Sao chép số tài khoản"
                    >
                      {copiedField === "acc" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Số tiền thanh toán</span>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-amber-400 text-sm font-mono">
                      {amount.toLocaleString()} VNĐ
                    </span>
                    <button
                      onClick={() => copyToClipboard(amount.toString(), "amount")}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      title="Sao chép số tiền"
                    >
                      {copiedField === "amount" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Nội dung chuyển khoản (bắt buộc)</span>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-indigo-300 font-mono bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {transferMemo}
                    </span>
                    <button
                      onClick={() => copyToClipboard(transferMemo, "memo")}
                      className="p-1 text-slate-400 hover:text-white transition-colors"
                      title="Sao chép nội dung"
                    >
                      {copiedField === "memo" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Guidance note */}
              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                💡 Vui lòng ghi chính xác nội dung chuyển khoản để hệ thống tự động kích hoạt trong vòng 1-3 phút.
              </p>

              {/* Action */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={handleSimulateCheck}
                  disabled={isVerifying}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang kiểm tra...</span>
                    </>
                  ) : (
                    <span>Tôi đã chuyển khoản</span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
