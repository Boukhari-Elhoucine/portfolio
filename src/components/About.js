import React from "react"
import { Container, Left, Right } from "../components/styles/HomeStyles"
import {
  Header,
  Description,
  headerAnimation,
  H2,
} from "../components/styles/AboutStyles"
function About() {
  return (
    <Container>
      <Left>
        <Header initial="in" animate="out" variants={headerAnimation}>
          About me
        </Header>
        <H2>Hello,My name is Boukhari Elhoucine.</H2>
        <Description>
          I'm a web developer and computer science student from Oran, Algeria. I
          am a big fan of animations and UI effects.It will be my pleasure to
          make your business have an online presence.
        </Description>
      </Left>
      <Right></Right>
    </Container>
  )
}

export default About
