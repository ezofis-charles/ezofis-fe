export function getFieldError(errors: unknown[]): string | undefined {
  const err = errors[0]
  if (!err) return undefined
  if (typeof err === 'string') return err
  if (
    typeof err === 'object' &&
    'message' in err &&
    typeof err.message === 'string'
  )
    return err.message
  return undefined
}
