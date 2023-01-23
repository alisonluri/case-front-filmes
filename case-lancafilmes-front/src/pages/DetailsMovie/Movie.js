import Top from "../../components/Top"
import { Container, HeaderDeatail, Cartaz, FilmDetail, Titulo, ElencoBox, Elenco, AtorBox, TrailerBox, RecomendaBox, FilmesReco, Filme, Sinopse, Dados, Generos, Avalia, Creditos } from "./Styled"
import { useParams } from "react-router-dom"
import { API_KEY, BASE_URL, LANGUAGE } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

// import DataAno from "../../constants/funcoesUteis,js"

const Movie = () => {
    const {id} = useParams()

    const detalheFilme = useRequestData(`${BASE_URL}/${id}?${API_KEY}&${LANGUAGE}`)

    const detalheFilmeDatas = useRequestData(`${BASE_URL}/${id}/release_dates?${API_KEY}`)

    const creditosFilmeDatas = useRequestData(`${BASE_URL}/${id}/credits?${API_KEY}&${LANGUAGE}`)

    const trailerFilmeData = useRequestData(`${BASE_URL}/${id}/videos?${API_KEY}&${LANGUAGE}`)

    const recoFilmesData = useRequestData(`${BASE_URL}/${id}/recommendations?${API_KEY}&${LANGUAGE}`)

    const classificaData = detalheFilmeDatas && detalheFilmeDatas.results && 
    detalheFilmeDatas.results.filter((lancamento) => {
        if (lancamento.iso_3166_1 === "BR" || lancamento.iso_3166_1 === "US")
        return lancamento
    })

    const numeroEmHora = (num) => {
        const horas = Math.floor(num/60)
        const minutos = num % 60
        const textoHoras = (`00${horas}`).slice(-2)
        const textoMinutos = (`00${minutos}`).slice(-2)

        return `${textoHoras}h ${textoMinutos}m`
    }

    const generoLista = detalheFilme && detalheFilme.genres && detalheFilme.genres.map((genre) => {
        return <Generos key={genre.id}>{genre.name},&nbsp;</Generos>
    })

    const creditosFilme = creditosFilmeDatas && creditosFilmeDatas.crew && creditosFilmeDatas.crew.map((credit, index) => {
        return (
            index<6 &&
            <div key={credit.credit_id}>
                    <h5>{credit.name}</h5>
                    <p>{credit.job}</p>
            </div>
        )
    
    })

    const elencoFilme = creditosFilmeDatas && creditosFilmeDatas.cast && creditosFilmeDatas.cast.map((elenco, index) => {
        return (
            index < 16 &&
            <Elenco key={elenco.cast_id}>
                <img src={`https://image.tmdb.org/t/p/w500${elenco.profile_path}`} alt="Ator" />
                <h5>{elenco.name}</h5>
                <p>{elenco.character}</p>
            </Elenco>
        )
    })

    const trailer = trailerFilmeData && trailerFilmeData.results && trailerFilmeData.results.map((video, index) => {
        return (
            index < 1 &&
            <TrailerBox key={video.id}>
                <h2>Trailer</h2>
                <iframe width="907px" height="510px" src={`https://www.youtube.com/embed/${video.key}`} title={video.name} />
            </TrailerBox>
        )
    })

    const recomenda = recoFilmesData && recoFilmesData.results && recoFilmesData.results.map((recom, index) => {
        return (
            index < 6 &&
                <Filme key={recom.id}>
                    <img src={`https://image.tmdb.org/t/p/original${recom.poster_path}`} alt={recom.title} />
                    <h5>{recom.title}</h5>
                    <p>{recom.release_date}</p>
                </Filme>
        )
    })

    return(
        <Container>
            <Top />
                {
                    detalheFilme && classificaData && creditosFilme && elencoFilme && trailer && recomenda &&
                    <div>
                            <HeaderDeatail>
                                <Cartaz src={`https://image.tmdb.org/t/p/original${detalheFilme.poster_path}`} alt={detalheFilme.title} />
                                <FilmDetail>
                                    <Titulo>{detalheFilme.title} ({classificaData[0].release_dates[0].release_date})</Titulo>
                                    <Dados>
                                        {classificaData[0].release_dates[0].certification} anos - data (BR) &nbsp;-&nbsp; {generoLista} - {numeroEmHora(detalheFilme.runtime)}
                                    </Dados>
                                    <Avalia>ícone - Avaliação dos Usuários</Avalia>
                                    <h4>Sinopse</h4>
                                    <Sinopse>{detalheFilme.overview}</Sinopse>
                                    <Creditos>
                                        {creditosFilme}
                                    </Creditos>
                                </FilmDetail>
                            </HeaderDeatail><br/><br/>
                            <ElencoBox>
                                <h2>Elenco Original</h2>
                                <AtorBox>
                                    {elencoFilme}
                                </AtorBox>
                            </ElencoBox>
                                {trailer}
                            <RecomendaBox>
                                <h2>Recomendações</h2>
                                <FilmesReco>
                                    {recomenda}
                                </FilmesReco>
                            </RecomendaBox>
                    </div>
                }
        </Container>
    )
}

export default Movie