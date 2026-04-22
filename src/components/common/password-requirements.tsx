import { useMemo } from 'react'
import { Icon } from '@/components/base/icon'

interface Props {
  password: string
}

const requirementsConfig = [
  { id: 1, label: 'minimum 8 characters', regex: /.{8,}/ },
  { id: 2, label: 'at least 1 uppercase (A-Z)', regex: /[A-Z]/ },
  { id: 3, label: 'at least 1 lowercase (a-z)', regex: /[a-z]/ },
  { id: 4, label: 'at least 1 number (0-9)', regex: /\d/ },
  {
    id: 5,
    label: 'at least 1 special character (!@#$%^&*)',
    regex: /[!@#$%^&*]/,
  },
]

export const PasswordRequirements = ({ password }: Props) => {
  const requirements = useMemo(
    () =>
      requirementsConfig.map((req) => ({
        ...req,
        isValid: req.regex.test(password),
      })),
    [password],
  )

  return (
    <ul className='text-gray-10 space-y-2 text-12' role='list'>
      {requirements.map(({ id, isValid, label }) => (
        <li className='flex items-center gap-x-2' key={id} role='listitem'>
          <Icon
            className={isValid ? 'text-green' : 'text-gray-8'}
            name='material-symbols:check-rounded'
          />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
