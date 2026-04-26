import { useSearch } from '@tanstack/react-router'
import type { Option } from '@/types/option'
import { Button } from '@/components/base/button'
import { InputSelect } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { USER_AUTH_METHOD } from '@/types/user'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const roles: Option[] = [
  { id: 'Manager', name: 'Manager' },
  { id: 'Supervisor', name: 'Supervisor' },
  { id: 'TeamLead', name: 'Team Lead' },
  { id: 'Executive', name: 'Executive' },
  { id: 'Coordinator', name: 'Coordinator' },
  { id: 'Specialist', name: 'Specialist' },
  { id: 'Consultant', name: 'Consultant' },
  { id: 'Director', name: 'Director' },
  { id: 'Administrator', name: 'Administrator' },
  { id: 'Other', name: 'Other' },
]
const departments: Option[] = [
  { id: 'Information Technology', name: 'Information Technology' },
  { id: 'Human Resources', name: 'Human Resources' },
  { id: 'Finance', name: 'Finance' },
  { id: 'Marketing', name: 'Marketing' },
  { id: 'Sales', name: 'Sales' },
  { id: 'Operations', name: 'Operations' },
  { id: 'Customer Service', name: 'Customer Service' },
  { id: 'Research and Development', name: 'Research and Development' },
  { id: 'Legal', name: 'Legal' },
  { id: 'Other', name: 'Other' },
]
const companySizes: Option[] = [
  { id: 'Solo Professional', name: 'Solo Professional (1)' },
  { id: 'Small Team', name: 'Small Team (2-10)' },
  { id: 'Growing Business', name: 'Growing Business (11-50)' },
  { id: 'Mid-Size Company', name: 'Mid-Size Company (51-200)' },
  { id: 'Large Organization', name: 'Large Organization (201-1,000)' },
  { id: 'Enterprise', name: 'Enterprise (1,000+)' },
]

export const OnBoardingStepThree = () => {
  const { authMethod } = useSearch({ from: '/_auth/on-boarding' })
  const setStep = useOnBoardingStore((state) => state.setStep)
  const formData = useOnBoardingStore((state) => state.formData)
  const updateFormData = useOnBoardingStore((state) => state.updateFormData)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setStep('stepFour')
  }

  const handleBack = () => {
    setStep(authMethod === USER_AUTH_METHOD.enum.email ? 'stepTwo' : 'stepOne')
  }

  return (
    <AnimatePop
      description='Help us personalize your experience.'
      title='Tell us about you'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          <InputSelect
            label='Role'
            options={roles}
            placeholder='Select your role'
            size='md'
            value={formData.role}
            onChange={(role) => updateFormData({ role })}
          />

          <InputSelect
            label='Department'
            options={departments}
            placeholder='Select your department'
            size='md'
            value={formData.department}
            onChange={(department) => updateFormData({ department })}
          />

          <InputSelect
            label='Company size'
            options={companySizes}
            placeholder='Select your company size'
            size='md'
            value={formData.companySize}
            onChange={(companySize) => updateFormData({ companySize })}
          />
        </div>

        <Button
          className='w-full justify-center'
          label='Continue'
          size='lg'
          type='submit'
        />
      </form>

      <Button
        className='-mt-4 w-full justify-center'
        color='gray'
        label='Back'
        size='lg'
        variant='ghost'
        onClick={handleBack}
      />
    </AnimatePop>
  )
}
