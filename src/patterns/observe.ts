/**
 * @info use Proxy Pattern
 * @param cb ProxyHandler (Interface)
 */
export function observe<T extends object>(object: T, cb: ProxyHandler<T>) {
  const proxy = new Proxy(object, cb)
  return proxy
}
