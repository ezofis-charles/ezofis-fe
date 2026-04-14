import { z } from 'zod'

export const PasswordSchema = z
  .string()
  .min(8, 'Must be at least 8 characters')
  .regex(/[A-Z]/, 'Must contain at least 1 uppercase letter (A-Z)')
  .regex(/[a-z]/, 'Must contain at least 1 lowercase letter (a-z)')
  .regex(/[0-9]/, 'Must contain at least 1 number (0-9)')
  .regex(/[!@#$%^&*]/, 'Must contain at least 1 special character (!@#$%^&*)')
