// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MTRmod 知识中心',
  tagline: '由BC413运作的Minecraft Transit Railway知识中心',
  url: 'https://mtr.bc413.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BC413', // Usually your GitHub org/user name.
  projectName: 'mtr', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
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
      navbar: {
        title: 'MTRmod 知识中心',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/BC413/mtr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '法律信息',
            items: [
              {
                label: '使用条款',
                to: '/policies/tos',
              },
              {
                label: '免责声明',
                to: '/policies/privacy',
              },
              {
                label: '使用条款',
                to: '/policies/repost',
              },
              {
                label: '使用条款',
                to: '/policies/licenses',
              },
            ],
          },
          {
            title: '服务',
            items: [
              {
                label: '下载',
                to: '/download',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'BC413 分区',
                href: 'https://https://www.bc413.com/t/survival',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/bc413_com',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'BC413 主站',
                href: 'https://www.bc413.com',
              },
              {
                label: 'Starsource 星之源',
                href: 'https://www.starsource.cc',
              },
              {
                label: 'NiuBoss123',
                href: 'https://www.niuboss123.com',
              },
              {
                label: 'jonathan',
                href: 'https://jonathanqwq.github.io',
              },
            ],
          },
        ],
        copyright: `
        <p><small><br><br><br><br>
        Copyright © ${new Date().getFullYear()} MTRmod Knowledge Center, Inc. Built with Docusaurus.<br>
        本站与 Minecraft Transit Railway 和 MTRBBS 无任何关联。
        </small></p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
