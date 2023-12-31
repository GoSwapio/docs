// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GoSwap.io',
  tagline: 'GoSwap - Crypto Made Easy',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.goswap.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'goswapio', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GoSwap.io',
        logo: {
          alt: 'GoSwap Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Litepaper',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'X',
                to: 'https://x.com/goswapio',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'GoSwap-v1-contracts',
                href: '#',
              },
              {
                label: 'GoSwap-v1-interface',
                href: '#',
              },
              {
                label: 'GoSwap-v1-docs',
                href: '#',
              },
              {
                label: 'Deployment Addresses',
                href: '#',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Home',
                to: 'https://goswap.io',
              },
              {
                label: 'App',
                href: 'https://app.goswap.io',
              },
              {
                label: 'Farming',
                href: 'https://app.goswap.io/farming',
              },
              {
                label: 'Staking',
                href: 'https://app.goswap.io/staking',
              },
              {
                label: 'Blueprint',
                href: 'https://goswap.io/blueprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GoSwap.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
