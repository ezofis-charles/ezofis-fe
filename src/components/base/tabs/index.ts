import { Tab } from './tab'
import { Tabs as Root } from './tabs'

type TabsType = typeof Root & {
  Tab: typeof Tab
}

export const Tabs = Object.assign(Root, {
  Tab: Tab,
}) as TabsType
