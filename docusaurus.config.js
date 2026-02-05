// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bags Shield',
  tagline: 'Security & Analytics for Solana Tokens',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bags-shield.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'bags-shield',
  projectName: 'bags-shield-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
        editUrl: 'https://github.com/Prestes16/bags-shield-site/edit/main/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/bags-shield/bags-shield-site/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/bags-shield-social-card.jpg',
      navbar: {
        title: 'Bags Shield',
        logo: {
          alt: 'Bags Shield Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://app.bags-shield.com',
            label: 'App',
            position: 'right',
          },
          {
            href: 'https://github.com/bags-shield',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API',
                to: '/docs/api/overview',
              },
              {
                label: 'Security',
                to: '/docs/security/overview',
              },
              {
                label: 'Fees & Rewards',
                to: '/docs/fees-and-rewards/overview',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms',
                to: '/docs/legal/terms',
              },
              {
                label: 'Privacy',
                to: '/docs/legal/privacy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'App',
                href: 'https://app.bags-shield.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bags-shield',
              },
            ],
          },
        ],
        copyright: `Copyright Ã‚Â© ${new Date().getFullYear()} Bags Shield. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),

  customFields: {
    // <<< COLE AQUI a URL REAL do health >>>
    // Exemplo temporÃƒÂ¡rio:
    // healthUrl: "https://bags-shield-api.vercel.app/api/health",
    healthUrl: 'COLE_A_URL_DA_SUA_API_AQUI',

    // <<< URL do app web (subdomÃƒÂ­nio futuro) >>>
    appUrl: 'https://app.bagsshield.org',
  },
};

module.exports = config;
