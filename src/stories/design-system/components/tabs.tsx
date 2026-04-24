import { useState } from 'react'
import { Tabs } from '@/components/base/tabs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const TabsStory = () => {
  const [value, setValue] = useState<null | string>('tab1')

  return (
    <>
      <Header title='Tabs' />

      <Section title='Default'>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab label='Inbox' value='tab1' />
          <Tabs.Tab label='Sent' value='tab2' />
          <Tabs.Tab label='Closed' value='tab3' />
        </Tabs>
      </Section>

      <Section title='Disabled'>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab label='Inbox' value='tab1' />
          <Tabs.Tab label='Sent' value='tab2' disabled />
          <Tabs.Tab label='Closed' value='tab3' />
        </Tabs>
      </Section>

      <Section title='With Icon'>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab icon='tabler:message-2' label='Inbox' value='tab1' />
          <Tabs.Tab icon='tabler:message-2-share' label='Sent' value='tab2' />
          <Tabs.Tab icon='tabler:message-2-check' label='Closed' value='tab3' />
        </Tabs>
      </Section>

      <Section title='With Badge'>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab badgeLabel='10' label='Inbox' value='tab1' />
          <Tabs.Tab badgeLabel='5' label='Sent' value='tab2' />
          <Tabs.Tab badgeLabel='0' label='Closed' value='tab3' />
        </Tabs>
      </Section>

      <Section title='No Padding'>
        <Tabs value={value} noPadding onChange={setValue}>
          <Tabs.Tab label='Inbox' value='tab1' />
          <Tabs.Tab label='Sent' value='tab2' />
          <Tabs.Tab label='Closed' value='tab3' />
        </Tabs>
      </Section>

      <Section title='Colors'>
        <div className='space-y-4'>
          <Tabs value={value} onChange={setValue}>
            <Tabs.Tab label='Inbox' value='tab1' />
            <Tabs.Tab label='Sent' value='tab2' />
            <Tabs.Tab label='Closed' value='tab3' />
          </Tabs>

          <Tabs color='secondary' value={value} onChange={setValue}>
            <Tabs.Tab label='Inbox' value='tab1' />
            <Tabs.Tab label='Sent' value='tab2' />
            <Tabs.Tab label='Closed' value='tab3' />
          </Tabs>

          <Tabs color='gray' value={value} onChange={setValue}>
            <Tabs.Tab label='Inbox' value='tab1' />
            <Tabs.Tab label='Sent' value='tab2' />
            <Tabs.Tab label='Closed' value='tab3' />
          </Tabs>
        </div>
      </Section>
    </>
  )
}
