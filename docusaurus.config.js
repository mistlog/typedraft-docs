module.exports = {
  title: 'TypeDraft',
  url: 'https://mistlog.github.io',
  baseUrl: '/typedraft-docs/',
  favicon: 'img/logo.png',
  organizationName: 'mistlog', // Usually your GitHub org/user name.
  projectName: 'typedraft-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    disableDarkMode: true,
    navbar: {
      title: 'TypeDraft',
      logo: {
        alt: 'TypeDraft',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/mistlog/typedraft',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TypeDraft, mistlog. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // routeBasePath: '/docs', // Set this value to '/'.
          homePageId: 'typedraft-in-5min',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mistlog/typedraft-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mistlog/typedraft-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
