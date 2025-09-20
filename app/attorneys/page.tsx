const members = [
  { name: "홍길동 변리사", role: "대표", bio: "바이오/의료기기 전문." },
  { name: "김철수 변리사", role: "파트너", bio: "ICT/AI/데이터." },
];

export default function AttorneysPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold mb-8">변리사/팀</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl border p-6">
            <div className="font-medium">{m.name}</div>
            <div className="text-sm text-slate-600">{m.role}</div>
            <p className="mt-2 text-sm text-slate-700">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
