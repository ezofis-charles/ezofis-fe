import { Link } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { InputText } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { getFieldError } from '@/utils/form'
import useSignUpForm from '../hooks/use-sign-up-form'

export const SignUpForm = () => {
  const { form, handleSubmit, signUpMutation } = useSignUpForm()

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Enter your email to continue'
        level={1}
        title='Welcome'
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
                label='Sign up'
                loading={signUpMutation.isPending}
                size='lg'
                type='submit'
              />
            )}
          />

          <Link
            className='block cursor-pointer text-center hover:underline'
            to='/sign-in'
          >
            Already have an account? Sign in
          </Link>

          {signUpMutation.isError && (
            <div className='text-red text-center'>
              {signUpMutation.error?.message}
            </div>
          )}
        </div>
      </form>
    </AnimatePop>
  )
}
