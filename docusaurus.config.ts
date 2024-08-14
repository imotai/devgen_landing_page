import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Devgen:The AI assistant for Github',
  tagline: 'Devgen is a Chrome extension that lets you chat with your Github repository side by side.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://devgen.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'getdevgen', // Usually your GitHub org/user name.
  projectName: 'devgen', // Usually your repo name.

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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Devgen',
      logo: {
        alt: 'Devgen Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/pricing', label: 'Pricing', position: 'left'},
        {
          type: 'docSidebar',
          position: 'left',
          label: 'Docs',
          sidebarId:'tutorialSidebar',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/getdevgen/devgen/discussions',
            },
            {
              label: 'Report Bug',
              href: 'https://github.com/getdevgen/devgen/issues/new?assignees=imotai&labels=bug&projects=&template=bug_report.md&title=bug%3A',
            },
            {
              label: 'Request Feature',
              href: 'https://github.com/getdevgen/devgen/issues/new?assignees=imotai&labels=enhancement&projects=&template=feature_request.md&title=feat%3A+',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dbpunk labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
