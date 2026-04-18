import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { AppLayout } from '@/layouts/app/app-layout'

export const Route = createFileRoute('/_app')({
  beforeLoad: ({ context: { isAuthenticated } }) => {
    if (!isAuthenticated()) {
      throw redirect({ replace: true, to: '/sign-in' })
    }
  },
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
})
