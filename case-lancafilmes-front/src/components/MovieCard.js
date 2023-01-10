import React from 'react'
import { CardImage, TituloCard, MovieCardContainer } from './MovieCard.styles'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({cardInfo, onClick, title, date}) => {
    const navigate = useNavigate()

    return (
        <MovieCardContainer onClick={() => navigate(`${onClick}`)}>
            <CardImage src={`https://image.tmdb.org/t/p/original${cardInfo.poster_path}`} />

            <TituloCard>{title}</TituloCard>
            <p>{date}</p>
        </MovieCardContainer>
    )
}

export default MovieCard