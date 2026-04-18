import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { AuthLayout } from '@/layouts/auth/auth-layout'

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context: { isAuthenticated } }) => {
    if (isAuthenticated()) {
      throw redirect({ to: '/' })
    }
  },
  component: () => (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ),
})
