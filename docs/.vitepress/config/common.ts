import { DefaultTheme } from 'vitepress'

export const createItemsWithPrefix = <T extends DefaultTheme.SidebarItem | DefaultTheme.NavItemWithLink>(prefix: string, items: T[]): T[] => {
  for ( const item of items ) {
    switch (item.link) {
      case '': continue
      case '/': {
        item.link = prefix
        break
      }
      default: item.link = `${prefix}${item.link}`
    }
  }
  return items
}

export const sidebarWithPrefix = (prefix: string, rawSidebar: DefaultTheme.SidebarMulti): DefaultTheme.SidebarMulti => {
  if ( prefix === '' ) return rawSidebar
  const sidebar: DefaultTheme.SidebarMulti = {}
  for ( const key of Object.keys( rawSidebar ) ) {
    if ( Array.isArray( rawSidebar[ key ] ) ) continue
    if ( rawSidebar[ key ].base && rawSidebar[ key ].base !== '' ) rawSidebar[ key ].base = `${prefix}${rawSidebar[ key ].base}`
    sidebar[ `${prefix}${key}` ] = rawSidebar[ key ]
  }
  return sidebar 
}