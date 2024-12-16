import { DefaultTheme, defineConfig } from 'vitepress'
import { createItemsWithPrefix } from './common'

const indexSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: 'sing-box',
    items: [
      { text: '开始', link: '/' },
      { text: '更新日志', link: '/changelog' },
      { text: '迁移指南', link: '/migration' },
      { text: '废弃功能列表', link: '/deprecated' },
      { text: '支持', link: '/support' },
      { text: '赞助', link: '/sponsors' },
    ]
  }
]

const installationSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: '安装',
    items: [
      { text: '包管理器', link: 'package-manager' },
      { text: 'Docker', link: 'docker' },
      { text: '从源码构建', link: 'build-from-source' },
    ]
  }
]

const clientsSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: '图形界面客户端',
    items: [
      { text: '开始', link: '/' },
      { text: 'Android', link: 'android',
        items: createItemsWithPrefix( 'android', [
          { text: '特性', link: 'features' }
        ] )
      },
      { text: 'Apple 平台', link: 'apple',
        items: createItemsWithPrefix( 'apple', [
          { text: '特性', link: 'features' }
        ] )
      },
      { text: '通用', link: 'general' },
      { text: '隐私政策', link: 'privacy' },
    ]
  }
]

const manualSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: '手册',
    items: [
      { text: '代理', link: '',
        items: createItemsWithPrefix( 'proxy', [
          { text: '服务端', link: 'server' },
          { text: '客户端', link: 'client' },
        ] )
      },
      { text: '代理协议', link: '',
        items: createItemsWithPrefix( 'proxy-protocol', [
          { text: 'Shadowsocks', link: 'shadowsocks' },
          { text: 'Trojan', link: 'trojan' },
          { text: 'Hysteria 2', link: 'hysteria2' },
        ] )
      },
      { text: '杂项', link: '',
        items: createItemsWithPrefix( 'misc', [
          { text: 'TunnelVision', link: 'tunnelvision' },
        ] )
      },
    ]
  }
]

const configurationSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: '配置',
    items: [
      { text: '引言', link: '/' },
      { text: '日志', link: 'log' },
      {
        text: '🆕DNS', link: 'dns',
        items: createItemsWithPrefix( 'dns', [
          { text: 'DNS 服务器', link: 'server' },
          { text: '🆕DNS 规则', link: 'rule' },
          { text: '🆕DNS 规则动作', link: 'rule_action' },
          { text: 'FakeIP', link: 'fakeip' },
        ] )
      },
      { text: 'NTP', link: 'ntp' },
      { text: '🆕路由', link: 'route',
        items: createItemsWithPrefix( 'route', [
          { text: '⌛Geosite', link: 'geosite' },
          { text: '⌛GeoIP', link: 'geoip' },
          { text: '🆕路由规则', link: 'rule' },
          { text: '🆕路由规则动作', link: 'rule_action' },
          { text: '🆕协议探测', link: 'sniff' },
        ] )
      },
      { text: '🆕规则集', link: 'rule-set',
        items: createItemsWithPrefix( 'rule-set', [
          { text: '🆕无头规则', link: 'headless-rule' },
          { text: '🆕源文件格式', link: 'source-format' },
          { text: '🆕Adguard DNS Filter', link: 'adguard' },
        ] )
      },
      {
        text: '实验性', link: 'experimental',
        items: createItemsWithPrefix( 'experimental', [
          { text: '缓存文件', link: 'cache-file' },
          { text: '🆕Clash API', link: 'clash-api' },
          { text: 'V2Ray API', link: 'v2ray-api' },
        ] )
      },
      { text: '通用', link: '',
        items: createItemsWithPrefix( 'shared', [
          { text: '⌛监听字段', link: 'listen' },
          { text: '🆕拨号字段', link: 'dial' },
          { text: '⚠️TLS', link: 'tls' },
          { text: 'DNS01 验证字段', link: 'dns01-challenge' },
          { text: '多路复用', link: 'multiplex' },
          { text: 'V2Ray 传输层', link: 'v2ray-transport' },
          { text: 'UDP over TCP', link: 'udp-over-tcp' },
          { text: 'TCP Brutal', link: 'tcp-brutal' },
        ] )
      },
      {
        text: '🆕端点', link: 'endpoint',
        items: createItemsWithPrefix( 'endpoint', [
          { text: '🆕WireGuard', link: 'wireguard' },
        ] )
      },
      { text: '入站', link: 'inbound',
        items: createItemsWithPrefix( 'inbound', [
          { text: 'Direct', link: 'direct' },
          { text: 'Mixed', link: 'mixed' },
          { text: 'SOCKS', link: 'socks' },
          { text: 'HTTP', link: 'http' },
          { text: 'Shadowsocks', link: 'shadowsocks' },
          { text: 'VMess', link: 'vmess' },
          { text: 'Trojan', link: 'trojan' },
          { text: 'Naïve', link: 'naive' },
          { text: 'Hysteria', link: 'hysteria' },
          { text: 'ShadowTLS', link: 'shadowtls' },
          { text: 'VLESS', link: 'vless' },
          { text: 'TUIC', link: 'tuic' },
          { text: '⚠️Hysteria2', link: 'hysteria2' },
          { text: '⚠️Tun', link: 'tun' },
          { text: 'Redirect', link: 'redirect' },
          { text: 'TProxy', link: 'tproxy' },
        ] )
      },
      { text: '出站', link: 'outbound',
        items: createItemsWithPrefix( 'outbound', [
          { text: '⚠️Direct', link: 'direct' },
          { text: '⌛Block', link: 'block' },
          { text: 'SOCKS', link: 'socks' },
          { text: 'HTTP', link: 'http' },
          { text: 'Shadowsocks', link: 'shadowsocks' },
          { text: 'VMess', link: 'vmess' },
          { text: 'Trojan', link: 'trojan' },
          { text: '⌛WireGuard', link: 'wireguard' },
          { text: 'Hysteria', link: 'hysteria' },
          { text: 'ShadowTLS', link: 'shadowtls' },
          { text: 'VLESS', link: 'vless' },
          { text: 'TUIC', link: 'tuic' },
          { text: 'Hysteria2', link: 'hysteria2' },
          { text: 'Tor', link: 'tor' },
          { text: 'SSH', link: 'ssh' },
          { text: '⌛DNS', link: 'dns' },
          { text: 'Selector', link: 'selector' },
          { text: 'URLTest', link: 'urltest' },
        ] )
      },
    ]
  }
]

export const zh = defineConfig({
  lang: 'zh-hans',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '安装', link: '/installation/package-manager' },
      { text: '图形界面客户端', link: '/clients' },
      { text: '手册', link: '/manual/proxy/server' },
      { text: '配置', link: '/configuration' },
    ],

    sidebarMenuLabel: '菜单',
    sidebar: {
      '/installation': { base: '/installation/', items: installationSideBar },
      '/clients': { base: '/clients/', items: clientsSideBar },
      '/manual': { base: '/manual/', items: manualSideBar },
      '/configuration': { base: '/configuration/', items: configurationSideBar },
      '/': indexSideBar,
    },

    footer: {
      copyright: `版权所有 © 2022 nekohasekai`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 'deep',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
  },
})

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        // @ts-ignore
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}