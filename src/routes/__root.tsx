import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import TanStackQueryDevtools from '@/lib/tanstack-query/Devtools'
import { NotFoundPage } from '@/pages/not-found-page'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  notFoundComponent: NotFoundPage,
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools />
      <TanStackQueryDevtools /> */}
    </>
  ),
})
