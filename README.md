## Instruções

### Backend

-   Foi utilizado um frameowrk chamado [Nestsj](https://nestjs.com/), e para o controle de rotas, é possível utilizar tanto o [Express](https://expressjs.com/) quanto [Fastify](https://www.fastify.io/).
-   Pessoalmente eu prefiro utilizar o Fastify pois ele possui uma performance merlhor, contudo mantive a o Express pois foi a instrução passada pelo teste.

## Front End

-   Utilizei o [React com typescript](https://facebook.github.io/create-react-app/docs/adding-typescript) pois acredito que o TS melhora a legibilidade do código e ajuda a evitar diversos erros.
-   Para os estilos eu utilizei o [SASS](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet) (conforme o teste instruia).
-   Auxiliando no CSS eu utilizei o [Bootstrap](https://getbootstrap.com/) e junto uma [lib para react](https://react-bootstrap.github.io/), pois acredito que é possível entrar um código com alta qualidade, legível e dentro do prazo estipulado.
-   Os tstes automatizados não foram implementados por um único fator. Tempo.
-   Por ultimo, resolvi não utilizar o Redux, pois como se tratava de sistema muito pequeno, o Redux iria adicionar uma complexidade a mais na arquitetura e não entregaria benefícios significativos a este projeto.

## Start

-   Para se inicializar o backend, entre na pasta `/server` e utilize o comando `npm run start:dev` que irá inializar o servidor na porta `3100`.
-   Para inicializar o **react** basta acessar o projeto e utilizar o comando `npm start`

# Importante!!!

Apesar das instruções definirem qual resposta a API precisava retornar, eu precisei retornar alguns campos a mais, eu precisava da localidade do produto mas no template não constava esse campo.

As instruções do teste estão dentro da pasta `INSTRUCOES`
