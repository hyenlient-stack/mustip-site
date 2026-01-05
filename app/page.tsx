// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* 배경 비디오 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 어둡게 오버레이(텍스트 가독성) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
          머스트 특허법률사무소<br />지식재산으로 성장하는 기업의 파트너
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-lg text-white/90">
          특허·상표·디자인·분쟁·기술가치평가<br />비즈니스 성장을 위한 올인원 IP 서비스
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 transition"
          >
            상담 문의
          </Link>
          <Link
            href="/practice-areas"
            className="inline-flex rounded-full border border-white/80 px-6 py-3 font-medium hover:bg-white hover:text-black transition"
          >
            업무분야 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
