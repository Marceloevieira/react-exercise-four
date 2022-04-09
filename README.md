# Exercício 4

Para explorar os conceitos vistos na Aula 04, iremos utilizar a stack React + Redux
para uma aplicação que possua uma playlist de filmes favoritos. A ideia é que,
utilizando o projeto da aula 03, possamos escolher quais os nossos filmes
favoritos a partir da listagem e mostrá-los em uma tela, tudo utilizando a store do
Redux. Para isso, siga os seguintes passos:

## Passo 1

Utilizando o exercício da aula 03 para listagem de filmes, instale no projeto os
seguintes pacotes:
● npm i -S redux;
● npm i -S react-redux.

## Passo 2

Crie a estrutura para utilização do Redux utilizando como reducer uma “playlist”.
Em seguida:
● Crie uma action que receba o objeto do filme a ser adicionado na playlist
principal;
● Crie um reducer para modificar o estado global;

## Passo 3
Crie uma rota “/playlists” utilizando o react router. Em seguida, exiba os filmes
marcados adicionados à playlist principal.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.