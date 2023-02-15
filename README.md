
# Projeto Filnal - Case Front-end Listagem de Filmes

Projeto de finalização de curso FullStack na Labenu. Case de processo seletivo da Promobit, listagem de filmes. API utilizada [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction), com o objetivo de criar uma listagem de filmes mais populares do dia consultando o endpoint  [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Tecnologias Utilizadas

- JavaScript
- Styled-Components
- ReactJs
- React Router Dom

**Quick start**

1. Install npm dependencies: `npm install`

2. Build: `npm run build`
    - Link Surge: [`annoying-can.surge.sh`](https://annoying-can.surge.sh/)

3. Run: `npm run start`

**For development just run:** `npm run start`

## Prerequisites

* [node](https://nodejs.org/en/)

### Especificações

- Tela inicial
    - Cabeçalho com a lista de gêneros de filmes
    - Listagem de filmes mais populares
    - Paginação da listagem
- Página de detalhes do filmes selecionado
    - Informações detalhadas do filmes (título, sinopse, cartaz, gêneros, data de lançamento etc)
    - Elenco do filme
    - Trailer
    - Lista de recomendações relacionadas ao filme


## Authors

* **Alison Ribeiro** - [Github](https://github.com/alisonluri)