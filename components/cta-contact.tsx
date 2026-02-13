// components/cta-contact.tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function CTAContact() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
        <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-slate-900">
          {t("heading")}
        </h2>
        <p className="mt-2 md:mt-3 text-sm md:text-lg text-slate-600">
          {t("description")}
        </p>
        <Link
          href="/contact"
          className="mt-6 md:mt-8 inline-flex rounded-full bg-blue-600 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-white transition hover:bg-blue-700"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
