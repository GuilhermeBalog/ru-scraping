const fs = require('fs')

const scrape = require('./scrape')

module.exports = async function saveData () {
    const result = await scrape()

    console.log('> Saving file')
    fs.writeFileSync('src/cardapio.json', JSON.stringify(result, null, '\t'), (err) => {
        if(err)
            throw new Error('Cannot save the file: ' + err)

        })
    console.log('> File saved!')
}