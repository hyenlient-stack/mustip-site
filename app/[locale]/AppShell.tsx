// app/[locale]/AppShell.tsx
"use client";

import type { ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";
import clsx from "clsx";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={clsx("min-h-[70dvh]", isHome ? "pt-0" : "pt-20")}>
      {children}
    </main>
  );
}
