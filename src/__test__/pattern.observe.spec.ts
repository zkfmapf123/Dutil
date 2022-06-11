import { observe } from '../index'

describe('observe pattern test', () => {
  class UnSafeCalc {
    constructor(private readonly num) {}

    div(num: number) {
      return this.num / num
    }

    getCurrentNum(): number {
      return this.num
    }
  }

  it('unSafe div -> NaN', (done) => {
    const unSafeCalc = new UnSafeCalc(0)
    const divResult = unSafeCalc.div(0)
    expect(divResult).toBe(NaN)
    done()
  })

  it('SafeCalc use Proxy -> Error', (done) => {
    const unSafeCalc = new UnSafeCalc(0)
    const safeCalc = observe<UnSafeCalc>(unSafeCalc, {
      get(target, property: keyof UnSafeCalc, receive) {
        if (property === 'div') {
          return (v: number) => {
            if (v === 0) {
              // throw new Error('error message')
              return `${v} is invalid params`
            }

            return target[property](v)
          }
        }

        return target[property]
      },
    })

    expect(safeCalc.div(0)).toBe('0 is invalid params')
    expect(safeCalc.getCurrentNum()).toBe(0)
    done()
  })
})
