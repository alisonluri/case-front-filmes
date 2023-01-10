import styled from "styled-components";

export const Top = styled.div`
    display: flex;
    align-items: center;
    width: 1440px;
    height: 56px;
    background-color: #5c16c5;
    position: fixed;
        img{
            width: 185px;
            height: 24px;
            margin: 0px 112px;
        }
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

export const ButtonCat = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    color: #323232
`