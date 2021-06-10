import styled from "styled-components"
import { Link } from "gatsby"
export const Container = styled.header`
  background-color: #111;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  z-index: 999;
`
export const Logo = styled(Link)`
  color: #08fdd8;
  font-size: 3em;
  text-decoration: none;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`
export const NavLink = styled(Link)`
  color: #a1a5a5;
  font-size: 1.5em;
  margin: 1rem 0;
  transition: 0.25s ease;
  &:hover {
    color: #08fdd8;
  }
`
export const Social = styled.div`
  display: flex;
  flex-direction: column;
`
export const SocialLink = styled.a`
  color: #a1a5a5;
  text-decoration: none;
  cursor: pointer;
  margin: 0.5rem 0;
  transition: 0.25s ease;
  &:hover {
    color: #08fdd8;
  }
`
