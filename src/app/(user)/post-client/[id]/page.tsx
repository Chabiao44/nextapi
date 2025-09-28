import Link from "next/link";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  params: { id: string };
};

export default async function CommentPage({ params }: Props) {
  const { id } = params;

  // ✅ ใช้ fetch แทน axios
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!res.ok) throw new Error("โหลดข้อมูลล้มเหลว");

  const comments: Comment[] = await res.json();

  const prettyJson = JSON.stringify(comments, null, 2);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Comments ของ Post ID: {id}</h1>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        {prettyJson}
      </pre>

      <Link
  href="/post-client"
  style={{
    display: "inline-block",
    marginTop: "20px",
    padding: "6px 12px",
    background: "#555",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  }}
>
  ไปยังโพสต์
</Link>
    </div>
  );
}
