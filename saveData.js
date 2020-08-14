const fs = require('fs')

const scrape = require('./scrape')

module.exports = async function saveData () {
    const result = await scrape()

    fs.writeFileSync('cardapio.json', JSON.stringify(result, null, '\t'), (err) => {
        if(err)
            throw new Error('Cannot save the file: ' + err)
    })
}