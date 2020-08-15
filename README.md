# RU Scraping

API que usa webscraping para prover o cardápio da USP Leste

## Consumindo a API

Você pode consumir a API enviando um requisição GET para a url base: [`https://ru-scraping.herokuapp.com/`](https://ru-scraping.herokuapp.com/), que vai retornar um JSON com os dias da semana.

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
