"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

type Tab = "email" | "kakao";

export default function ContactTabs() {
  const t = useTranslations("contact");
  const [activeTab, setActiveTab] = useState<Tab>("email");

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b">
        <button
          type="button"
          className={[
            "flex-1 md:flex-none px-4 md:px-5 py-3 text-sm font-medium transition-colors text-center",
            activeTab === "email"
              ? "border-b-2 border-slate-900 text-slate-900"
              : "text-slate-500 hover:text-slate-700",
          ].join(" ")}
          onClick={() => setActiveTab("email")}
        >
          {t("tabEmail")}
        </button>
        <button
          type="button"
          className={[
            "flex-1 md:flex-none px-4 md:px-5 py-3 text-sm font-medium transition-colors text-center",
            activeTab === "kakao"
              ? "border-b-2 border-slate-900 text-slate-900"
              : "text-slate-500 hover:text-slate-700",
          ].join(" ")}
          onClick={() => setActiveTab("kakao")}
        >
          {t("tabKakao")}
        </button>
      </div>

      {/* Tab content */}
      <div className="pt-6 md:pt-8">
        {activeTab === "email" ? <EmailTab /> : <KakaoTab />}
      </div>
    </div>
  );
}

function EmailTab() {
  const t = useTranslations("contact");

  return (
    <div className="grid gap-6 md:gap-10 md:grid-cols-2">
      {/* Left: Info */}
      <section className="order-2 md:order-1 space-y-4 md:space-y-5">
        <div className="rounded-2xl border bg-white p-4 md:p-5 shadow-sm">
          <div className="grid gap-3 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <div>
                <div className="font-medium text-slate-900">{t("phone")}</div>
                <div className="text-slate-600">02-526-6710</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <div className="font-medium text-slate-900">
                  {t("emailLabel")}
                </div>
                <div className="text-slate-600">mustip@mustip.co.kr</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div>
                <div className="font-medium text-slate-900">
                  {t("addressLabel")}
                </div>
                <div className="text-slate-600">{t("address")}</div>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="space-y-2 text-sm text-slate-600">
            <div className="font-medium text-slate-900">
              {t("quickTipsTitle")}
            </div>
            <ul className="list-disc space-y-1 pl-5">
              <li>{t("quickTip1")}</li>
              <li>{t("quickTip2")}</li>
              <li>{t("quickTip3")}</li>
              <li>{t("quickTip4")}</li>
            </ul>
          </div>
        </div>

        <p className="text-xs leading-5 text-slate-500">
          {t("autoReplyNote")}
        </p>
      </section>

      {/* Right: Form */}
      <section className="order-1 md:order-2 rounded-2xl border bg-white p-5 shadow-sm md:p-7">
        <h2 className="text-lg font-semibold text-slate-900">
          {t("formTitle")}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{t("formSubtitle")}</p>

        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function KakaoTab() {
  const t = useTranslations("contact");

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 md:p-8 text-center shadow-sm">
        {/* KakaoTalk icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEE500]">
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9"
            fill="#3C1E1E"
          >
            <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.724 1.8 5.113 4.508 6.459-.2.744-.723 2.694-.828 3.113-.13.52.19.512.4.373.164-.109 2.612-1.776 3.672-2.497.733.104 1.487.159 2.248.159 5.523 0 10-3.463 10-7.607C22 6.463 17.523 3 12 3Z" />
          </svg>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          {t("kakaoTitle")}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {t("kakaoDesc")}
        </p>

        <a
          href="https://pf.kakao.com/_SqJxon/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FEE500] px-6 py-3 text-sm font-semibold text-[#3C1E1E] transition-colors hover:bg-[#F5DC00]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#3C1E1E">
            <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.724 1.8 5.113 4.508 6.459-.2.744-.723 2.694-.828 3.113-.13.52.19.512.4.373.164-.109 2.612-1.776 3.672-2.497.733.104 1.487.159 2.248.159 5.523 0 10-3.463 10-7.607C22 6.463 17.523 3 12 3Z" />
          </svg>
          {t("kakaoButton")}
        </a>

        <div className="mt-6 space-y-1 text-xs text-slate-500">
          <p>{t("kakaoHours")}</p>
          <p>{t("kakaoNote")}</p>
        </div>
      </div>
    </div>
  );
}
