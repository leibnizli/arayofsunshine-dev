// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARAYOFSUNSHINE',
  tagline: 'arayofsunshine.dev',
  url: 'https://arayofsunshine.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leibnizli', // Usually your GitHub org/user name.
  projectName: 'arayofsunshine.dev', // Usually your repo name.
  trailingSlash: false,
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
        title: 'ARAYOFSUNSHINE',
        logo: {
          alt: 'ARAYOFSUNSHINE',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://gadgets.arayofsunshine.dev', label: 'Gadgets', position: 'left'},
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
                label: 'Chinese Blog',
                href: 'https://blog.arayofsunshine.dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ARAYOFSUNSHINE, Inc.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'NFQZ57GD3E',
      //   // Public API key: it is safe to commit it
      //   apiKey: '3c9fa32cea9b82182932bdd55c3913af',
      //   indexName: 'arayofsunshine',
      // },
    }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon-32x32.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/apple-touch-icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/mstile-150x150.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
