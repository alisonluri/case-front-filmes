import Top from "../../components/Top"
import { Container, HeaderDeatail, Cartaz, FilmDetail, Titulo, ElencoBox, Elenco, AtorBox, TrailerBox, RecomendaBox, FilmesReco, Filme } from "./Styled"
import imgteste from '../../assets/pantera-negra.jpg'

const Movie = () => {
    return(
        <Container>
            <Top />
            <HeaderDeatail>
                <Cartaz src={imgteste} alt="filme" />
                <FilmDetail>
                    <Titulo>Título (Ano)</Titulo>
                    <p>Classificação</p>
                    <p>ícone - Avaliação</p>
                    <h4>Sinopse</h4>
                    <p>Descrição</p>
                    <h5>Nome</h5>
                    <p>Função</p>
                </FilmDetail>
            </HeaderDeatail><br/><br/>
            <ElencoBox>
                <h2>Elenco Original</h2>
                <AtorBox>
                    <Elenco>
                        <img src={imgteste} alt="Ator" />
                        <h5>Nome do ator</h5>
                        <p>Personagem</p>
                    </Elenco>
                </AtorBox>
            </ElencoBox>
            <TrailerBox>
                <h2>Trailer</h2>
                <div>video aqui</div>
            </TrailerBox>
            <RecomendaBox>
                <h2>Recomendações</h2>
                <FilmesReco>
                    <Filme>
                        <img src={imgteste} alt="Ator" />
                        <h5>Nome do filme</h5>
                        <p>Data</p>
                    </Filme>
                    <Filme>
                        <img src={imgteste} alt="Ator" />
                        <h5>Nome do filme</h5>
                        <p>Data</p>
                    </Filme>
                    <Filme>
                        <img src={imgteste} alt="Ator" />
                        <h5>Nome do filme</h5>
                        <p>Data</p>
                    </Filme>
                </FilmesReco>
            </RecomendaBox>
        </Container>
    )
}

export default Movie