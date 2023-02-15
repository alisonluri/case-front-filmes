import styled from "styled-components";
import px2vw from "../utils/px2vw";

/////// Styled Top ///////
export const Top = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    height: 56px;
    background-color: #5c16c5;
    position: fixed;
        img{
            width: ${px2vw(185)};
            min-width: 100px;
            height: ${px2vw(24)};
            min-height: 20px;
            margin: 0px 112px;
        }
        /////////////// Responsividade top ////////
    @media (max-width: 1000px) {
        justify-content: center;
        width: 100%;
    }
`


/////// Styled Genero Filmes /////////
export const ButtonCat = styled.div`
    background-color: white;
    color: #323232;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`



