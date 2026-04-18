import { RouterProvider } from '@tanstack/react-router'
import { useSessionStore } from '@/stores/use-session-store'
import { router } from './router'

export function TanstackRouterProvider() {
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated)
  return <RouterProvider context={{ isAuthenticated }} router={router} />
}
