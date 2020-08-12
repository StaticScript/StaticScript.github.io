import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'StaticScript',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  hash: true,
  headScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-89371431-6',
      async: true,
    },
    {
      content: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","UA-89371431-6");`,
    },
  ],
  navs: {
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/StaticScript/StaticScript',
      },
    ],
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/StaticScript/StaticScript',
      },
    ],
  },
  ssr: {
    devServerRender: false,
  },
  exportStatic: {},
});
