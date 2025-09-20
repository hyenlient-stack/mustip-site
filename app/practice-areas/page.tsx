import { Section } from "@/components/section";

export default function PracticeAreasPage() {
  return (
    <Section title="업무분야">
      <div className="prose">
        <h3 id="patent">특허/실용신안</h3>
        <ul>
          <li>PCT/국내·외 출원, OA 대응, 등록</li>
          <li>FTO, 무효·침해 분석, 라이선스</li>
        </ul>

        <h3 id="tm">디자인/상표</h3>
        <ul>
          <li>국내/마드리드/헤이그</li>
          <li>브랜드 보호 전략, 유사군 분석</li>
        </ul>

        <h3 id="lit">분쟁/감정/가치평가</h3>
        <ul>
          <li>침해소송, 라이선스 협상, 기술가치평가</li>
        </ul>
      </div>
    </Section>
  );
}
