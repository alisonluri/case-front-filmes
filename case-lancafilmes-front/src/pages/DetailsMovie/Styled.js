import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-items: center;
    margin: 0px;
`

export const HeaderDeatail = styled.header`
    display: flex;
    width: 1440px;
    height: 600px;
    margin-top: 56px;
    background-color: #2d0c5e;
`

export const Cartaz = styled.img`
    width: 383px;
    height: 574px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 72px;
    margin-left: 112px;
`

export const FilmDetail = styled.section`
    display: flex;
    flex-direction: column;
    height: 528px;
    margin-top: 72px;
    margin-left: 33px;
    color: #fff;
`

export const Titulo = styled.h1`
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
`

export const Dados = styled.p`
    display: flex;
    font-size: 18px;
    margin-bottom: 16px;
`

export const Generos = styled.p`
    font-weight: 400;
    font-size: 18px;
`

export const Avalia = styled.p`
    margin-bottom: 32px;
`

export const TituloSinopse = styled.h4`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
    `    

export const Sinopse = styled.p`
    width: 700px;
    font-weight: 400;
    font-size: 16px;
    color: #DDD;
    margin-bottom: 8px;
    margin-bottom: 24px;
`

export const Creditos = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 180px;
    overflow: hidden;
    div{
        h5{
            font-size: 16px;
            font-weight: 700;
            width: 172px;
            margin-right: 33px;
        }
        p{
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 23px;
            width: 174px;
            margin-right: 33px;
        }
    }
`

export const ElencoBox = styled.section`
    width: 1440px;
    margin-top: 30px;
    h2{
        margin-left: 112px;
    }
`

export const AtorBox = styled.div`
    display: flex;
    margin: 0px 112px 0px 97px;
    overflow: auto;
    gap: 16px;
    ::-webkit-scrollbar{
        height: 12px;
        background: #DDDDDD;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background: #ADADAD;
        height: 12PX;
        border-radius: 10px;
    }
    `

export const Elenco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    width: 191px;
    height: 336px;
    left: 0px;
    top: 0px;
    color: #131313;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    gap: 16px;
    margin-bottom: 26px;
    img{
        width: 175px;
        height: 222px;
        border-radius: 4px;
    }
    h5{
        font-weight: 700;
        font-size: 18px;
    }
    p{
       font-weight: 400;
       font-size: 16px;

    }
`

export const TrailerBox = styled.section`
    display: flex;
    flex-direction: column;
    width: 1440px;
    margin-top: 30px;
    padding-left: 112px;
    /* h2{
        margin-left: 112px;
    }
    div{
        margin-left: 112px;
    } */
`

export const RecomendaBox = styled.section`
    display: flex;
    flex-direction: column;
    width: 1440px;
    margin-top: 30px;
    h2{
        margin-left: 112px;
    }
    iframe{
        margin-left: 112px;
    }
`

export const FilmesReco = styled.div`
    display: flex;
    margin-left: 112px;
    gap: 32px;
    `

export const Filme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 191px;
    height: 336px;
    left: 0px;
    top: 0px;
    color: #131313;
    border-radius: 4px;
    gap: 8px;
    margin-bottom: 26px;
    img{
        width: 176px;
        height: 264px;
        border-radius: 4px;
    }
    h5{
        font-weight: 700;
        font-size: 18px;
    }
    p{
       font-weight: 400;
       font-size: 16px;

    }
`