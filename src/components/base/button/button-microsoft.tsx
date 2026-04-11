import { Button } from './button'

interface Props {
  onClick: () => void
}

export const ButtonMicrosoft = ({ onClick }: Props) => {
  return (
    <Button
      className='w-full justify-center gap-3'
      color='gray'
      icon='logos:microsoft-icon'
      label='Continue with Microsoft'
      variant='outline'
      onClick={onClick}
    />
  )
}
