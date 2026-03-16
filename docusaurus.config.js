// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Documentation',
  tagline: 'Deterministic Sensor Infrastructure for Robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.sensordeck.tech',
  baseUrl: '/',

  organizationName: 'sensordeck',
  projectName: 'atlas-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
  sidebarPath: require.resolve('./sidebars.js'),
  routeBasePath: '/',
              },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/SensorDeck.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Atlas',
        logo: {
          alt: 'Atlas Logo',
          src: 'img/SensorDeck.png',
        },
              },
       {
            type: 'search',
            position: 'right',
          },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Atlas Overview', to: '/' },
              { label: 'Hardware Architecture', to: '/hardware-architecture' },
              { label: 'DSIL SDK', to: '/dsil-sdk' },
              { label: 'ROS2 Integration', to: '/ros2-integration' },
              { label: 'Sensor Synchronization', to: '/sensor-synchronization' },
              { label: 'Evaluation Kit Setup', to: '/evaluation-kit-setup' },
              { label: 'OEM Integration Pilot Program', to: '/oem-integration-pilot-program' },
              { label: 'Downloads', to: '/downloads' },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sensordeck/atlas-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SensorDeck Inc.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
