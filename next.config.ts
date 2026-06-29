import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale(ko|en|ja|zh)/insights",
        destination: "/:locale/about",
        permanent: true,
      },
      {
        source: "/:locale(en|ja|zh)/self-trademark/:path*",
        destination: "/:locale/filing-in-korea",
        permanent: true,
      },
      {
        source: "/ko/filing-in-korea/:path*",
        destination: "/ko/self-trademark",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
