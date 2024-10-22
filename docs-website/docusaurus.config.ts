import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Quantum Docs',
  tagline: 'Documentation for all my projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://link250.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/QuantumDocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Link250', // Usually your GitHub org/user name.
  projectName: 'QuantumDocs', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'Quantum Docs',
      logo: {
        alt: 'Quantum Docs Logo',
        src: 'img/QuantumLogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: 'Discord',
          href: 'https://discord.gg/Va5VPev',
          position: 'right',
        },
        {
          label: 'Patreon',
          href: 'https://www.patreon.com/quantumlot',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Quantum Particles',
              to: '/docs/particles',
            },
            {
              label: 'Avatar Setup',
              to: '/docs/particles/setup-avatar',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/particles/troubleshooting',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Va5VPev',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/quantumlot',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@quantumlot',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/Link250',
            },
            {
              label: 'VRChat',
              href: 'https://vrchat.com/home/user/usr_d671d63b-5356-4e0d-94e2-0eea409d96ac',
            },
          ],
        },
        {
          title: 'Legal Notices',
          items: [
            {
              label: 'Terms of Service',
              to: '/legal/ToS',
            },
            {
              label: 'Imprint & Contact',
              href: '/legal/Imprint',
            },
            {
              label: 'DSGVO',
              href: '/legal/DSGVO',
            },
            {
              label: 'Credits',
              href: '/legal/Credits',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Baumgartner (Quantum), Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
