import React from "react"
import { Container, Letter, Left, Contact, Right } from "./styles/HomeStyles"
import Particles from "react-particles-js"
function Home() {
  return (
    <Container>
      <Left>
        <div>
          <Letter delay={0}>H</Letter>
          <Letter delay={0.25}>I</Letter>
          <br />
          <Letter delay={0.5}>I'</Letter>
          <Letter delay={0.75}>M</Letter>
          <Letter delay={1}> H</Letter>
          <Letter delay={1.25}>O</Letter>
          <Letter delay={1.5}>U</Letter>
          <Letter delay={1.75}>C</Letter>
          <Letter delay={2}>I</Letter>
          <Letter delay={2.25}>N</Letter>
          <Letter delay={2.5}>E</Letter>
          <br />
          <Letter delay={2.75}>W</Letter>
          <Letter delay={3}>E</Letter>
          <Letter delay={3.25}>B</Letter>
          <Letter delay={3.5}> D</Letter>
          <Letter delay={3.75}>E</Letter>
          <Letter delay={4}>V</Letter>
          <Letter delay={4.25}>E</Letter>
          <Letter delay={4.5}>L</Letter>
          <Letter delay={4.75}>O</Letter>
          <Letter delay={5}>P</Letter>
          <Letter delay={5.25}>E</Letter>
          <Letter delay={5.5}>R</Letter>
        </div>
        <Contact to="/contact">Contact me</Contact>
      </Left>
      <Right>
        <Particles
          params={{
            particles: {
              number: {
                value: 3,
              },
            },
            size: {
              value: 105,
              random: false,
            },
          }}
        />
      </Right>
    </Container>
  )
}

export default Home
