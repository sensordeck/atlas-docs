// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

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
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Atlas',
        logo: {
          alt: 'Atlas Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs',
            label: 'Documentation',
            position: 'left',
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
            title: 'Documentation',
            items: [
              {label: 'Atlas Overview', to: '/docs'},
              {label: 'Hardware Architecture', to: '/docs/hardware-architecture'},
              {label: 'DSIL SDK', to: '/docs/dsil-sdk'},
              {label: 'ROS2 Integration', to: '/docs/ros2-integration'},
              {label: 'Sensor Synchronization', to: '/docs/sensor-synchronization'},
              {label: 'Evaluation Kit Setup', to: '/docs/evaluation-kit-setup'},
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
