import { catchWrap } from '../index'

describe('awaitToThrow test', () => {
  describe('catchWrap', () => {
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

    it('catchWrap test', (done) => {
      try {
        const sum = catchWrap<number>(arrSum(arr, multipleNumber), 'invalid number')
        expect(sum).toBe(1485)
      } catch (e) {
        console.error(e)
      } finally {
        done()
      }
    })
  })
})
