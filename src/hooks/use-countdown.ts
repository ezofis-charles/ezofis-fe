import { useCountdown as useBaseHook } from 'usehooks-ts'

export default function useCountdown({
  countup = false,
  interval = 1000,
  start,
  stop = 0,
}: {
  countup?: boolean
  interval?: number
  start: number
  stop?: number
}) {
  const [count, { resetCountdown, startCountdown, stopCountdown }] =
    useBaseHook({
      countStart: start,
      countStop: stop,
      intervalMs: interval,
      isIncrement: countup,
    })

  return { count, resetCountdown, startCountdown, stopCountdown }
}
