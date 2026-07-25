// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atlas Runtime Governance',
  tagline: '机器人运行时治理基础设施',
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
          label: '技术文档',
        },
        {
          href: 'https://sensordeck.tech',
          label: '官方网站',
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
          title: '文档导航',
          items: [
            {
              label: '基础理论',
              to: '/foundation/runtime-governance-philosophy',
            },
            {
              label: '产品体系',
              to: '/products/runtime-sensor-governance',
            },
            {
              label: '平台架构',
              to: '/platform/atlas-agent',
            },
            {
              label: '部署指南',
              to: '/deployment/oem-deployment',
            },
            {
              label: '参考资料',
              to: '/reference/faq',
            },
          ],
        },

        {
          title: '产品体系',
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
              label: '官方网站',
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
