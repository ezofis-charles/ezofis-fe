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
        'max-h-dvh min-h-dvh overflow-hidden transition-all duration-150 ease-out xl:py-1 xl:pr-1',
        sidebarState === 'collapsed' ? 'xl:ml-12' : 'xl:ml-60',
      )}
    >
      <div className='overflow-hidden bg-surface xl:rounded-xl xl:border xl:border-gray-3'>
        <Topbar />
        <div
          className='scrollbar overflow-y-auto'
          style={{ height: 'calc(100dvh - 56px)' }}
        >
          {children}
        </div>
      </div>
    </main>
  )
}
