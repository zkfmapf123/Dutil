/**
 * @info factory pattern
 * @param K names
 * @param T interface
 */
export abstract class Factory<T, K> {
  inject(className: T): K {
    throw new Error('must be override')
  }
}
