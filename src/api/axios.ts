import type { InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { z } from 'zod'

declare module 'axios' {
  interface AxiosRequestConfig {
    schema?: z.ZodSchema
  }
}

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'access-control-allow-origin': '*', // dev only
  },
})

interface AxiosRequestConfig extends InternalAxiosRequestConfig {
  schema?: z.ZodSchema
}

axiosInstance.interceptors.response.use(
  (response) => {
    const { schema } = response.config as AxiosRequestConfig
    if (!schema) return response

    const result = schema.safeParse(response.data)
    if (result.success) {
      return { ...response, data: result.data }
    }

    console.error('[Schema Validation Error]:', z.flattenError(result.error))
    throw new Error('Invalid response from server')
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong'
    return Promise.reject(new Error(message))
  },
)

export { axiosInstance }

export { default as axios } from 'axios'
