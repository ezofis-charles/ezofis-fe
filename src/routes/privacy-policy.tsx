import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: () => (
    <div className='p-8'>
      <h1 className='mb-4 text-3xl font-bold'>Privacy Policy</h1>
      <p>This is a placeholder for the Privacy Policy page.</p>
    </div>
  ),
})
