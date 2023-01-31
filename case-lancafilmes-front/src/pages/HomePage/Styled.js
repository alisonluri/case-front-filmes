import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const ListaFilmes = styled.section`
    display: flex;
    width: 100%;
    margin: 29px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    column-gap: 32px;
    padding: 0px 112px;
    `

export const ContainerCat = styled.div`
        display: flex;
        gap: 8px;
        width: 1100px;
        flex-wrap: wrap;
        justify-content: center;
    `

export const ButtonCat = styled.div`
background-color: white;
color: #323232;
padding: 8px 16px;
border-radius: 4px;
font-weight: 700;
font-size: 16px;    
`

export const Cabecalho = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1440px;
    height: 449px;
    margin-top: 56px;
    background-color: #2d0c5e;
    row-gap: 20px;
    font-weight: 700;
        h2{
            font-size: 48px;
            color: #ffffff;
            width: 781PX;
            text-align: center;
        }
        p{
            color: #fff
        }
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

export const Prev = styled(First) `
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