import Topo from "../../components/Top"
import { Container, ListaFilmes, ButtonCat, ContainerCat, Cabecalho } from "./Styled"
import MovieCard from "../../components/MovieCard"
import React from "react"
import { LANGUAGE, BASE_URL, API_KEY, GENRE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

const HomePage = () => {

    const dataList = useRequestData(`${BASE_URL}/popular?${API_KEY}&${LANGUAGE}`)
    
    const dataGenero = useRequestData(`${GENRE_URL}?${API_KEY}&${LANGUAGE}`)

    const filmesGenero = dataGenero && dataGenero.genres && dataGenero.genres.map((genere) => {
        return <ButtonCat key={genere.id}>
            {genere.name}
        </ButtonCat> 
    })

    const filmesList = dataList && dataList.results && dataList.results.map((movie) => {
        return <MovieCard 
            cardInfo={movie}
            key={movie.id}
            title={movie.title}
            date={movie.release_date}
            onClick={`/movie/${movie.id}`}
        />
    })

    return(
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
        </Container>
    )
}

export default HomePage