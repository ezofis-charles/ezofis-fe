import type { QrCodeDownloadTriggerProps } from '@ark-ui/react/qr-code'
import type { ReactNode } from 'react'
import { QrCode as Base } from '@ark-ui/react/qr-code'

interface Props {
  value: string
  className?: string
  downloadTrigger?: ReactNode
  fileName?: string
  mimeType?: QrCodeDownloadTriggerProps['mimeType']
}

export const QrCode = ({
  className,
  downloadTrigger,
  fileName = 'qr-code.png',
  mimeType = 'image/png',
  value,
}: Props) => {
  return (
    <Base.Root className={className} value={value}>
      <Base.Frame className='bg-white'>
        <Base.Pattern />
      </Base.Frame>

      <Base.DownloadTrigger fileName={fileName} mimeType={mimeType} asChild>
        {downloadTrigger}
      </Base.DownloadTrigger>
    </Base.Root>
  )
}
