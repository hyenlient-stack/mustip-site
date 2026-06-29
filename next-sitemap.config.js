/** @type {import('next-sitemap').IConfig} */
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
const LOCALES = ['ko', 'en', 'ja', 'zh'];

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    ...LOCALES.map(l => `/${l}/insights`),
    ...['en', 'ja', 'zh'].flatMap(l => [`/${l}/self-trademark`, `/${l}/self-trademark/start`]),
  ],
  alternateRefs: [
    ...LOCALES.map(l => ({ href: `${SITE}/${l}`, hreflang: l })),
    { href: `${SITE}/en`, hreflang: 'x-default' },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    additionalSitemaps: [`${SITE}/sitemap.xml`],
  },
};
