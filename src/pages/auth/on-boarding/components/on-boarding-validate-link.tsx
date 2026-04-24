import { useSearch } from '@tanstack/react-router'
import { useEffect } from 'react'
import { IconSpinner } from '@/components/base/icon'
import { InvalidLink } from '../../invalid-link'
import useValidateLinkMutation from '../hooks/use-validate-link-mutation'

export const OnBoardingValidateLink = () => {
  const { authMethod, token } = useSearch({ from: '/_auth/on-boarding' })
  const { isError, isPending, mutate } = useValidateLinkMutation()

  useEffect(() => mutate({ authMethod, token }), [mutate, token, authMethod])

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
