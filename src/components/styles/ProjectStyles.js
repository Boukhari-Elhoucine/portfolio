import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
export const ImageP = styled(Img)`
  height: 100vh;
  object-fit: contain;
`
export const Button = styled(Link)`
  text-align: center;
  display: none;
  text-decoration: none;
  color: #111;
  background-color: #08fdd8;
  padding: 0.5rem 1rem;
  border: 1px solid #08fdd8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 4;
`
export const Item = styled.div`
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 3;
    transition: 200ms ease;
  }
  &:hover::before {
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover ${Button} {
    display: initial;
  }
`
