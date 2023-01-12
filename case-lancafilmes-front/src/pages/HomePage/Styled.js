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

export const ButtonCat = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    color: #323232
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

export const ContainerCat = styled.div`
    display: flex;
    gap: 8px;
    width: 1100px;
    flex-wrap: wrap;
    justify-content: center;
`