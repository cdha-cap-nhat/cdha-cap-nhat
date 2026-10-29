"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MonitorPlay,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sliders,
  Ruler,
  RotateCw,
  Sun,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface PacsCase {
  id: string;
  title: string;
  modality: "CT" | "MRI" | "XQ" | "Siêu âm";
  organ: string;
  patientInfo: string;
  image: string;
  technicalParams: string;
  history: string;
  findings: string[];
  diagnosis: string;
  takeaways: string;
}

export default function PacsPage() {
  const [activeTab, setActiveTab] = useState<"viewer" | "login" | "register">("viewer");

  // PACS Case state
  const pacsCases: PacsCase[] = [
    {
      id: "case-1",
      title: "Ca 1: CT Sọ não - Đau đầu dữ dội đột ngột",
      modality: "CT",
      organ: "Sọ não",
      patientInfo: "BN Nam, 54T - ID: #PACS-99120",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
      technicalParams: "Axial 5mm • 120 kV • 250 mAs • Matrix: 512x512",
      history: "Bệnh nhân đang làm việc thì xuất hiện cơn đau đầu sét đánh (thunderclap headache), nôn ói và cứng gáy nhẹ. Không sốt.",
      findings: [
        "Tăng đậm độ tự nhiên dạng dải lan tỏa lấp đầy các bể đáy (bể trên yên, bể liên cuống) và rãnh Sylvius 2 bên (Fisher độ 3).",
        "Giãn nhẹ sừng thái dương não thất bên 2 bên gợi ý chớm tắc nghẽn lưu thông dịch não tủy.",
        "Nghi ngờ túi phình động mạch thông trước (AComA) kích thước 6x5mm trên dựng hình CTA."
      ],
      diagnosis: "Xuất huyết dưới nhện (SAH) do vỡ túi phình động mạch thông trước (AComA)",
      takeaways: "Đau đầu sét đánh luôn là chỉ định chụp CT sọ não không cản quang khẩn cấp trong vòng 6 giờ vàng để phát hiện SAH."
    },
    {
      id: "case-2",
      title: "Ca 2: X-quang Ngực - Đau nhói ngực và khó thở tăng dần",
      modality: "XQ",
      organ: "Lồng ngực",
      patientInfo: "BN Nam, 22T (Thể trạng cao gầy) - ID: #PACS-88412",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      technicalParams: "PA View • 110 kV • 4 mAs • Khảo sát thì thở ra tối đa",
      history: "Thanh niên 22 tuổi cao 1m82 nặng 55kg, đột ngột đau chói ngực phải khi đang nghỉ ngơi, kèm cảm giác hụt hơi và khó thở khi hít sâu.",
      findings: [
        "Vùng tăng sáng vô mạch ở 1/3 trên và ngoài phế trường phải.",
        "Thấy rõ đường viền màng phổi tạng (visceral pleural line) bị tách rời khỏi thành ngực khoảng 3.5cm.",
        "Nhu mô phổi phải co xẹp một phần, bóng tim và khí quản chưa bị đẩy lệch sang trái."
      ],
      diagnosis: "Tràn khí màng phổi tự phát nguyên phát (PSP) mức độ vừa bên phải",
      takeaways: "Chụp X-quang ngực thì thở ra hoặc tư thế nghiêng có thể giúp bộc lộ rõ hơn đường viền màng phổi tạng trong các ca tràn khí lượng ít."
    },
    {
      id: "case-3",
      title: "Ca 3: MRI Khớp gối - Chấn thương xoắn vặn khi đá bóng",
      modality: "MRI",
      organ: "Cơ xương khớp",
      patientInfo: "BN Nam, 29T - ID: #PACS-77319",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      technicalParams: "Sagittal / Coronal PD Fat-Sat & T2 TSE • 1.5 Tesla",
      history: "Tiền sử nghe tiếng \"rắc\" ở gối phải sau pha va chạm xoay người, gối sưng đau nhanh sau 2 giờ và mất vững khớp gối.",
      findings: [
        "Mất liên tục hoàn toàn các bó sợi dây chằng chéo trước (ACL), đường đi nằm ngang song song mâm chày, phù nề mô mềm xung quanh.",
        "Hình ảnh dập xương (bone bruise) đặc trưng ở lồi cầu đùi ngoài và phần sau mâm chày ngoài.",
        "Rách dạng dọc sừng sau sụn chêm trong chạm mặt khớp dưới."
      ],
      diagnosis: "Đứt hoàn toàn dây chằng chéo trước (ACL) + Rách sừng sau sụn chêm trong gối phải",
      takeaways: "Tổn thương phối hợp ACL và sụn chêm là kinh điển trong cơ chế xoay vẹo ngoài (pivot-shift mechanism)."
    },
    {
      id: "case-4",
      title: "Ca 4: CT Bụng - Đau hố chậu phải sốt ngày thứ 2",
      modality: "CT",
      organ: "Bụng - chậu",
      patientInfo: "BN Nữ, 31T - ID: #PACS-66205",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      technicalParams: "CT Bụng chậu có cản quang thì tĩnh mạch cửa (70s)",
      history: "Đau âm ỉ quanh rốn sau đó khu trú hố chậu phải 36 giờ, sốt nhẹ 38°C, phản ứng dội (Blumberg) (+).",
      findings: [
        "Ruột thừa đường kính ngang 11mm (bình thường <= 6mm), thành ruột thừa dày 3.5mm ngấm thuốc cản quang mạnh không đều.",
        "Có viên sỏi phân (appendicolith) kích thước 6mm cản quang ở gốc ruột thừa.",
        "Thâm nhiễm mỡ rõ rệt quanh ruột thừa và tụ ít dịch tự do hố chậu phải."
      ],
      diagnosis: "Viêm ruột thừa cấp tính do sỏi phân kẹt gốc ruột thừa",
      takeaways: "Đường kính ruột thừa > 6mm kèm thâm nhiễm mỡ xung quanh trên CT có giá trị chẩn đoán xác định viêm ruột thừa với độ nhạy > 95%."
    }
  ];

  const [selectedCase, setSelectedCase] = useState<PacsCase>(pacsCases[0]);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [windowPreset, setWindowPreset] = useState<"default" | "bone" | "lung" | "brain">("default");
  const [isInverted, setIsInverted] = useState(false);

  // Auth mock state
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", username: "", password: "" });
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSuccess(`Đăng nhập thành công! Chào mừng Bác sĩ ${loginForm.username}`);
    setTimeout(() => {
      setActiveTab("viewer");
      setAuthSuccess(null);
    }, 1200);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSuccess(`Tạo tài khoản thành công cho ${registerForm.name}! Bạn có thể vào đọc phim ngay.`);
    setTimeout(() => {
      setActiveTab("viewer");
      setAuthSuccess(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* PACS Header Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <MonitorPlay className="w-4 h-4" />
              Hệ thống PACS Trực Tuyến
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              XIN CHÀO HỆ THỐNG PACS
            </h1>
            <p className="text-sm text-slate-400 font-medium italic">
              “Rảnh vào đọc phim cho vui...” — Luyện đọc ca bệnh lâm sàng CT, MRI, X-quang chuẩn mực
            </p>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-800/80 border border-slate-700 rounded-2xl text-xs font-bold">
            <button
              onClick={() => setActiveTab("viewer")}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "viewer"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Phòng Đọc Phim PACS</span>
            </button>
            <button
              onClick={() => setActiveTab("login")}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "login"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Đăng nhập</span>
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "register"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Đăng ký thành viên</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE PACS VIEWER */}
        {activeTab === "viewer" && (
          <div className="space-y-6">
            {/* Case Selection Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {pacsCases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(c);
                    setShowDiagnosis(false);
                    setZoomLevel(100);
                    setIsInverted(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedCase.id === c.id
                      ? "bg-blue-600 text-white border-blue-500 shadow-md"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="opacity-70 mr-1.5">[{c.modality}]</span>
                  {c.title}
                </button>
              ))}
            </div>

            {/* PACS Main Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* PACS Screen Viewer (8 cols) */}
              <div className="lg:col-span-8 bg-black rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
                {/* PACS Toolbar Controls */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                  {/* Left: Tools */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(z + 20, 200))}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                      title="Phóng to (Zoom In)"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(z - 20, 60))}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                      title="Thu nhỏ (Zoom Out)"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsInverted(!isInverted)}
                      className={`p-2 rounded-lg transition-colors ${
                        isInverted ? "bg-blue-600 text-white" : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                      }`}
                      title="Đảo màu âm bản (Invert)"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setZoomLevel(100);
                        setIsInverted(false);
                        setWindowPreset("default");
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Window / Level presets */}
                  <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl text-[11px]">
                    <span className="text-slate-500 px-1.5 font-bold">W/L:</span>
                    <button
                      onClick={() => setWindowPreset("default")}
                      className={`px-2 py-1 rounded-lg font-semibold ${
                        windowPreset === "default" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Mặc định
                    </button>
                    <button
                      onClick={() => setWindowPreset("bone")}
                      className={`px-2 py-1 rounded-lg font-semibold ${
                        windowPreset === "bone" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Cửa sổ xương
                    </button>
                    <button
                      onClick={() => setWindowPreset("lung")}
                      className={`px-2 py-1 rounded-lg font-semibold ${
                        windowPreset === "lung" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Cửa sổ phổi
                    </button>
                  </div>
                </div>

                {/* DICOM Display Canvas */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black flex items-center justify-center overflow-hidden select-none">
                  {/* On-screen DICOM Header Overlay (Top Left & Top Right) */}
                  <div className="absolute top-3 left-4 text-[11px] font-mono text-emerald-400/90 pointer-events-none space-y-0.5 z-10">
                    <div className="font-bold">{selectedCase.patientInfo}</div>
                    <div className="text-slate-400 text-[10px]">Modality: {selectedCase.modality} • {selectedCase.organ}</div>
                    <div className="text-slate-400 text-[10px]">{selectedCase.technicalParams}</div>
                  </div>

                  <div className="absolute top-3 right-4 text-[11px] font-mono text-emerald-400/90 text-right pointer-events-none space-y-0.5 z-10">
                    <div>CĐHA MEDICAL PACS</div>
                    <div className="text-slate-400 text-[10px]">Zoom: {zoomLevel}%</div>
                    <div className="text-slate-400 text-[10px]">W/L: {windowPreset.toUpperCase()}</div>
                  </div>

                  {/* DICOM Radiologic Image */}
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    style={{
                      transform: `scale(${zoomLevel / 100})`,
                      filter: `${isInverted ? "invert(1) hue-rotate(180deg)" : ""} ${
                        windowPreset === "bone" ? "contrast(160%) brightness(120%)" : ""
                      } ${windowPreset === "lung" ? "contrast(200%) brightness(85%)" : ""}`,
                      transition: "transform 0.2s ease-out, filter 0.2s ease-out",
                    }}
                    className="max-h-full max-w-full object-contain cursor-grab active:cursor-grabbing"
                  />

                  {/* Bottom DICOM Orientation Markers */}
                  <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-500 pointer-events-none">
                    R: Right • L: Left
                  </div>
                  <div className="absolute bottom-3 right-4 text-[10px] font-mono text-slate-500 pointer-events-none">
                    PACS Viewer v2.4 (HTML5 WebDICOM)
                  </div>
                </div>
              </div>

              {/* Clinical Analysis & Diagnosis Panel (4 cols) */}
              <div className="lg:col-span-4 bg-slate-900 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  {/* Case Title */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                      {selectedCase.modality} • {selectedCase.organ}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {selectedCase.title}
                    </h3>
                  </div>

                  {/* Clinical History */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1.5 text-xs">
                    <h4 className="font-bold text-slate-300 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      Bệnh cảnh lâm sàng:
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {selectedCase.history}
                    </p>
                  </div>

                  {/* Key Findings */}
                  <div className="space-y-2 text-xs">
                    <h4 className="font-bold text-slate-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      Dấu hiệu hình ảnh học chính:
                    </h4>
                    <ul className="space-y-1.5 pl-1">
                      {selectedCase.findings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-400 leading-relaxed">
                          <span className="text-blue-400 font-bold mt-0.5">•</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Diagnosis Reveal Section */}
                  <div className="pt-2">
                    {showDiagnosis ? (
                      <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-2 animate-in fade-in duration-200">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4" />
                          Chẩn đoán xác định:
                        </div>
                        <p className="text-sm font-bold text-white">
                          {selectedCase.diagnosis}
                        </p>
                        <div className="pt-2 border-t border-emerald-500/20 text-xs text-emerald-300/90 leading-relaxed">
                          💡 <strong>Bài học:</strong> {selectedCase.takeaways}
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowDiagnosis(true)}
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Xem Đáp Án Chẩn Đoán</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom link: Request or see full article */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Đọc phim mỗi ngày để lên tay nghề</span>
                  <Link
                    href="/"
                    className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
                  >
                    Xem bài viết chi tiết <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOGIN FORM (Tương tự cdha.edu.vn/pacs/) */}
        {activeTab === "login" && (
          <div className="max-w-md mx-auto my-8 bg-white rounded-3xl p-8 sm:p-10 text-slate-800 shadow-2xl border border-slate-200 animate-in fade-in duration-200">
            <div className="text-center mb-8 space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                XIN CHÀO
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
                Rảnh vào đọc phim cho vui...
              </p>
            </div>

            {authSuccess && (
              <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center">
                {authSuccess}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-5 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Tên đăng nhập</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Nhập tên đăng nhập..."
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Mật khẩu</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                ĐĂNG NHẬP
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500 space-y-3">
              <div>
                Chưa có tài khoản?{" "}
                <button
                  onClick={() => setActiveTab("register")}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Đăng ký thành viên
                </button>
              </div>

              <div>
                <button
                  onClick={() => setActiveTab("viewer")}
                  className="text-slate-400 hover:text-slate-700 text-[11px] underline"
                >
                  ← Vào đọc phim PACS ngay không cần đăng nhập
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REGISTER FORM (Tương tự cdha.edu.vn/pacs/auth/register.php) */}
        {activeTab === "register" && (
          <div className="max-w-md mx-auto my-8 bg-white rounded-3xl p-8 sm:p-10 text-slate-800 shadow-2xl border border-slate-200 animate-in fade-in duration-200">
            <div className="text-center mb-8 space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                TẠO TÀI KHOẢN
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
                Rảnh vào đọc phim cho vui...
              </p>
            </div>

            {authSuccess && (
              <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center">
                {authSuccess}
              </div>
            )}

            <form onSubmit={handleRegisterSubmit} className="space-y-5 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Tên hiển thị (Họ tên)</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Bs. Nguyễn Văn A"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Tên đăng nhập</label>
                <input
                  type="text"
                  required
                  placeholder="Sử dụng viết liền không dấu"
                  value={registerForm.username}
                  onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Mật khẩu</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                ĐĂNG KÝ NGAY
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500 space-y-3">
              <div>
                Đã có tài khoản?{" "}
                <button
                  onClick={() => setActiveTab("login")}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Quay lại đăng nhập
                </button>
              </div>

              <div>
                <button
                  onClick={() => setActiveTab("viewer")}
                  className="text-slate-400 hover:text-slate-700 text-[11px] underline"
                >
                  ← Vào đọc phim PACS ngay không cần đăng nhập
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
