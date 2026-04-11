import { Overlay as Root } from './overlay'
import { OverlayContent } from './overlay-content'
import { OverlayFooter } from './overlay-footer'
import { OverlayFooterWrapper } from './overlay-footer-wrapper'
import { OverlayHeader } from './overlay-header'
import { OverlayHeaderWrapper } from './overlay-header-wrapper'

type OverlayType = typeof Root & {
  Content: typeof OverlayContent
  Footer: typeof OverlayFooter
  FooterWrapper: typeof OverlayFooterWrapper
  Header: typeof OverlayHeader
  HeaderWrapper: typeof OverlayHeaderWrapper
}

export const Overlay = Object.assign(Root, {
  Content: OverlayContent,
  Footer: OverlayFooter,
  FooterWrapper: OverlayFooterWrapper,
  Header: OverlayHeader,
  HeaderWrapper: OverlayHeaderWrapper,
}) as OverlayType
