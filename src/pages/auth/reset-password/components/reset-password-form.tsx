import { Link } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { InputPassword } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { getFieldError } from '@/utils/form'
import useResetPasswordForm from '../hooks/use-reset-password-form'

export const ResetPasswordForm = () => {
  const { form, handleSubmit, resetPasswordMutation } = useResetPasswordForm()

  return (
    <AnimatePop
      description='At least 8 characters with uppercase, lowercase, a number, and a special character.'
      title='Reset your password'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <form.Field
          name='password'
          children={(field) => (
            <InputPassword
              error={getFieldError(field.state.meta.errors)}
              label='Password'
              placeholder='Enter your password'
              size='md'
              value={field.state.value}
              onChange={field.handleChange}
            />
          )}
        />

        <form.Field
          name='confirmPassword'
          children={(field) => (
            <InputPassword
              error={getFieldError(field.state.meta.errors)}
              label='Confirm password'
              placeholder='Re-enter your password'
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
                label='Reset password'
                loading={resetPasswordMutation.isPending}
                size='lg'
                type='submit'
              />
            )}
          />

          <Link
            className='block cursor-pointer text-center font-medium hover:underline'
            to='/sign-in'
          >
            Go to sign in
          </Link>

          {resetPasswordMutation.isError && (
            <div className='text-center text-red-11'>
              {resetPasswordMutation.error?.message}
            </div>
          )}
        </div>
      </form>
    </AnimatePop>
  )
}
