import { DefaultTheme, defineConfig } from "vitepress"
import { createItemsWithPrefix } from "./common"

const startSideBar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Start',
    items: [
      { text: 'License', link: 'license' },
      { text: 'Changelog', link: 'changelog' },
      { text: 'Migration', link: 'migration' },
      { text: 'Deprecated', link: 'deprecated' },
      { text: 'Support', link: 'support' },
      { text: 'Sponsors', link: 'sponsors' },
    ]
  }
]

const installationSideBar: DefaultTheme.SidebarItem[] =  [
  {
    text: 'Installation',
    items: [
      { text: 'Package Manager', link: 'package-manager' },
      { text: 'Docker', link: 'docker' },
      { text: 'Build from source', link: 'build-from-source' },
    ]
  }
]

const clientsSideBar: DefaultTheme.SidebarItem[] =  [
  {
    text: 'Graphical Clients',
    items: [
      { text: 'Start', link: '/' },
      { text: 'Android', link: 'android',
        items: createItemsWithPrefix( 'android', [
          { text: 'Features', link: 'features' }
        ] )
      },
      { text: 'Apple platforms', link: 'apple',
        items: createItemsWithPrefix( 'apple', [
          { text: 'Features', link: 'features' }
        ] )
      },
      { text: 'General', link: 'general' },
      { text: 'Privacy', link: 'privacy' },
    ]
  }
]

const manualSideBar: DefaultTheme.SidebarItem[] =  [
  {
    text: 'Manual',
    items: [
      { text: 'Proxy', link: '',
        items: createItemsWithPrefix( 'proxy', [
          { text: 'Server', link: 'server' },
          { text: 'Client', link: 'client' },
        ] )
      },
      { text: 'Proxy Protocol', link: '',
        items: createItemsWithPrefix( 'proxy-protocol', [
          { text: 'Shadowsocks', link: 'shadowsocks' },
          { text: 'Trojan', link: 'trojan' },
          { text: 'Hysteria 2', link: 'hysteria2' },
        ] )
      },
      { text: 'Misc', link: '',
        items: createItemsWithPrefix( 'misc', [
          { text: 'TunnelVision', link: 'tunnelvision' },
        ])
      },
    ]
  }
]

const configurationSideBar: DefaultTheme.SidebarItem[] =  [
  {
    text: 'Configuration',
    items: [
      { text: 'Introduction', link: '/',},
      { text: 'Log', link: 'log',},
      { text: 'NTP', link: 'ntp',},
    ]
  }
]

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: createItemsWithPrefix( 'en', [
      { text: 'Home', link: '/' },
      { text: 'Start', link: 'start/license' },
      { text: 'Installation', link: 'installation/package-manager' },
      { text: 'Graphical Clients', link: 'clients' },
      { text: 'Manual', link: 'manual/proxy/server' },
      { text: 'Configuration', link: 'configuration' },
    ] ),

    footer: {
      copyright: `Copyright © 2022 nekohasekai`
    },

    sidebar: {
      '/en/start': { base: '/en/start/', items: startSideBar },
      '/en/installation': { base: '/en/installation/', items: installationSideBar },
      '/en/clients': { base: '/en/clients/', items: clientsSideBar },
      '/en/manual': { base: '/en/manual/', items: manualSideBar },
      '/en/configuration': { base: '/en/configuration/', items: configurationSideBar },
    }
  },
})