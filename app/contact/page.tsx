// app/contact/page.tsx
import ContactForm from "./ContactForm";

export const metadata = {
  title: "문의하기 | 머스트 특허법률사무소",
  description: "특허, 상표, 디자인, FTO 등 상담 문의를 남겨주세요.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: Intro */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            24시간 접수 · 영업일 기준 1–2일 내 회신
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            문의하기
          </h1>

          <p className="text-base leading-7 text-slate-600">
            머스트 특허법률사무소에 방문해 주셔서 감사합니다.
            <br />
            간단히 내용을 남겨주시면 담당 변리사가 확인 후 회신드리겠습니다.
          </p>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="grid gap-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                <div>
                  <div className="font-medium text-slate-900">전화</div>
                  <div className="text-slate-600">02-526-6710</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                <div>
                  <div className="font-medium text-slate-900">이메일</div>
                  <div className="text-slate-600">mustip@mustip.co.kr</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                <div>
                  <div className="font-medium text-slate-900">주소</div>
                  <div className="text-slate-600">
                    서울특별시 송파구 법원로8길 8, 312호
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="space-y-2 text-sm text-slate-600">
              <div className="font-medium text-slate-900">빠른 상담을 위해</div>
              <ul className="list-disc space-y-1 pl-5">
                <li>권리 종류(특허/상표/디자인/저작권/기타)</li>
                <li>대상 국가(국내/해외)</li>
                <li>현재 단계(아이디어/출원/심사/분쟁/검토 등)</li>
                <li>원하는 일정(긴급 여부)</li>
              </ul>
            </div>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            * 접수 후 자동응답 메일이 발송됩니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.
          </p>
        </section>

        {/* Right: Form */}
        <section className="rounded-2xl border bg-white p-6 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-slate-900">문의 내용 작성</h2>
          <p className="mt-1 text-sm text-slate-600">
            아래 항목을 입력하시면, 접수 확인 메일과 함께 담당자가 연락드립니다.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
