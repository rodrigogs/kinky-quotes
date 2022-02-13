import axios from 'axios'
import cheerio from 'cheerio'

const KINKY_QUOTES_URL = 'http://www.kinkyquotes.com'
const QUOTE_SELECTOR = 'h2.entry-title a'

export default async () => {
  const pagesRange = [...Array(200).keys()].map(i => i + 1)
  const randomPage = Math.floor(Math.random() * pagesRange.length) + 1
  const url = `${KINKY_QUOTES_URL}/page/${randomPage}`

  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  const quotes = $(QUOTE_SELECTOR)
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return $(randomQuote).text()
}
