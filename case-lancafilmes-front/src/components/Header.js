import React from 'react'
import { Cabecalho, ButtonCat, ContainerCat} from './styled'
import { LANGUAGE, API_KEY, GENRE_URL } from "../constants/urls"
import useRequestLista from "../hooks/useRequestLista"


const Top = () => {

    const dataGenero = useRequestLista(`${GENRE_URL}?${API_KEY}&${LANGUAGE}`)
    console.log(dataGenero)

    const filmesGenero = dataGenero && dataGenero.genres && dataGenero.genres.map((genere) => {
        return <ButtonCat key={genere.id}>
            {genere.name}
        </ButtonCat> 
    })

    return (
        <Cabecalho>
            <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
            <p>FILTRE POR:</p>
            <ContainerCat>
                {filmesGenero}
            </ContainerCat>
        </Cabecalho>
    )
}

export default Top