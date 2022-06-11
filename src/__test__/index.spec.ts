describe('dk util test', () => {
  const author = {
    name: 'leedonggyu',
    age: 29,
    job: 'backend',
  }

  it('who are you?', (done) => {
    expect(author.name).toBe('leedonggyu')
    done()
  })

  it('author age', (done) => {
    expect(author.age).toBe(29)
    done()
  })

  it('author job', (done) => {
    const job = 'backend'

    expect(author.job).toBe('backend')
    done()
  })
})
