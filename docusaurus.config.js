// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bags Shield',
  tagline: 'Solana Intelligence Layer',
  favicon: 'img/favicon.ico',
  url: 'https://bags-shield.pages.dev',
  baseUrl: '/',
  organizationName: 'Prestes16',
  projectName: 'bags-shield-site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // APONTA PARA O REPO CORRETO AGORA:
          editUrl: 'https://github.com/Prestes16/bags-shield-site/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: 'dark', disableSwitch: true },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bags Shield',
        logo: { alt: 'Bags Shield Logo', src: 'img/logo.svg' }, // Certifique-se que o logo existe ou use um padrão
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
          { href: 'https://app.bagsshield.org', label: 'Launch App', position: 'right', className: 'button button--primary' },
          { href: 'https://github.com/Prestes16/bags-shield-api', label: 'GitHub', position: 'right' },
        ],
      },
      footer: { style: 'dark', copyright: `Copyright © ${new Date().getFullYear()} Bags Shield. Built for Solana.` },
      prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    }),
};

module.exports = config;