// components/section.tsx
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">{title}</h2>
      {children}
    </section>
  )
}
