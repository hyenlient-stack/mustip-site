// components/page-hero.tsx
export function PageHero({
  title,
  subtitle,
  backgroundImage,
}: {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative flex min-h-[140px] items-center justify-center overflow-hidden md:min-h-[220px]">
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 py-8 md:py-12 text-center text-white">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base text-white/85 md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
