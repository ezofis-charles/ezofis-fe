import '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    pageTitle?: string
  }
  interface Register {
    router: typeof router
  }
}
