import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/design-system')({
  component: () => (
    <div className='container mx-auto p-6 pb-20'>
      <Outlet />
    </div>
  ),
})
