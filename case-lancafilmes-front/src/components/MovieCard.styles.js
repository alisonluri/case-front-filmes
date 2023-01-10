import styled from "styled-components"

export const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 176px;
    height: 400px;
    row-gap: 10px;
    /* position: relative; */
    &:hover {
        cursor: pointer;
        box-shadow: rgba(255, 255, 255) 0px 13px 27px -5px, rgba(255, 255, 255) 0px 8px 16px -8px;
    }
    `

export const TituloCard = styled.p`
        font-weight: 700;
        font-size: 16px;
        color: #000;
`

export const CardImage = styled.img`
    border-radius: 4px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
    border: 1px solid #E7E7E7
`