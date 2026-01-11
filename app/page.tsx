// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

type HeroImage = { src: string; alt: string };
type ClientLogo = { src: string; alt: string; scale?: number };

// CSS custom properties 타입(✅ any 없이)
type MarqueeStyle = React.CSSProperties & {
  ["--duration"]?: string;
  ["--start"]?: string;
};

const HERO_IMAGES: HeroImage[] = [
  { src: "/hero/hero1.jpg", alt: "Hero image 1" },
  { src: "/hero/hero2.jpg", alt: "Hero image 2" },
  { src: "/hero/hero3.jpg", alt: "Hero image 3" },
];

const CLIENT_LOGOS_ROW_1: ClientLogo[] = [
  { src: "/clients/snu_logo.jpg", alt: "서울대학교 산학협력단", scale: 1.1 },
  { src: "/clients/ku_logo.png", alt: "고려대학교 산학협력단" },
  { src: "/clients/snuh_logo.png", alt: "서울대학교병원" },
  { src: "/clients/samsungh_logo.png", alt: "삼성병원", scale: 1.1 },
  { src: "/clients/gist_logo.png", alt: "광주과학기술원 산학협력단", scale: 1.1 },
  { src: "/clients/seoulsi_logo.png", alt: "서울시립대학교 산학협력단", scale: 1.1 },
  { src: "/clients/sogang_logo.png", alt: "서강대학교 산학협력단", scale: 1.1 },
  { src: "/clients/sch_logo.png", alt: "순천향대 산학협력단" },
  { src: "/clients/transportation_logo.jpg", alt: "한국국립교통대학교 산학협력단", scale: 1.1 },
  { src: "/clients/erica_logo.png", alt: "한양대학교에리카 산학협력단" },
  { src: "/clients/kista_logo.png", alt: "한국특허전략개발원" },
  { src: "/clients/ipcare_logo.png", alt: "한국지식재산보호원" },
];

const CLIENT_LOGOS_ROW_2: ClientLogo[] = [
  { src: "/clients/toolgen_logo.png", alt: "toolgen" },
  { src: "/clients/cellbion_logo.jpg", alt: "cellbion" },
  { src: "/clients/sg_bioscience_logo.avif.png", alt: "sg_bioscience", scale: 1.1 },
  { src: "/clients/hysens_logo.png", alt: "hysensbio" },
  { src: "/clients/ibex_logo.png", alt: "ibex_medical_systems" },
  { src: "/clients/medi_logo.png", alt: "medi&gene" },
  { src: "/clients/xnells.png", alt: "xnells", scale: 1.2 },
  { src: "/clients/exhealthcare_logo.jpg", alt: "exhealthcare", scale: 1.1 },
  { src: "/clients/green_mineral_logo.png", alt: "green_mineral" },
  { src: "/clients/immunabs.png", alt: "immunabs" },
  { src: "/clients/neuroxt_logo.png", alt: "neuroxt" },
  { src: "/clients/farmi_logo.jpg", alt: "farmirehse" },
  { src: "/clients/ohlab_logo.png", alt: "ohlab", scale: 1.1 },
  { src: "/clients/pb_logo.jpg", alt: "pb_immune_therapeutics" },
  { src: "/clients/dreampac_logo.png", alt: "dreampac" },
  { src: "/clients/pine_logo.png", alt: "pine_digital-health", scale: 1.1 },
  { src: "/clients/targetlink_logo.jpg", alt: "targetlink_therapeutics" },
  { src: "/clients/anu_logo.png", alt: "anu", scale: 0.5 },
  { src: "/clients/bob_logo.png", alt: "bobjangin", scale: 1.3 },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {HERO_IMAGES.map((img, i) => {
          const active = i === index;

          return (
            <div
              key={img.src}
              className={clsx(
                "absolute inset-0 transition-opacity duration-[900ms] ease-out",
                active ? "opacity-100" : "opacity-0"
              )}
              aria-hidden={!active}
            >
              <img
                key={`${img.src}-${index}`}
                src={img.src}
                alt={img.alt}
                className={clsx("h-full w-full object-cover", active ? "animate-kenburns" : "")}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
            IP is not a cost. It’s valuation.
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-lg text-white/90">
            특허·상표·디자인·분쟁·기술가치평가
            <br />
            비즈니스 성장을 위한 올인원 IP 서비스
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 transition"
            >
              상담 문의
            </Link>

            <button
              type="button"
              onClick={() => {
                document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex rounded-full border border-white/80 px-6 py-3 font-medium hover:bg-white hover:text-black transition"
            >
              주요 고객사 보기
            </button>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section id="clients" className="w-full bg-slate-50 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              다양한 글로벌 기업들이
              <br />
              머스트 특허법률사무소와 함께합니다
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              항상 신뢰받을 수 있는 파트너가 되도록 노력하겠습니다.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <LogoMarquee logos={CLIENT_LOGOS_ROW_1} speedSec={40} startOffset="0%" />
            <LogoMarquee logos={CLIENT_LOGOS_ROW_2} speedSec={75} startOffset="0%" />
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-kenburns {
          animation: kenburns 5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }

        @keyframes marquee {
          from { transform: translateX(var(--start, 0%)); }
          to { transform: translateX(calc(var(--start, 0%) - 50%)); }
        }
        .marquee-track {
          animation: marquee var(--duration, 24s) linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-kenburns { animation: none; }
          .marquee-track { animation: none !important; transform: none !important; }
        }
      `}</style>
    </main>
  );
}

function LogoMarquee({
  logos,
  speedSec,
  startOffset = "0%",
}: {
  logos: ClientLogo[];
  speedSec: number;
  startOffset?: string;
}) {
  const safe = logos.length >= 6 ? logos : [...logos, ...logos];

  const marqueeStyle: MarqueeStyle = {
    ["--duration"]: `${speedSec}s`,
    ["--start"]: startOffset,
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />

      <div className="marquee-track flex w-max items-center" style={marqueeStyle}>
        <LogoGroup logos={safe} />
        <LogoGroup logos={safe} ariaHidden />
      </div>
    </div>
  );
}

function LogoGroup({
  logos,
  ariaHidden = false,
}: {
  logos: ClientLogo[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="flex items-center gap-12 pr-12" aria-hidden={ariaHidden}>
      {logos.map((l, idx) => (
        <div key={`${l.src}-${idx}`} className="shrink-0 flex items-center justify-center">
          <div className="h-10 md:h-12 w-[140px] md:w-[170px] flex items-center justify-center">
            <img
              src={l.src}
              alt={l.alt}
              className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition"
              style={{ transform: `scale(${l.scale ?? 1})` }}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
