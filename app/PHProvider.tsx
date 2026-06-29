"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const _posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
if (typeof window !== "undefined" && _posthogKey) {
  posthog.init(_posthogKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    person_profiles: "always",
    request_batching: process.env.NODE_ENV === "production",
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") ph.debug();
    },
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
