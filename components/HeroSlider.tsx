"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";

const IMAGES = [
  { src: "/hero/hero1.jpg", alt: "hero 1" },
  { src: "/hero/hero2.jpg", alt: "hero 2" },
  { src: "/hero/hero3.jpg", alt: "hero 3" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      {IMAGES.map((img, i) => {
        const isActive = i === index;

        return (
          <div
            key={img.src}
            className={`${styles.slide} ${isActive ? styles.active : ""}`}
            aria-hidden={!isActive}
          >
            {/* key에 index를 섞어서 활성화될 때마다 줌 애니메이션이 다시 시작되게 함 */}
            <img
              key={`${img.src}-${index}`}
              className={styles.image}
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          머스트 특허법률사무소
          <br />
          지식재산으로 성장하는 기업의 파트너
        </h1>

        <p className={styles.subtitle}>
          특허·상표·디자인·분쟁·기술가치평가
          <br />
          비즈니스 성장을 위한 올인원 IP 서비스
        </p>

        <div className={styles.ctaRow}>
          <Link className={styles.ctaPrimary} href="/contact">
            상담 문의
          </Link>
          <Link className={styles.ctaSecondary} href="/practice-areas">
            업무분야 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
