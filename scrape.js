const puppeteer = require('puppeteer');

module.exports = async function scrape(){
    let data
    const url = 'https://uspdigital.usp.br/rucard/Jsp/cardapioSAS.jsp?codrtn=13'

    console.log('> Lauching Browser')
    const browser = await puppeteer.launch({ args: ['--no-sandbox'],  })

    console.log('> Opening new Page')
    const page = await browser.newPage()

    try{
        console.log(`> Accessing url ${url}`)
        await page.goto(url)

        console.log('> Loading page content')
        await page.waitFor(2000)
    } catch(err){
        return { erro: 'Cannot acces the page' }
    }

    console.log('> Evaluating content')
    data = await page.evaluate(() => {
        const cardapio = {}
        
        document.querySelectorAll('.itensCardapio').forEach(tr => {
            const diaId = tr.id
            cardapio[diaId] = {}
            
            const almoco = tr.children[0].innerHTML.trim().split('<br>')
            const jantar = tr.children[1].innerHTML.trim().split('<br>')

            if(almoco.length > 0) cardapio[diaId].almoco = createMenuObject(almoco)
            if(jantar.length > 0) cardapio[diaId].jantar = createMenuObject(jantar)
        })
        return cardapio

        function createMenuObject(receitas){
            if(receitas.length > 1)
                return {
                    acompanhamentos: [...receitas[0].split('/'), receitas[3]],
                    pratosPrincipais: [receitas[1], receitas[2]],
                    saladas: [receitas[4], receitas[5], receitas[6]],
                    sobremesas: receitas[7].split('/'),
                    adicionais: receitas[8].split('/'),
                }
            else
                return { erro: receitas[0] }
        }
    })
    
    console.log('> Closing the browser')
    await browser.close()

    return data
    
}
