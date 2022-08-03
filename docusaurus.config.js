// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GOTOMORROW',
  tagline: 'gotomorrow.dev',
  url: 'https://gotomorrow.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leibnizli', // Usually your GitHub org/user name.
  projectName: 'gotomorrow.dev', // Usually your repo name.
  //trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3JNLD1VEYD',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GOTOMORROW',
        logo: {
          alt: 'GOTOMORROW',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://gadgets.gotomorrow.dev', label: 'Gadgets', position: 'left'},
          {
            to: '/about',
            position: 'left',
            label: 'About',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/LeibnizLi',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/leibnizli',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: '中文博客',
                href: 'https://blog.gotomorrow.dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GOTOMORROW, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },
};

module.exports = config;
