import { Button } from '../button'
import { OverlayFooterWrapper } from './overlay-footer-wrapper'

interface Props {
  cancelLabel?: string
  saveButtonColor?: 'primary' | 'red'
  saveLabel?: string
  onCancel?: () => void
  onSave?: () => void
}

export const OverlayFooter = ({
  cancelLabel = 'Cancel',
  saveButtonColor = 'primary',
  saveLabel = 'Save',
  onCancel,
  onSave,
}: Props) => {
  return (
    <OverlayFooterWrapper className='justify-end gap-2'>
      <Button
        color='gray'
        label={cancelLabel}
        variant='outline'
        onClick={onCancel}
      />
      <Button color={saveButtonColor} label={saveLabel} onClick={onSave} />
    </OverlayFooterWrapper>
  )
}
