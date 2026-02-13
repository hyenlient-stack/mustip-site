// app/[locale]/page.tsx
"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import clsx from "clsx";

type ClientLogo = { src: string; alt: string; scale?: number };

type MarqueeStyle = React.CSSProperties & {
  ["--duration"]?: string;
  ["--start"]?: string;
};

const HERO_IMAGES = [
  { src: "/hero/hero1.jpg", alt: "Hero image 1" },
  { src: "/hero/hero2.jpg", alt: "Hero image 2" },
  { src: "/hero/hero3.jpg", alt: "Hero image 3" },
];

const CLIENT_LOGOS_ROW_1 = [
  { src: "/clients/snu_logo.jpg", alt: "Seoul National University" },
  { src: "/clients/ku_logo.png", alt: "Korea University" },
  { src: "/clients/snuh_logo.png", alt: "Seoul National University Hospital" },
  { src: "/clients/samsung_logo.png", alt: "Samsung Hospital", scale: 1.2 },
  { src: "/clients/gist_logo.png", alt: "GIST" },
  { src: "/clients/seoulsi_logo.png", alt: "University of Seoul" },
  { src: "/clients/sogang_logo.png", alt: "Sogang University" },
  { src: "/clients/sch_logo.png", alt: "Soonchunhyang University" },
  { src: "/clients/transportation_logo.jpg", alt: "Korea National University of Transportation" },
  { src: "/clients/erica_logo.png", alt: "Hanyang University ERICA" },
  { src: "/clients/kista_logo.png", alt: "KISTA" },
  { src: "/clients/ipcare_logo.png", alt: "Korea IP Protection Agency" },
];

const CLIENT_LOGOS_ROW_2 = [
  { src: "/clients/toolgen_logo.png", alt: "ToolGen" },
  { src: "/clients/cellbion_logo.jpg", alt: "CellBion" },
  { src: "/clients/sg_bioscience_logo.png", alt: "SG Bioscience" },
  { src: "/clients/hysens_logo.png", alt: "HysensBio" },
  { src: "/clients/ibex_logo.png", alt: "Ibex Medical Systems", scale: 1.2 },
  { src: "/clients/medi_logo.png", alt: "Medi&Gene" },
  { src: "/clients/xnells.png", alt: "Xnells", scale: 1.4 },
  { src: "/clients/exhealthcare_logo.jpg", alt: "ExHealthcare", scale: 1.2 },
  { src: "/clients/green_mineral_logo.png", alt: "Green Mineral" },
  { src: "/clients/immunabs.png", alt: "ImmunAbs" },
  { src: "/clients/neuroxt_logo.png", alt: "NeuroXT" },
  { src: "/clients/farmi_logo.jpg", alt: "Farmi" },
  { src: "/clients/ohlab_logo.png", alt: "OhLab", scale: 1.4 },
  { src: "/clients/pb_logo.jpg", alt: "PB Immune Therapeutics" },
  { src: "/clients/pine_logo.png", alt: "Pine Digital Health", scale: 1.2 },
  { src: "/clients/targetlink_logo.jpg", alt: "TargetLink Therapeutics" },
  { src: "/clients/anu_logo.png", alt: "ANU", scale: 0.7 },
  { src: "/clients/bob_logo.png", alt: "BobJangin", scale: 1.2 },
];

export default function Home() {
  const t = useTranslations("home");
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
            {t("heroTitle")}
          </h1>

          <p className="mt-4 max-w-2xl text-sm md:text-lg text-white/90">
            {t("heroSubtitle1")}
            <br />
            {t("heroSubtitle2")}
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm md:text-base md:px-6 md:py-3 font-medium hover:bg-blue-700 transition"
            >
              {t("ctaConsult")}
            </Link>

            <button
              type="button"
              onClick={() => {
                document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex rounded-full border border-white/80 px-5 py-2.5 text-sm md:text-base md:px-6 md:py-3 font-medium hover:bg-white hover:text-black transition"
            >
              {t("ctaClients")}
            </button>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section id="clients" className="w-full bg-slate-50 py-12 md:py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              {t("clientsTitle1")}
              <br />
              {t("clientsTitle2")}
            </h2>
            <p className="mt-2 md:mt-3 text-xs md:text-base text-slate-600">
              {t("clientsSubtitle")}
            </p>
          </div>

          <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
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
    <div className="flex items-center gap-6 pr-6 md:gap-12 md:pr-12" aria-hidden={ariaHidden}>
      {logos.map((l, idx) => (
        <div key={`${l.src}-${idx}`} className="shrink-0 flex items-center justify-center">
          <div className="h-8 md:h-12 w-[100px] md:w-[170px] flex items-center justify-center">
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
