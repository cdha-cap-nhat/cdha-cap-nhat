"use client";

import React, { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from "lucide-react";

interface ImageLightboxModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export default function ImageLightboxModal({
  isOpen,
  src,
  alt,
  caption,
  onClose,
}: ImageLightboxModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom whenever a new image opens
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === "-") {
        setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
      } else if (e.key === "0") {
        setZoomLevel(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="w-full max-w-5xl flex items-center justify-between py-2 px-4 text-white z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
          <span className="hidden sm:inline bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
            Xem ảnh y khoa chất lượng cao
          </span>
          <span className="text-[11px] text-slate-400">
            (Thu phóng: {Math.round(zoomLevel * 100)}%)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Thu nhỏ (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Đặt lại kích thước gốc (0)"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 3))}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Phóng to (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <a
            href={src}
            download
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors hidden sm:block"
            title="Tải ảnh gốc"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="p-2 ml-2 rounded-lg bg-rose-600/90 hover:bg-rose-600 text-white transition-colors"
            title="Đóng (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div
        className="flex-1 w-full flex items-center justify-center overflow-auto p-2"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={src}
          alt={alt || "Ảnh y khoa"}
          style={{ transform: `scale(${zoomLevel})` }}
          className="max-h-[82vh] max-w-[94vw] object-contain transition-transform duration-150 cursor-zoom-out select-none rounded-lg shadow-2xl"
          onClick={(e) => {
            e.stopPropagation();
            // Toggle between 1x and 1.75x on image click
            setZoomLevel((prev) => (prev > 1.2 ? 1 : 1.75));
          }}
        />
      </div>

      {/* Caption at Bottom */}
      {caption && (
        <div
          className="w-full max-w-4xl py-2 px-4 mb-2 text-center text-xs sm:text-sm text-slate-200 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 shadow-xl shrink-0 leading-relaxed"
          onClick={(e) => e.stopPropagation()}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
