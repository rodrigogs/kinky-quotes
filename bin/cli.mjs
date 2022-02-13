#!/usr/bin/env node

import kinkyQuote from '../index.mjs'

kinkyQuote()
  .then(console.log)
  .catch(console.error)
