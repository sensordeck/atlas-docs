// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Runtime Governance',
  tagline: 'Runtime Governance Infrastructure for Robotics',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.sensordeck.tech',
  baseUrl: '/',

  organizationName: 'sensordeck',
  projectName: 'atlas-docs',

  trailingSlash: false,

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/sensordeck/atlas-docs/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/SensorDeck.png',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Atlas Runtime Governance',

      logo: {
        alt: 'SensorDeck',
        src: 'img/SensorDeck.png',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://sensordeck.tech',
          label: 'SensorDeck.tech',
          position: 'right',
        },
        {
          href: 'https://github.com/sensordeck/atlas-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Foundation',
              to: '/foundation/runtime-governance-philosophy',
            },
            {
              label: 'Product Portfolio',
              to: '/products/runtime-sensor-governance',
            },
            {
              label: 'Platform',
              to: '/platform/atlas-agent',
            },
            {
              label: 'Deployment',
              to: '/deployment/oem-deployment',
            },
            {
              label: 'Resource',
              to: '/reference/faq',
            },
          ],
        },

        {
          title: 'Product Portfolio',
          items: [
            {
              label: 'Runtime Sensor Governance™',
              to: '/products/runtime-sensor-governance',
            },
            {
              label: 'Runtime Investigation™',
              to: '/products/runtime-investigation',
            },
          ],
        },

        {
          title: 'SensorDeck',
          items: [
            {
              label: 'SensorDeck.tech',
              href: 'https://sensordeck.tech',
            },
            {
              label: 'Atlas 中文文档',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sensordeck',
            },
          ],
        },
      ],

      copyright: `© ${new Date().getFullYear()} SensorDeck Inc. All Rights Reserved.`,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
