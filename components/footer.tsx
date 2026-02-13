import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10 text-sm text-slate-600">
        {/* 상단 영역 */}
        <div className="space-y-4">
          {/* 로고 + 로펌명 */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-footer.png"
              alt={t("firmName")}
              width={48}
              height={48}
              className="h-10 w-auto"
            />
            <span className="text-base font-semibold text-slate-900">
              {t("firmName")}
            </span>
          </div>

          {/* 주소 */}
          <p>
            {t("address")} <br />
            {t("representative")}
          </p>

          {/* 연락처 */}
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>{t("tel")}</span>
            <span>
              {t("emailLabel")}{" "}
              <a
                href={`mailto:${t("email")}`}
                className="underline hover:text-slate-900"
              >
                {t("email")}
              </a>
            </span>
          </p>
        </div>

        {/* 구분선 */}
        <div className="my-8 border-t border-slate-200" />

        {/* 하단 저작권 */}
        <p className="text-xs text-slate-500">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
