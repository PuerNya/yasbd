import { defineConfig} from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { zh, search as zhSearch } from './zh'
import { en } from './en'

export default defineConfig({
  title: "Yet Another sing-box Doc",
  description: "Yet Another sing-box Doc",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'zh/:rest*': ':rest*'
  },

  head: [ [ 'link', { rel: 'icon', href: '/yasbd/icon.svg' } ] ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
    theme: {
      light: 'material-theme-lighter',
      dark: 'material-theme-darker'
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SagerNet/sing-box' }
    ],

    outline: {
      level: 'deep'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch,
        }
      }
    },
  },

  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en },
  },

  base: '/yasbd',

  ignoreDeadLinks: true,
})
