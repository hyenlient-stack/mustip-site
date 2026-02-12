// components/cta-contact.tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function CTAContact() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          {t("heading")}
        </h2>
        <p className="mt-3 text-base text-slate-600 md:text-lg">
          {t("description")}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
