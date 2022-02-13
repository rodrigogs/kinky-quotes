import kinkyQuote from './index.mjs'

describe('kinkyQuotes', () => {
  it('should return a kinky quote', async () => {
    const kinkyquote = await kinkyQuote()
    expect(typeof kinkyquote).toBe('string')
  }, 10000)
})
