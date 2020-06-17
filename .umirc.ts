import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'StaticScript',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  ssr: {},
  exportStatic: {},
});
