import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
`
export const GlobalStyle = createGlobalStyle`
*{
    font-family : "Roboto", sans-serif;
    margin: 0;
    padding : 0;
    box-sizing : border-box;
}`
