<h1 align="center">
  <img alt="Wiser Desafio" title="Cyan Agroanalytics" src=".github/logo.svg" width="300px" />
</h1>

<h3 align="center">
  Desafio: meuSucesso.com
</h3>

<blockquote align="center">“Quando você aprende com quem sabe, você erra menos.”</blockquote>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mlg404/wiser-challenge.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mlg404/wiser-challenge.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mlg404/wiser-challenge.svg">
  <a href="https://github.com/mlg404/wiser-challenge/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mlg404/wiser-challenge.svg">
  </a>

  <a href="https://github.com/mlg404/wiser-challenge/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/mlg404/wiser-challenge.svg">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-opiniao">O que achei do dsafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Sobre o desafio

O objetivo deste desafio foi criar um projeto backend para encurtar links. O sistema deve receber um link e retornar um link encurtado que, quando acessado, faz o redirecionamento para a página.

[Acessar a aplicação](https://wiser-challenge.herokuapp.com/)
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3a90e1fb1a44088603a7)

## :computer: Opinião

Eu gostei muito de realizar o desafio. Foram requisitos bem sólidos e que faziam sentido na aplicação. Ao mesmo tempo que realizava o desafio, pude ler mais sobre diversos conceitos e também aprender.

Achei a questão do prazo de 7 dias bem tranquilos para a realização do desafio. Se pudesse ter mais tempo, adicionaria ainda mais funcionalidades, pois achei bem produtivo realizar este desafio.

## Regras
- A url encurtada deve ter entra 5 e 10 caracteres
- A url deve ter um tempo de expiração (escolhi 7 dias)
- Ao acessar o url encurtado, o usuário será redirecionado
- Ao acessar um url inválido ou expirado, é retornado erro 404

## :computer: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

-  [Express](https://expressjs.com/)
-  [Node.js](https://nodejs.org/)
-  [VS Code][vc] com [EditorConfig][vceditconfig],  [ESLint][vceslint] e [Prettier][vcprettier]
-  [Typescript](https://www.typescriptlang.org/)
-  [Mongoose](https://mongoosejs.com/)
-  [Crypto Random String](https://github.com/sindresorhus/crypto-random-string#readme)
-  [Date-fns](https://date-fns.org/)
-  [Cors](https://github.com/expressjs/cors#readme)


## :information_source: Como usar

Após isso, configure as credenciais no arquivo `example.env` e renomeie-o para apenas `.env`

```bash
# Clonar este repositório
$ git clone https://github.com/mlg404/wiser-challenge.git

# Aceder a este repositório
$ cd wiser-challenge

# Instalar dependências
$ yarn install

# Rodar a aplicação
$ yarn dev:server
```

---

Feito com 💙 por Victor Eyer :wave: [Entre em contato!](https://www.linkedin.com/in/victoreyer/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://prettier.io/
