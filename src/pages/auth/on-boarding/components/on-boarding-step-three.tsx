import { useState } from 'react'
import type { Option } from '@/types/option'
import { Button } from '@/components/base/button'
import { InputSelect } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const roles: Option[] = [
  { id: 'manager', name: 'Manager' },
  { id: 'supervisor', name: 'Supervisor' },
  { id: 'teamLead', name: 'Team Lead' },
  { id: 'executive', name: 'Executive' },
  { id: 'coordinator', name: 'Coordinator' },
  { id: 'specialist', name: 'Specialist' },
  { id: 'consultant', name: 'Consultant' },
  { id: 'director', name: 'Director' },
  { id: 'administrator', name: 'Administrator' },
  { id: 'other', name: 'Other' },
]
const departments: Option[] = [
  { id: 'it', name: 'Information Technology' },
  { id: 'hr', name: 'Human Resources' },
  { id: 'finance', name: 'Finance' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'sales', name: 'Sales' },
  { id: 'operations', name: 'Operations' },
  { id: 'customerService', name: 'Customer Service' },
  { id: 'researchAndDevelopment', name: 'Research and Development' },
  { id: 'legal', name: 'Legal' },
  { id: 'other', name: 'Other' },
]
const companySizes: Option[] = [
  { id: 'soloProfessional', name: 'Solo Professional (1)' },
  { id: 'smallTeam', name: 'Small Team (2-10)' },
  { id: 'growingBusiness', name: 'Growing Business (11-50)' },
  { id: 'midSizeCompany', name: 'Mid-Size Company (51-200)' },
  { id: 'largeOrganization', name: 'Large Organization (201-1,000)' },
  { id: 'enterprise', name: 'Enterprise (1,000+)' },
]

export const OnBoardingStepThree = () => {
  const setStep = useOnBoardingStore((state) => state.setStep)
  const setOnboardingData = useOnBoardingStore(
    (state) => state.setOnboardingData,
  )
  const [department, setDepartment] = useState<null | Option>(null)
  const [companySize, setCompanySize] = useState<null | Option>(null)
  const [role, setRole] = useState<null | Option>(null)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setOnboardingData('companySize', companySize?.id || '')
    setOnboardingData('department', department?.id || '')
    setOnboardingData('role', role?.id || '')
    setStep('stepFour')
  }

  return (
    <AnimatePop
      description='This helps us tailor workflows for you.'
      title='Tell us about you'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          <InputSelect
            label='Role'
            options={roles}
            placeholder='Select your role'
            size='md'
            value={role}
            onChange={setRole}
          />

          <InputSelect
            label='Department'
            options={departments}
            placeholder='Select your department'
            size='md'
            value={department}
            onChange={setDepartment}
          />

          <InputSelect
            label='Company Size'
            options={companySizes}
            placeholder='Select your company size'
            size='md'
            value={companySize}
            onChange={setCompanySize}
          />
        </div>

        <Button
          className='w-full justify-center'
          label='Continue'
          size='lg'
          type='submit'
        />
      </form>
    </AnimatePop>
  )
}
