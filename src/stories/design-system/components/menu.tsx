import { Button } from '@/components/base/button'
import { Menu } from '@/components/base/menu'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const MenuStory = () => {
  return (
    <>
      <Header title='Menu' />

      <Section title='Default'>
        <Menu
          position='bottom-start'
          targetClassName='inline-block'
          width={160}
          target={
            <Button
              color='gray'
              label='Menu'
              suffixIcon='tabler:chevron-down'
              suffixIconClassName='text-gray-9'
              variant='outline'
            />
          }
        >
          <Menu.Item icon='tabler:edit' label='Rename' />
          <Menu.Item icon='tabler:copy' label='Duplicate' />
          <Menu.Item icon='tabler:archive' label='Archive' />
          <Menu.Item icon='tabler:share' label='Share' />
        </Menu>
      </Section>

      <Section title='Menu Group'>
        <Menu
          position='bottom-start'
          targetClassName='inline-block'
          width={160}
          target={
            <Button
              color='gray'
              label='Menu'
              suffixIcon='tabler:chevron-down'
              suffixIconClassName='text-gray-9'
              variant='outline'
            />
          }
        >
          <Menu.Label>Security</Menu.Label>
          <Menu.Item icon='tabler:shield' label='Authentication' />
          <Menu.Item icon='tabler:lock' label='Sessions' />
          <Menu.Divider />
          <Menu.Label>Developers</Menu.Label>
          <Menu.Item icon='tabler:key' label='API Keys' />
          <Menu.Item icon='tabler:webhook' label='Webhooks' />
          <Menu.Item icon='tabler:help' label='Documentation' />
          <Menu.Divider />
          <Menu.Item
            icon='tabler:logout'
            iconClassName='text-red'
            label='Sign out'
          />
        </Menu>
      </Section>

      <Section title='Submenu'>
        <Menu
          position='bottom-start'
          targetClassName='inline-block'
          width={160}
          target={
            <Button
              color='gray'
              label='Menu'
              suffixIcon='tabler:chevron-down'
              suffixIconClassName='text-gray-9'
              variant='outline'
            />
          }
        >
          <Menu.Item icon='tabler:edit' label='Rename' />
          <Menu.Item icon='tabler:copy' label='Duplicate' />
          <Menu.Sub icon='tabler:triangle-square-circle' label='More'>
            <Menu.Item icon='tabler:archive' label='Archive' />
            <Menu.Item icon='tabler:share' label='Share' />
            <Menu.Item icon='tabler:heart' label='Favourites' />
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item
            icon='tabler:trash'
            iconClassName='text-red'
            label='Delete'
          />
        </Menu>
      </Section>
    </>
  )
}
