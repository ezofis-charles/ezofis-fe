import { Button } from '@/components/base/button'
import { QrCode } from '@/components/base/qr-code'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const QrCodeStory = () => {
  return (
    <>
      <Header title='QR Code' />

      <Section title='Default'>
        <QrCode className='size-40' value='https://ezofis.com/' />
      </Section>

      <Section title='With Download Trigger'>
        <QrCode
          className='size-40 space-y-4'
          value='https://ezofis.com/'
          downloadTrigger={
            <Button
              className='w-full justify-center'
              color='gray'
              icon='tabler:download'
              label='Download'
              variant='outline'
            />
          }
        />
      </Section>
    </>
  )
}
