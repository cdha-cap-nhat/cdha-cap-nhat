"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Eye,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  FileCode,
  Tag,
  Clock,
  User,
  Image as ImageIcon,
  Copy,
  Sparkles,
} from "lucide-react";
import { POSTS } from "@/data/posts";

export default function AdminEditPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const currentPost = POSTS.find((p) => p.slug === slug);

  const [title, setTitle] = useState(currentPost?.title || "");
  const [excerpt, setExcerpt] = useState(currentPost?.excerpt || "");
  const [author, setAuthor] = useState(currentPost?.author || "");
  const [readTime, setReadTime] = useState(currentPost?.readTime || "");
  const [tagsString, setTagsString] = useState((currentPost?.tags || []).join(", "));
  const [htmlContent, setHtmlContent] = useState(currentPost?.htmlContent || "");

  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [copiedImg, setCopiedImg] = useState<string | null>(null);

  // Available figures list for reference
  const figures = [
    { name: "Hình 1 (DBT IDC)", url: "/posts/birads-v2025/fig1_arch_distortion_dbt_idc.jpg" },
    { name: "Hình 2 (Co kéo nan hoa)", url: "/posts/birads-v2025/fig2_arch_distortion_spiculation.jpg" },
    { name: "Hình 3 (So sánh DM vs DBT)", url: "/posts/birads-v2025/fig3_arch_distortion_dm_vs_dbt.jpg" },
    { name: "Hình 4 (IDC kín đáo)", url: "/posts/birads-v2025/fig4_arch_distortion_subtle_idc.jpg" },
    { name: "Hình 5 (ILC co rút)", url: "/posts/birads-v2025/fig5_arch_distortion_ilc.jpg" },
    { name: "Hình 6 (Sẹo mổ cũ)", url: "/posts/birads-v2025/fig6_arch_distortion_post_surgical_scar.jpg" },
    { name: "Hình 7 (Sẹo hình sao)", url: "/posts/birads-v2025/fig7_arch_distortion_radial_scar.jpg" },
    { name: "Hình 8 (Bất đối xứng toàn thể)", url: "/posts/birads-v2025/fig8_global_asymmetry_benign.jpg" },
    { name: "Hình 9 (BĐX toàn thể kèm dày da)", url: "/posts/birads-v2025/fig9_global_asymmetry_locally_advanced_idc.jpg" },
    { name: "Hình 10 (Asymmetry CC view)", url: "/posts/birads-v2025/fig10_asymmetry_cc_view_stable.jpg" },
    { name: "Hình 11 (Asymmetry MLO view)", url: "/posts/birads-v2025/fig11_asymmetry_mlo_view_benign.jpg" },
    { name: "Hình 12 (Xảo ảnh chồng mô)", url: "/posts/birads-v2025/fig12_asymmetry_summation_artifact.jpg" },
    { name: "Hình 13 (Ép khu trú xẹp)", url: "/posts/birads-v2025/fig13_asymmetry_spot_compression_negative.jpg" },
    { name: "Hình 14 (Asymmetry kéo dài trên DBT)", url: "/posts/birads-v2025/fig14_asymmetry_dm_dbt_persisting_idc.jpg" },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedImg(text);
    setTimeout(() => setCopiedImg(null), 2000);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus(null);

    const tags = tagsString
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      const res = await fetch("/api/admin/posts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          title,
          excerpt,
          author,
          readTime,
          tags,
          htmlContent,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Không thể lưu bài viết");

      setSaveStatus({
        type: "success",
        message: "Lưu thành công! Thay đổi đã được cập nhật trực tiếp vào mã nguồn hệ thống.",
      });

      setTimeout(() => setSaveStatus(null), 5000);
    } catch (err: any) {
      setSaveStatus({
        type: "error",
        message: err.message || "Đã xảy ra lỗi khi lưu bài viết.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const insertSnippet = (snippet: string) => {
    setHtmlContent((prev) => prev + "\n" + snippet);
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] pt-32 pb-20 text-center px-4 text-slate-200">
        <h2 className="text-xl font-bold text-white mb-2">Không tìm thấy bài viết để chỉnh sửa</h2>
        <p className="text-sm text-slate-400 mb-6">Slug: {slug}</p>
        <Link href="/admin" className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs">
          Về trang Quản Trị Admin
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-24 text-slate-200">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              title="Quay lại Admin"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2 text-xs text-indigo-400 font-semibold mb-0.5">
                <span>CMS Quản Trị Bài Viết</span>
                <span>/</span>
                <span className="text-slate-400">{currentPost.specialty}</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Chỉnh Sửa Bài Giảng: <span className="text-indigo-300">{title}</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href={`/bai-viet/${slug}`}
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Xem trên web
            </Link>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
            </button>
          </div>
        </div>

        {/* Save Status Alert */}
        {saveStatus && (
          <div
            className={`mb-6 p-4 rounded-xl border flex items-center gap-3 text-sm animate-fade-in ${
              saveStatus.type === "success"
                ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                : "bg-rose-950/40 border-rose-500/40 text-rose-300"
            }`}
          >
            {saveStatus.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            )}
            <span className="font-medium">{saveStatus.message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Editor (3 Columns) */}
          <div className="lg:col-span-3 space-y-5">
            {/* Metadata Fields */}
            <div className="p-5 rounded-2xl bg-[#161b22] border border-white/10 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tiêu đề bài giảng (Title)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d1117] border border-white/10 text-white text-sm focus:border-indigo-500 focus:outline-none"
                  placeholder="Nhập tiêu đề bài giảng..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tóm tắt bài giảng (Excerpt / Lead paragraph)
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0d1117] border border-white/10 text-white text-xs leading-relaxed focus:border-indigo-500 focus:outline-none resize-y"
                  placeholder="Nhập tóm tắt bài viết..."
                />
              </div>
            </div>

            {/* Content Editor Box */}
            <div className="rounded-2xl bg-[#161b22] border border-white/10 overflow-hidden flex flex-col">
              {/* Toolbar */}
              <div className="p-3 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 bg-[#0d1117] border border-white/10 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("editor")}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                      activeTab === "editor"
                        ? "bg-indigo-600 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    Soạn thảo HTML / Nội dung
                  </button>
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                      activeTab === "preview"
                        ? "bg-indigo-600 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Xem trước trực tiếp (Preview)
                  </button>
                </div>

                {activeTab === "editor" && (
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-slate-500 text-[11px] mr-1 hidden sm:inline">Chèn nhanh:</span>
                    <button
                      onClick={() => insertSnippet('<h2 id="...">Tiêu đề mục</h2>')}
                      className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10"
                    >
                      +H2
                    </button>
                    <button
                      onClick={() => insertSnippet('<h3>Tiêu đề phụ</h3>')}
                      className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10"
                    >
                      +H3
                    </button>
                    <button
                      onClick={() => insertSnippet('<div class="key-points">\n  <strong>Điểm cốt lõi:</strong> Nội dung...\n</div>')}
                      className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-indigo-300 text-xs border border-white/10"
                    >
                      +KeyPoints
                    </button>
                    <button
                      onClick={() => insertSnippet('<div class="pitfalls">\n  <strong>Cạm bẫy:</strong> Nội dung...\n</div>')}
                      className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-rose-300 text-xs border border-white/10"
                    >
                      +Pitfalls
                    </button>
                  </div>
                )}
              </div>

              {/* Tab 1: Editor */}
              {activeTab === "editor" && (
                <div className="p-4 bg-[#0d1117]">
                  <textarea
                    value={htmlContent}
                    onChange={(e) => setHtmlContent(e.target.value)}
                    rows={28}
                    className="w-full font-mono text-xs sm:text-[13px] leading-relaxed bg-[#0d1117] text-slate-200 focus:outline-none resize-y border-0"
                    placeholder="Nhập nội dung HTML của bài giảng tại đây..."
                    spellCheck={false}
                  />
                </div>
              )}

              {/* Tab 2: Live Preview */}
              {activeTab === "preview" && (
                <div className="p-6 bg-white min-h-[500px] max-h-[800px] overflow-y-auto">
                  <div
                    className="article-body text-slate-800 leading-relaxed text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar (1 Column) */}
          <div className="space-y-5">
            {/* Meta Attributes */}
            <div className="p-4.5 rounded-2xl bg-[#161b22] border border-white/10 space-y-4">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Thuộc tính xuất bản
              </h3>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 flex items-center gap-1">
                  <User className="w-3 h-3" /> Tác giả / Nguồn biên dịch
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#0d1117] border border-white/10 text-white text-xs focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Thời gian đọc ước tính
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#0d1117] border border-white/10 text-white text-xs focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Thẻ Tags (phân cách bằng dấu phẩy)
                </label>
                <input
                  type="text"
                  value={tagsString}
                  onChange={(e) => setTagsString(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#0d1117] border border-white/10 text-white text-xs focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Figures Library Quick Copy */}
            <div className="p-4.5 rounded-2xl bg-[#161b22] border border-white/10 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                  Ảnh trong bài ({figures.length})
                </h3>
                <span className="text-[10px] text-slate-500">Bấm để sao chép</span>
              </div>

              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {figures.map((fig, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleCopy(`<figure class="my-6">\n  <img src="${fig.url}" alt="${fig.name}" class="rounded-xl shadow border border-slate-200 mx-auto" />\n  <figcaption class="text-xs text-center text-slate-600 mt-2 italic font-medium"><strong>${fig.name}:</strong> [Chú thích ở đây]</figcaption>\n</figure>`)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-all group flex items-center justify-between gap-2"
                  >
                    <div className="truncate">
                      <div className="text-xs text-slate-200 group-hover:text-indigo-300 font-medium truncate">
                        {fig.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono truncate">{fig.url}</div>
                    </div>
                    <button className="text-slate-400 hover:text-white shrink-0">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {copiedImg && (
                <div className="text-[11px] text-emerald-400 font-medium text-center animate-fade-in">
                  ✓ Đã sao chép thẻ &lt;figure&gt; vào bộ nhớ tạm!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
