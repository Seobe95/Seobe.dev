/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://seobe-dev.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/resume', '/tags', '/loading'],
      },
    ],
  },
}
