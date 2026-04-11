import avatarImg from '@/assets/avatar.jpg'
import { Avatar } from '@/components/base/avatar'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const AvatarStory = () => {
  return (
    <>
      <Header title='Avatar' />

      <Section title='Default'>
        <Avatar initials='CH' />
      </Section>

      <Section title='Image'>
        <Avatar image={avatarImg} initials='CH' />
      </Section>
    </>
  )
}
