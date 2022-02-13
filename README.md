# kinky-quote

Crawls random quotes from [kinkyquotes.com](http://kinkyquotes.com/).

### Install
```bash
$ npm install kinky-quote
```

### Usage
```js
import kinkyQuotes from 'kinky-quote'

(async () => {
  const quote = await kinkyQuotes()
  console.log(quote)
})()
```

### CLI
```bash
npx kinky-quote
```