import { Link } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { InputText } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { getFieldError } from '@/utils/form'
import useForgotPasswordForm from '../hooks/use-forgot-password-form'
import { useForgotPasswordStore } from '../stores/use-forgot-password-store'

export const ForgotPasswordForm = () => {
  const { forgotPasswordMutation, form, handleSubmit } = useForgotPasswordForm()
  const isInitialRender = useForgotPasswordStore(
    (state) => state.isInitialRender,
  )

  return (
    <AnimatePop className='space-y-6' disableInitialAnimation={isInitialRender}>
      <Title
        className='text-center'
        description="Enter your email address and we'll send you a link to reset it."
        level={1}
        title='Forgot your password?'
      />

      <form className='space-y-6' onSubmit={handleSubmit}>
        <form.Field
          name='email'
          children={(field) => (
            <InputText
              error={getFieldError(field.state.meta.errors)}
              label='Email'
              placeholder='Enter your email'
              size='md'
              value={field.state.value}
              onChange={field.handleChange}
            />
          )}
        />

        <div className='space-y-4'>
          <form.Subscribe
            selector={(state) => [state.canSubmit]}
            children={([canSubmit]) => (
              <Button
                className='w-full justify-center'
                disabled={!canSubmit}
                label='Send reset link'
                loading={forgotPasswordMutation.isPending}
                size='lg'
                type='submit'
              />
            )}
          />

          <Link
            className='block cursor-pointer text-center hover:underline'
            to='/sign-in'
          >
            Go to sign in
          </Link>

          {forgotPasswordMutation.isError && (
            <div className='text-center text-red'>
              {forgotPasswordMutation.error?.message}
            </div>
          )}
        </div>
      </form>
    </AnimatePop>
  )
}
