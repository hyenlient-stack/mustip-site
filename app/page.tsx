export default function Home() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        머스트 특허법률사무소 - 지식재산으로 성장하는 기업의 파트너
      </h1>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        특허·상표·디자인·분쟁·기술가치평가 — 비즈니스 성장을 위한 올인원 IP 서비스.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a href="/contact" className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-white">상담 문의</a>
        <a href="/practice-areas" className="inline-flex rounded-full border px-6 py-3">업무분야 보기</a>
      </div>
    </section>
  )
}
