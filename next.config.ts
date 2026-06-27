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
    ];
  },
};

export default withNextIntl(nextConfig);
