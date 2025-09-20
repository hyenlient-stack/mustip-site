import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static"; // 빌드시 정적 생성

export default function InsightsPage() {
  const dir = path.join(process.cwd(), "content/insights");
  const posts = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    : [];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold mb-6">인사이트</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p} className="flex items-center justify-between border rounded-xl p-4">
            <span>{p.replace(/\.(mdx|md)$/, "")}</span>
            {/* 상세페이지는 5단계에서 연결 */}
            <button className="text-blue-600" disabled>준비중</button>
          </li>
        ))}
      </ul>
      {posts.length === 0 && <p className="text-slate-600">곧 게시물이 업로드됩니다.</p>}
    </div>
  );
}
