import styled from "styled-components";
import botaofechar from '../../assets/botaofechar.png'
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    `
    
    export const Cabecalho = styled.header`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: ${px2vw(1440)};
        max-width: 1440px;    
        margin-top: 56px;
        background-color: #2d0c5e;
        row-gap: 20px;
        font-weight: 700;
            h2{
                font-size: calc(1.5rem + 1.7vw);
                color: #ffffff;
                width: ${px2vw(781)};
                max-width: 800PX;
                text-align: center;
            }
            p{
                font-size: 1em;
                color: #fff
            }
                ////////////// Responsividade /////////////////
        @media (max-width: 800px) {
            align-items: flex-start;
            padding: 0 16px;
            h2{
                text-align: left;
            }
        }
    `

export const ListaFilmes = styled.section`
    display: flex;
    width: 100%;
    max-width: 1440px;
    margin: ${px2vw(29)};
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    column-gap: ${px2vw(25)};
    padding: 0px 112px;
    ////////////// Responsividade /////////////////
    @media (max-width: 975px) {
        padding: 0px 15px;
    }

    `

export const ContainerCat = styled.div`
        display: flex;
        gap: 8px;
        width: ${px2vw(1100)};
        max-width: 1100px;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
        .selected {
            background: #d18000 url(${botaofechar}) no-repeat right center;
            color: white;
        }
            ////////////// Responsividade /////////////////
    @media (max-width: 800px) {
       justify-content: left;

    }
    `

export const ButtonCat = styled.div`
background-color: white;
color: #323232;
padding: 8px 16px;
border-radius: 4px;
font-weight: 700;
font-size: 16px;    
`


export const Paginacao = styled.section`
    display: flex;
    list-style-type: none;
    gap: 10px;
    color: #5c16c5;
    margin-bottom: 50px;
`
export const First = styled.div`
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`

export const Prev = styled(First)`
    &:hover{
      background-color: transparent;
      /* cursor: default; */
    }
`

export const Numbers = styled(First)`

    ${props => props.isSelect && {
        color: "#191919",
        background: "#e9e9e9",
        padding: "0 5px"
    }}
`

export const Next = styled(First)`

`

export const Last = styled(First)`

`
