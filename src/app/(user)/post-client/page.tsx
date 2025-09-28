// src/app/(user)/post-client/page.tsx

"use client";

import { usePosts } from "@/store/posts";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const { items, loading, error, fetchData } = usePosts();

  useEffect(() => {
    fetchData(); // ดึงรายการโพสต์ทั้งหมด
  }, [fetchData]);

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>ผิดพลาด: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {items.map((post, index) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h2>
              {index + 1}. {post.title}
            </h2>
            <p>{post.body}</p>
            {/* ✅ ปุ่มกดไปหน้ารายละเอียด (comments) */}
            <Link
              href={`/post-client/${post.id}`}
              style={{
                padding: "6px 12px",
                background: "#0070f3",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              รายละเอียด
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}