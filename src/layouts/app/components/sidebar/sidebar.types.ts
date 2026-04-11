export type SidebarMode = 'desktop' | 'mobile' | 'tablet'
export type SidebarState = 'collapsed' | 'expanded'

export interface SidebarMenuGroup {
  items: SidebarMenuItem[]
  label: string
}

export interface SidebarMenuItem {
  activeIcon: string
  icon: string
  label: string
  route: string
}
