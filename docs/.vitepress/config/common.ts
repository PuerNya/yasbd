import { DefaultTheme } from 'vitepress'

export const createItemsWithPrefix = <T extends DefaultTheme.SidebarItem | DefaultTheme.NavItemWithLink>(prefix: string, items: T[]) => {
  while ( prefix.endsWith( '/' ) ) prefix = prefix.slice( 0, -1 )
  for ( const item of items ) {
    switch (item.link) {
      case '': continue
      case '/': {
        item.link = prefix
        break
      }
      default: item.link = `${prefix}/${item.link}`
    }
  }
  return items
}