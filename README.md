# dk-util

## Installation

```
    $ npm i ts-dkutil
    $ npm i --save ts-dkutil
```

## Index
- Design Pattern
  - [1. Observe](#observe)
  - [2. Factory](#factory)

- Utils
  - [1. catchWrap](#catchWrap)

# Observe

```typescript
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

```typescript
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

# catchWrap

```typescript
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

```

- example

```typescript
const arrSum = (arr: number[], v: number): number => {
      let sum = 0

      arr.forEach((item) => {
        sum += item
      })

      if (v === 0) {
        throw Error()
      }

      return sum * v
    }

    const arr = [1, 2, 3, 4, 5]
    const multipleNumber = 99

  try{
    const sum = catchWrap<number>(arrSum(arr, multipleNumber), 'invalid number')
  }catch(e){
    // ...
  }

```