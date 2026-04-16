import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-of-service')({
  component: () => (
    <div className='p-8'>
      <h1 className='mb-4 text-3xl font-bold'>Terms of Service</h1>
      <p>This is a placeholder for the Terms of Service page.</p>
    </div>
  ),
})
