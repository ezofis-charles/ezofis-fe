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
          <Tabs.Tab label='Home' value='tab1' />
          <Tabs.Tab label='Users' value='tab2' />
          <Tabs.Tab label='Settings' value='tab3' />
        </Tabs>
      </Section>

      <Section title='Disabled'>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab label='Home' value='tab1' />
          <Tabs.Tab label='Users' value='tab2' disabled />
          <Tabs.Tab label='Settings' value='tab3' />
        </Tabs>
      </Section>

      <Section title='With Icon'>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Tab icon='tabler:dashboard' label='Home' value='tab1' />
          <Tabs.Tab icon='tabler:user' label='Users' value='tab2' />
          <Tabs.Tab icon='tabler:settings' label='Settings' value='tab3' />
        </Tabs>
      </Section>

      <Section title='No Padding'>
        <Tabs value={value} noPadding onChange={setValue}>
          <Tabs.Tab label='Home' value='tab1' />
          <Tabs.Tab label='Users' value='tab2' />
          <Tabs.Tab label='Settings' value='tab3' />
        </Tabs>
      </Section>

      <Section title='Primary'>
        <div className='space-y-4'>
          <Tabs value={value} onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>

          <Tabs value={value} variant='subtle' onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>

          <Tabs value={value} variant='solid' onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>
        </div>
      </Section>

      <Section title='Secondary'>
        <div className='space-y-4'>
          <Tabs color='secondary' value={value} onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>

          <Tabs
            color='secondary'
            value={value}
            variant='subtle'
            onChange={setValue}
          >
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>

          <Tabs
            color='secondary'
            value={value}
            variant='solid'
            onChange={setValue}
          >
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>
        </div>
      </Section>

      <Section title='Gray'>
        <div className='space-y-4'>
          <Tabs color='gray' value={value} onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>

          <Tabs color='gray' value={value} variant='subtle' onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>

          <Tabs color='gray' value={value} variant='solid' onChange={setValue}>
            <Tabs.Tab label='Home' value='tab1' />
            <Tabs.Tab label='Users' value='tab2' />
            <Tabs.Tab label='Settings' value='tab3' />
          </Tabs>
        </div>
      </Section>
    </>
  )
}
