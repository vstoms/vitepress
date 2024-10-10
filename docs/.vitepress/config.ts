import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Azure Naming Conventions',
  description: 'Best practices for naming Azure resources',

  themeConfig: {
    logo: '/azure-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Naming Conventions', link: '/naming-conventions' },
      { text: 'Example', link: '/example' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Naming Conventions', link: '/naming-conventions' },
          { text: 'Example', link: '/example' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/your-repo' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Your Organization'
    }
  },
});