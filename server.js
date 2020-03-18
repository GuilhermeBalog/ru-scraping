const express = require('express')

const scrape = require('./scrape')

const app = express()

app.get('/', (req, res) => {
    scrape().then(data => {
        res.json(data)
    })
})

const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

