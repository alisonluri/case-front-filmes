import Topo from "../../components/Top"
import { Container, ListaFilmes, ContainerCat, Cabecalho } from "./Styled"
import MovieCard from "../../components/MovieCard"
import React, { useContext, useEffect } from "react"
import { LANGUAGE, BASE_URL, API_KEY, GENRE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Pagination from "../../components/Paginacao"
import GenerosFilmes from "../../components/GenerosFilmes"

const HomePage = () => {
    const { states, setters, functions } = useContext(GlobalStateContext)


    //Chamada da API
    const dataList = useRequestData(`${BASE_URL}/popular?${API_KEY}&${LANGUAGE}&page=${states.currentPage}`)


    const dataGenero = useRequestData(`${GENRE_URL}?${API_KEY}&${LANGUAGE}`)

    //Tratamento de dados retornados da API para serem mostrados em tela

    ///////////////////////////////
    //O erro está  aqui.
    
    useEffect(() => {
        console.log("data genero" + dataGenero)
        console.log("objeto setters" + setters)
        
        if (dataGenero && dataGenero.genres){
            setters.setCategorias(dataGenero.genres.map((nome) => nome))
        }

    },[])



    // dataGenero && dataGenero.genres && setters.setCategorias(dataGenero.genres.map((nome) => nome))

    // dataGenero && dataGenero.genres && setters.setItens(dataGenero.genres)

    //////////////////////////////

    const filteredItems = states.selectedGeneros.length > 0
        ? dataList.results.filter((movie)=>movie.genre_ids.every(generoId => states.selectedGeneros.includes(generoId)))
        : dataList.results
 
    const filmesList = filteredItems && filteredItems.map((movie) => {
            return <MovieCard
                cardInfo={movie}
                key={movie.id}
                title={movie.title}
                date={movie.release_date}
                idGenero={movie.genre_ids}
                onClick={`/movie/${movie.id}`}
            />
        })
    
    

    const filmesGenero = dataGenero && dataGenero.genres && dataGenero.genres.map((genere) => {
        return <GenerosFilmes
            onClick={functions.onCategoryClick}
            selected={states.selectedGeneros.includes(genere.id)}
            key={genere.id}
            name={genere.name}
            id={genere.id}
        />

    })
    return (
        <Container>
            <div>
                <Topo />
                <Cabecalho>
                    <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
                    <p>FILTRE POR:</p>
                    <ContainerCat>
                        {filmesGenero}
                    </ContainerCat>
                </Cabecalho>
            </div>
            <ListaFilmes>
                {filmesList}
            </ListaFilmes>
            <Pagination  />
        </Container>
    )
}

export default HomePage