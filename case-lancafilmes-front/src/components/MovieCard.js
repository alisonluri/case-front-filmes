import React, { useContext } from 'react'
import { CardImage, TituloCard, MovieCardContainer } from './MovieCard.styles'
import { useNavigate } from 'react-router-dom'
// import { GlobalStateContext } from '../global/GlobalStateContext'
// import GenerosFilmes from './GenerosFilmes'

const MovieCard = ({ id, cardInfo, title, date, onClick, idGenero, onGeneroClick, name }) => {
    const navigate = useNavigate()
    // const { states } = useContext(GlobalStateContext)

    // const itemGeneros = states.generos.filter(category => states.itens.includes(category));

    return (<>
        {
            <MovieCardContainer id={idGenero} onClick={() => navigate(`${onClick}`)}>
                <CardImage src={`https://image.tmdb.org/t/p/original${cardInfo.poster_path}`} />
                {/* {itemGeneros.map(genero => (
                    <GenerosFilmes
                        key={genero.id}
                        id={genero.id}
                        name={genero.name}
                        selected={states.selectedGeneros.includes(genero.id)}
                        onClick={onGeneroClick}
                    />
                ))} */}
                <TituloCard>{title}</TituloCard>
                <p>{date}</p>
            </MovieCardContainer>

        }
    </>
    )
}

export default MovieCard