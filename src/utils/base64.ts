/**
 * Encodes any value into a URL-safe Base64 string.
 * Supports Unicode characters and objects via JSON serialization.
 *
 * @param items - The value to encode (object, string, number, etc.)
 * @returns A URL-safe Base64 string without padding.
 */
export function encodeBase64(items: unknown): string {
  if (items === undefined) return ''

  try {
    const json = JSON.stringify(items)
    // Use TextEncoder to handle Unicode characters (UTF-8)
    const bytes = new TextEncoder().encode(json)
    // Convert bytes to a binary string that btoa can handle
    const binary = [...bytes].map((byte) => String.fromCodePoint(byte)).join('')
    const base64 = btoa(binary)

    return base64.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')
  } catch (error) {
    console.error('Failed to encode base64:', error)
    return ''
  }
}

/**
 * Decodes a URL-safe Base64 string back into its original value.
 *
 * @param encoded - The URL-safe Base64 string to decode.
 * @returns The decoded value, or a default value (empty array) if decoding fails.
 */
export function decodeBase64<T = unknown>(encoded?: string): T {
  if (!encoded) return [] as T

  try {
    // Restore Base64URL characters and padding
    const base64 = encoded.replaceAll('-', '+').replaceAll('_', '/')
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      '=',
    )

    const binary = atob(padded)
    const bytes = new Uint8Array(
      [...binary].map((char) => char.codePointAt(0) ?? 0),
    )
    const json = new TextDecoder().decode(bytes)

    return JSON.parse(json) as T
  } catch (error) {
    console.warn('Failed to decode base64:', error)
    return [] as T
  }
}
