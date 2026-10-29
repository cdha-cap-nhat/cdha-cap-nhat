"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, KeyRound, ArrowRight, ShieldCheck, AlertCircle, LogOut } from "lucide-react";
import { ADMIN_TOKEN_KEY } from "@/lib/auth";

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

export default function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check initial authentication status
    const localAuth = localStorage.getItem("cdha_admin_auth") === "true";
    if (localAuth) {
      setIsAuthenticated(true);
      return;
    }

    fetch("/api/admin/auth")
      .then((res) => res.json())
      .then((data) => {
        if (data?.authenticated) {
          localStorage.setItem("cdha_admin_auth", "true");
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Vui lòng nhập mật khẩu quản trị");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Mật khẩu quản trị không chính xác");
      }

      localStorage.setItem("cdha_admin_auth", "true");
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" }).catch(() => {});
    localStorage.removeItem("cdha_admin_auth");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center text-slate-400 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span>Đang kiểm tra quyền quản trị...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a16] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#161b22] border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-lg">
              <Image src="/logo.jpg" alt="Logo CĐHA" fill className="object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 mb-2">
                <Lock className="w-3 h-3" />
                CỔNG QUẢN TRỊ BẢO MẬT
              </div>
              <h2 className="text-xl font-extrabold text-white">Xác Thực Quản Trị Viên</h2>
              <p className="text-xs text-slate-400 mt-1">
                Vui lòng nhập mật khẩu quản trị để truy cập trang quản trị & công cụ biên tập bài viết.
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Mật khẩu Quản trị (Admin Password)
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Nhập mật khẩu quản trị..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white text-sm focus:border-indigo-500 focus:outline-none placeholder-slate-500 transition-colors"
                  autoFocus
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <span>Đang xác thực...</span>
              ) : (
                <>
                  <span>Mở Khóa Quản Trị</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-white/5 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              ← Trở về Trang chủ người đọc
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Discreet Logout Bar */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-rose-950 text-slate-400 hover:text-rose-200 text-[11px] font-semibold border border-white/10 hover:border-rose-500/30 shadow-xl flex items-center gap-1.5 transition-all backdrop-blur-md"
          title="Đăng xuất khỏi phiên Quản trị viên"
        >
          <LogOut className="w-3 h-3" />
          <span>Đăng xuất Admin</span>
        </button>
      </div>
      {children}
    </>
  );
}
