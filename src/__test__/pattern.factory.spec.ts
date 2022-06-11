import { Factory } from '../index'

describe('factory pattern', () => {
  interface Behavior {
    sayMyName(): string
  }

  class Leedonggyu implements Behavior {
    sayMyName(): string {
      return 'leedonggyu'
    }
  }

  class Limjeahyock implements Behavior {
    sayMyName(): string {
      return 'limjeahyock'
    }
  }

  class Sinjunhyeon implements Behavior {
    sayMyName(): string {
      return 'sinjunghyeon'
    }
  }

  class KimhyeonCheol implements Behavior {
    sayMyName(): string {
      return 'kimhyeoncheol'
    }
  }

  it('factory class leedonggyu', (done) => {
    class Friend<T extends 'me' | 'frontend' | 'football' | 'gamer', K extends Behavior> extends Factory<T, K> {
      override inject(className: T): K {
        let c
        switch (className) {
          case 'me':
            c = new Leedonggyu()
            break
          case 'football':
            c = new Sinjunhyeon()
            break
          case 'frontend':
            c = new Limjeahyock()
            break
          case 'gamer':
            c = new KimhyeonCheol()
            break
          default:
            throw new Error(`${className} is invalid className`)
        }

        return <K>c
      }
    }

    const f = new Friend()
    expect(f.inject('me').sayMyName()).toBe('leedonggyu')
    expect(f.inject('football').sayMyName()).toBe('sinjunghyeon')
    expect(f.inject('frontend').sayMyName()).toBe('limjeahyock')
    expect(f.inject('gamer').sayMyName()).toBe('kimhyeoncheol')
    done()
  })
})
