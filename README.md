# RU Scraping

API que usa webscraping para prover o cardápio da USP Leste

## Consumindo a API

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=RU%20Scraping&uri=https%3A%2F%2Fraw.githubusercontent.com%2FGuilhermeBalog%2Fru-scraping%2Fmaster%2Finsomnia.json)

Você pode consumir a API enviando um requisição GET para a url base: [`https://ru-scraping.herokuapp.com/`](https://ru-scraping.herokuapp.com/), que vai retornar um JSON com os dias da semana.

> [Clique aqui para acessar a documentação completa](https://guilhermebalog.github.io/ru-scraping/)

## Como instalar

Requisitos:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Clone o repositório:

```bash
git clone https://github.com/GuilhermeBalog/ru-scraping.git
```

Instale as dependências

```bash
cd ru-scraping
npm install #ou
yarn install
```

Rode o servidor

```bash
npm run start #ou
yarn start
```

## Referencias

Utilizei esse tutorial para o scraping: [Node.js: web scraping com Puppeteer](https://medium.com/@fabiojanio/node-js-web-scraping-com-puppeteer-29dd974eb042)

> Confira o [arquivo scrape.js](https://github.com/GuilhermeBalog/ru-scrape/blob/master/scrape.js) para ver o scraping e sinta-se livre para fazer um fork do repositório e adicionar suas ideias!

*That's all folks! Keep coding!*
