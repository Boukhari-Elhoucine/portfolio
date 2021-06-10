import React from "react"
import { BiHome } from "react-icons/bi"
import { IoPersonOutline, IoEyeOutline } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"
import {
  Container,
  Logo,
  Nav,
  NavLink,
  Social,
  SocialLink,
} from "../components/styles/HeaderStyles"
const Header = () => {
  return (
    <Container>
      <Logo to="/">H</Logo>
      <Nav>
        <NavLink to="/">
          <BiHome />
        </NavLink>
        <NavLink to="/about">
          <IoPersonOutline />
        </NavLink>
        <NavLink to="/skills">
          <FiSettings />
        </NavLink>
        <NavLink to="/projects">
          <IoEyeOutline />
        </NavLink>
        <NavLink to="/contact">
          <AiOutlineMail />
        </NavLink>
      </Nav>
      <Social>
        <SocialLink href="#">
          <FaFacebookF />
        </SocialLink>
        <SocialLink
          href="https://github.com/Boukhari-Elhoucine"
          target="_blank"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/elhoucine-boukhari-258ba31b5/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialLink>
      </Social>
    </Container>
  )
}

export default Header
