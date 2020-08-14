const express = require('express')

const scrape = require('./scrape')

const app = express()

app.get('/', (req, res) => { scrape().then(result => res.json(result))})

const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

