/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourdomain.com', // 실제 배포 도메인으로 교체
  generateRobotsTxt: true,           // robots.txt 자동 생성
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
}
