import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

export function TanstackRouterProvider() {
  return <RouterProvider router={router} />
}
