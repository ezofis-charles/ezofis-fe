import { Button } from '@/components/base/button'
import { InputPassword } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { getFieldError } from '@/utils/form'
import useSetPasswordForm from '../hooks/use-set-password-form'

export const OnBoardingStepTwo = () => {
  const { form, handleSubmit } = useSetPasswordForm()

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Choose a strong password to secure your account and get started.'
        level={1}
        title='Set your password'
      />

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
                label='Continue'
                size='lg'
                type='submit'
              />
            )}
          />
        </div>
      </form>
    </AnimatePop>
  )
}
