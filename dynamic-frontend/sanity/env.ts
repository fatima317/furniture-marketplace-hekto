export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-30'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk0ymX75y1Z9Kt8BjIFs5BVVaZQ4zJt8yC5uRT1wSLhQmyg5zly4P9688HKgcXz68IUaCk4noRVfEJgB6jOyf2M1BxrljcLDGM9RMO2vOkA2sCoQGWCoOZm2Kq8tLXlkv4wIKvuBso4c19B8Dhw8IVJSPgqSXFiAENkRFuTgWynGiIZGKGMt",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
