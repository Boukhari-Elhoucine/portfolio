import styled from "styled-components"
import Img from "gatsby-image"
export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  overflow-y: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
    min-height: 100vh;
  }
`
export const Image = styled(Img)`
  margin: 0.5rem 0;
`
export const H1 = styled.h1`
  color: #08fdd1;
  letter-spacing: 1px;
`
export const Left = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
  padding: 0 0.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #08fdd1;
    border-radius: 6px;
  }
`
export const Right = styled.div`
  flex: 1;
  padding: 0 2rem;
  @media (max-width: 376px) {
    width: 90%;
    margin: 0 auto;
  }
`
export const List = styled.div`
  color: white;
  margin: 1rem;
`
export const Link = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.full ? "#111" : "#08fdd8")};
  border: 1px solid #08fdd8;
  width: 8rem;
  height: 2.5rem;
  margin: 0 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  ${props => (props.full ? "background-color:#08fdd8" : "none")}
`
