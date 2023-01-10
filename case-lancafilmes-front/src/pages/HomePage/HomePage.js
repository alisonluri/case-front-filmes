import Topo from "../../components/Top"
import Header from "../../components/Header"
import { Container, ListaFilmes } from "./Styled"
import MovieCard from "../../components/MovieCard"
import React from "react"
import { LANGUAGE, BASE_URL, API_KEY } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

const HomePage = () => {

    const dataList = useRequestData(`${BASE_URL}/popular?${API_KEY}&${LANGUAGE}`)
    
    const filmesList = dataList && dataList.map((movie) => {
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
                <Header />
            </div>
            <ListaFilmes>
                {filmesList}                
            </ListaFilmes>
        </Container>
    )
}

export default HomePage