import type { ReactNode } from 'react'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'
import { Topbar } from '../topbar'

interface Props {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)

  return (
    <main
      className={cn(
        'border-l border-gray-3 transition-[margin-left] xl:min-h-svh',
        sidebarState === 'collapsed' ? 'xl:ml-12' : 'xl:ml-60',
      )}
    >
      <Topbar />
      {children}
    </main>
  )
}
