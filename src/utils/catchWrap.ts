/* eslint-disable @typescript-eslint/ban-types */
export function catchWrap<T>(result: T, errTitle?: string): T | Error {
  try {
    return result
  } catch (e) {
    throw new Error(errTitle || e.message)
  }
}

export async function awaitCatchWrap<T>(result: T, errTitle?: string): Promise<T | Error> {
  try {
    return await result
  } catch (e) {
    throw new Error(errTitle || e.message)
  }
}
