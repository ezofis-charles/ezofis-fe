import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearch } from '@tanstack/react-router'
import { onBoarding } from '@/api/auth/on-boarding-api'
import { useSessionStore } from '@/stores/use-session-store'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export default function useOnBoardingMutation() {
  const router = useRouter()
  const { authMethod, token } = useSearch({ from: '/_auth/on-boarding' })
  const formData = useOnBoardingStore((state) => state.formData)
  const setSession = useSessionStore((state) => state.setSession)

  return useMutation({
    mutationFn: () =>
      onBoarding({
        authMethod,
        challenges: formData.challenges,
        companySize: formData.companySize?.name || '',
        confirmPassword: formData.confirmPassword,
        department: formData.department?.name || '',
        experience: formData.experience,
        password: formData.password,
        recommendation: formData.recommendation,
        role: formData.role?.name || '',
        token,
      }),
    onSuccess: (data) => {
      setSession(data)
      router.navigate({ replace: true, to: '/' })
    },
  })
}
