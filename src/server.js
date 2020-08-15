const express = require('express')
const savedData = require('./saveData')

let cardapio = {}

const app = express()
savedData().then(() => {
    try{
        cardapio = require('./cardapio.json')
    } catch (err){
        console.log('JSON não encontrado')
    }
})

app.get('/', (req, res) => { 
    res.json(cardapio) 
})

app.get('/:diaSemana', (req, res) => {
    const { diaSemana } = req.params

    if(Object.keys(cardapio).includes(diaSemana))
        res.json(cardapio[diaSemana])
    else
        res.status(406).json({ erro: "Dia da semana inválido" })
})


app.get('/:diaSemana/:refeicao', (req, res) => {
    const { diaSemana, refeicao } = req.params

    if(Object.keys(cardapio).includes(diaSemana)){
        if(Object.keys(cardapio[diaSemana]).includes(refeicao)){
            res.json(cardapio[diaSemana][[refeicao]])
        } else {
            res.status(406).json({ erro: "Refeição inválida" })
        }
    } else {
        res.status(406).json({ erro: "Dia da semana inválido" })
    }
})

const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

