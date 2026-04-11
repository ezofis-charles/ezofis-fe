import { Menu as Root } from './menu'
import { MenuDivider } from './menu-divider'
import { MenuItem } from './menu-item'
import { MenuLabel } from './menu-label'
import { MenuSub } from './menu-sub'

type MenuType = typeof Root & {
  Divider: typeof MenuDivider
  Item: typeof MenuItem
  Label: typeof MenuLabel
  Sub: typeof MenuSub
}

export const Menu = Object.assign(Root, {
  Divider: MenuDivider,
  Item: MenuItem,
  Label: MenuLabel,
  Sub: MenuSub,
}) as MenuType
