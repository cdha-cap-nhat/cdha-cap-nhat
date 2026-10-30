"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { POSTS } from "@/data/posts";
import MedicalReadingLayout from "@/components/reading/MedicalReadingLayout";

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const initialPost = POSTS.find((p) => p.slug === params.slug);
  const [post, setPost] = useState(initialPost);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if current visitor has admin rights
    const localAuth =
      typeof window !== "undefined" && localStorage.getItem("cdha_admin_auth") === "true";
    if (localAuth) {
      setIsAdmin(true);
    } else {
      fetch("/api/admin/auth")
        .then((res) => res.json())
        .then((data) => {
          if (data?.authenticated) {
            setIsAdmin(true);
            if (typeof window !== "undefined") {
              localStorage.setItem("cdha_admin_auth", "true");
            }
          }
        })
        .catch(() => {});
    }

    fetch(`/api/admin/posts?slug=${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.post) setPost(data.post);
      })
      .catch(() => {});
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy bài viết</h2>
        <p className="text-sm text-slate-500 mb-6">
          Ca bệnh hoặc bài phân tích này không tồn tại hoặc đã được dời đi.
        </p>
        <Link
          href="/"
          className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs shadow-xs"
        >
          Về trang chủ CĐHA
        </Link>
      </div>
    );
  }

  // Filter related posts in the same specialty or modality
  const relatedPosts = POSTS.filter(
    (p) =>
      p.id !== post.id &&
      (p.specialtySlug === post.specialtySlug || p.modality === post.modality)
  );

  const recentPosts = POSTS.slice(0, 5);

  return (
    <MedicalReadingLayout
      post={post}
      relatedPosts={relatedPosts}
      recentPosts={recentPosts}
      isAdmin={isAdmin}
    />
  );
}
