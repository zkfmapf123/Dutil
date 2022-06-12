# dk-util

## Installation

```
    $ npm i dk-util
    $ npm i --save dk-util
```

## Index
- Design Pattern
    - [1. Observe](#observe)
    - [2. Factory](#factory)

# Observe

```
/**
 * @info use Proxy Pattern
 * @param cb ProxyHandler (Interface)
 */

export function observe<T extends object>(object: T, cb: ProxyHandler<T>) {
  const proxy = new Proxy(object, cb)
  return proxy
}

```

# Factory

```
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
  
```