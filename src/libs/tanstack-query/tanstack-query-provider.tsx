import type { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { tanstackQueryClient } from './tanstack-query-client'

interface Props {
  children: ReactNode
}

export const TanstackQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={tanstackQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
