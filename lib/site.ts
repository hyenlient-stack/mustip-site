// lib/site.ts
export const site = {
  name: "머스트 특허법률사무소",
  // 개발 중엔 localhost, 배포 시 환경변수로 자동 전환
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "지식재산의 가치를 높이는 종합 IP 파트너 (특허·상표·디자인·분쟁·가치평가)",
  // 네비게이션 (Header/Nav 컴포넌트가 사용)
  nav: [
    { href: "/", label: "홈" },
    { href: "/practice-areas", label: "업무분야" },
    { href: "/attorneys", label: "변리사/팀" },
    { href: "/insights", label: "인사이트" },
    { href: "/contact", label: "문의" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/yourfirm",
  },
};
