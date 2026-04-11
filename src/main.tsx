import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from '@/components/base/toast/toaster'
import { TanstackQueryProvider } from '@/libs/tanstack-query'
import { TanstackRouterProvider } from '@/libs/tanstack-router'
import { LingUiProvider } from './libs/lingui/ling-ui-provider'
import './styles/index.css'
import { MantineProvider } from './libs/mantine/mantine-provider'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <LingUiProvider>
      <Toaster />
      <MantineProvider>
        <TanstackQueryProvider>
          <TanstackRouterProvider />
        </TanstackQueryProvider>
      </MantineProvider>
    </LingUiProvider>
  </StrictMode>,
)
