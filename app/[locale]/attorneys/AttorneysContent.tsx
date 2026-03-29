// app/[locale]/attorneys/AttorneysContent.tsx
"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export function AttorneysContent() {
  const t = useTranslations("attorneys");
  const allRefs = useRef<(HTMLDivElement | null)[]>([]);

  const FEATURED = [
    {
      name: t("featured1Name"),
      roles: [t("featured1Role")],
      photo: "/attorneys/kya.jpg",
      specialties: [
        t("featured1Specialty1"),
        t("featured1Specialty2"),
        t("featured1Specialty3"),
        t("featured1Specialty4"),
      ],
      education: [t("featured1Edu1"), t("featured1Edu2")],
      career: [
        t("featured1Career1"),
        t("featured1Career2"),
        t("featured1Career3"),
        t("featured1Career4"),
        t("featured1Career5"),
        t("featured1Career6"),
        t("featured1Career7"),
      ],
    },
    {
      name: t("featured2Name"),
      roles: [t("featured2Role"), t("featured2Role2")],
      photo: "/attorneys/%EA%B3%B5%EB%8C%80%EC%9A%B0.jpg",
      specialties: [
        t("featured2Specialty1"),
        t("featured2Specialty2"),
        t("featured2Specialty3"),
        t("featured2Specialty4"),
      ],
      education: [t("featured2Edu1")],
      career: [
        t("featured2Career1"),
        t("featured2Career2"),
        t("featured2Career3"),
        t("featured2Career4"),
        t("featured2Career5"),
      ],
    },
    {
      name: t("featured3Name"),
      roles: [t("featured3Role"), t("featured3Role2")],
      photo: "/attorneys/%EC%9C%A0%EB%8F%99%EA%B2%BD.jpg",
      specialties: [
        t("featured3Specialty1"),
        t("featured3Specialty2"),
        t("featured3Specialty3"),
        t("featured3Specialty4"),
      ],
      education: [t("featured3Edu1"), t("featured3Edu2")],
      career: [
        t("featured3Career1"),
        t("featured3Career2"),
        t("featured3Career3"),
        t("featured3Career4"),
        t("featured3Career5"),
        t("featured3Career6"),
      ],
    },
    {
      name: t("featured4Name"),
      roles: [t("featured4Role")],
      photo: "/attorneys/%EC%9E%84%EC%98%81%EB%9E%80.jpg",
      specialties: [
        t("featured4Specialty1"),
        t("featured4Specialty2"),
        t("featured4Specialty3"),
        t("featured4Specialty4"),
      ],
      education: [t("featured4Edu1"), t("featured4Edu2")],
      career: [
        t("featured4Career1"),
        t("featured4Career2"),
        t("featured4Career3"),
      ],
    },
    {
      name: t("featured5Name"),
      roles: [t("featured5Role")],
      photo: "/attorneys/%EC%9D%B4%ED%95%9C%EC%9A%B8.jpg",
      specialties: [
        t("featured5Specialty1"),
        t("featured5Specialty2"),
        t("featured5Specialty3"),
      ],
      education: [t("featured5Edu1")],
      career: [
        t("featured5Career1"),
        t("featured5Career2"),
        t("featured5Career3"),
        t("featured5Career4"),
      ],
    },
    {
      name: t("featured6Name"),
      roles: [t("featured6Role")],
      photo: "/attorneys/%EA%B3%B5%EB%8C%80%ED%98%B8.jpg",
      specialties: [
        t("featured6Specialty1"),
        t("featured6Specialty2"),
        t("featured6Specialty3"),
      ],
      education: [t("featured6Edu1")],
      career: [
        t("featured6Career1"),
        t("featured6Career2"),
        t("featured6Career3"),
      ],
    },
    {
      name: t("featured7Name"),
      roles: [t("featured7Role")],
      photo: "/attorneys/%ED%95%9C%EC%83%81%EC%9D%80.jpg",
      specialties: [
        t("featured7Specialty1"),
        t("featured7Specialty2"),
        t("featured7Specialty3"),
      ],
      education: [t("featured7Edu1")],
      career: [
        t("featured7Career1"),
        t("featured7Career2"),
        t("featured7Career3"),
        t("featured7Career4"),
        t("featured7Career5"),
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    allRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  let refIdx = 0;

  return (
    <section className="py-10 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            {t("sectionTitle")}
          </h2>
        </div>

        {/* Featured Cards */}
        {FEATURED.map((person) => (
          <div
            key={person.name}
            ref={(el) => { allRefs.current[refIdx++] = el; }}
            className="mt-8 md:mt-14 flex flex-col items-center gap-5 md:gap-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-10 shadow-sm opacity-0 translate-y-8 transition-all duration-700 md:flex-row md:gap-12"
          >
            <div className="h-48 w-36 shrink-0 overflow-hidden rounded-2xl bg-slate-100 md:h-72 md:w-56">
              <img
                src={person.photo}
                alt={`${person.name} ${person.roles.join(" ")}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 text-center md:text-left">
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {person.roles.map((r) => (
                  <span key={r} className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {r}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                {person.name}
              </h3>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {person.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4 md:mt-6 grid gap-6 md:gap-10 text-sm text-slate-600 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-slate-900">{t("education")}</h4>
                  <ul className="mt-2 space-y-1">
                    {person.education.map((e) => (
                      <li key={e} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t("career")}</h4>
                  <ul className="mt-2 space-y-1">
                    {person.career.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
