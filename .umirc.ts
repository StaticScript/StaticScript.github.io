import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'StaticScript',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  hash: true,
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
  ssr: {},
  exportStatic: {},
});
