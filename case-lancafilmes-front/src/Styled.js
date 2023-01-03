import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    width: 100%;
    height: 100vh;
  }
`
export const Page = styled.div`
    background-color: black;
`