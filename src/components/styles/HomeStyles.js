import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
const animate = keyframes`
0%,100%{
color:#08fdd8;
text-shadow : 0 0 10px #08fdd8;
}
5%,95%{
    color:#08fdd8;
    filter : blur(0px);
}
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Letter = styled.span`
  letter-spacing: 0.2rem;
  color: #111;
  font-size: 3em;
  animation: ${animate} 2s linear normal forwards;
  animation-delay: ${props => `${props.delay}s`};
  @media (max-width: 768px) {
    font-size: 2em;
  }
`
export const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 376px) {
    display: none;
  }
`
export const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding: 0 3rem;
`
export const Contact = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;
  color: #08fdd8;
  border: 1px solid #08fdd8;
  padding: 0.5rem 1rem;
  cursor: pointer;
  letter-spacing: 0.2rem;
  transition: 0.3s ease;
  &:hover {
    background-color: #08fdd8;
    color: #111;
    box-shadow: 0 0 10px #08fdd8;
    -webkit-box-reflect: below 1px -webkit-linear-gradient(bottom, rgba(
            255,
            255,
            255,
            0.3
          )
          10%, transparent 70%, transparent 100%);
  }
`
