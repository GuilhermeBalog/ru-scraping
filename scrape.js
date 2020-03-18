const puppeteer = require('puppeteer');

module.exports = async function scrape(){
    console.log('> Lauching Browser')
    const browser = await puppeteer.launch()

    console.log('> Opening new Page')
    const page = await browser.newPage()

    console.log('> Accessing url')
    await page.goto('https://uspdigital.usp.br/rucard/Jsp/cardapioSAS.jsp?codrtn=13')

    await page.waitFor(1000)

    console.log('> Evaluating content')
    const result = await page.evaluate(() => {
        const cardapio = {}
        
        document.querySelectorAll('.itensCardapio').forEach(tr => {
            const diaId = tr.getAttribute('id')
            cardapio[diaId] = {}
            
            const almoco = tr.children[0].innerHTML.trim().split('<br>').filter(item => item.length > 0)
            const jantar = tr.children[1].innerHTML.trim().split('<br>').filter(item => item.length > 0)

            if(almoco.length > 0) cardapio[diaId].almoco = createMenuObject(almoco)
            if(jantar.length > 0) cardapio[diaId].jantar = createMenuObject(jantar)
        })
        return cardapio

        function createMenuObject(receitas){
            return {
                acompanhamentos: [...receitas[0].split('/'), receitas[3]],
                pratosPrincipais: [receitas[1], receitas[2]],
                saladas: [receitas[4], receitas[5], receitas[6]],
                sobremesas: receitas[7].split('/'),
                adicionais: receitas[8].split('/'),
            }
        }
    })

    console.log('> Closing the browser')
    await browser.close()

    return result
}
