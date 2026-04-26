import { useEffect } from 'react'
import { IconSpinner } from '@/components/base/icon'
import { InvalidLink } from '../../invalid-link'
import useValidateLinkMutation from '../hooks/use-validate-link-mutation'

export const OnBoardingValidateLink = () => {
  const { isError, isPending, mutate } = useValidateLinkMutation()
  useEffect(() => mutate(), [mutate])

  return (
    <>
      {isPending && (
        <div className='flex h-20 items-center justify-center'>
          <IconSpinner />
        </div>
      )}

      {isError && <InvalidLink />}
    </>
  )
}
