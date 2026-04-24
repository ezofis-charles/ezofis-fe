import { Button } from './button'

interface Props {
  onClick: () => void
}

export const ButtonGoogle = ({ onClick }: Props) => {
  return (
    <Button
      className='w-full justify-center gap-3'
      color='gray'
      icon='logos:google-icon'
      label='Continue with Google'
      size='lg'
      variant='outline'
      onClick={onClick}
    />
  )
}
