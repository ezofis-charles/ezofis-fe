import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AppLayout } from '@/layouts/app/app-layout'

export const Route = createFileRoute('/_app')({
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
})
