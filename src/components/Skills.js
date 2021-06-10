import React from "react"
import { Container, Left } from "../components/styles/HomeStyles"
import { Header, Description } from "../components/styles/AboutStyles"
import {
  LodaingContainer,
  Load,
  SkillContainer,
  Label,
  Right,
} from "../components/styles/SkillsStyles"
function Skills() {
  return (
    <Container>
      <Left>
        <Header>Skills</Header>
        <Description>
          I have more than a year of experience of web developement.I have
          gained multiple kind of skills, feel free to see my work in the
          portfolio section.
        </Description>
      </Left>
      <Right>
        <SkillContainer>
          <Label>HTML</Label>
          <LodaingContainer>
            <Load total={100}></Load>
          </LodaingContainer>
        </SkillContainer>
        <SkillContainer>
          <Label>CSS</Label>
          <LodaingContainer>
            <Load total={80}></Load>
          </LodaingContainer>
        </SkillContainer>
        <SkillContainer>
          <Label>JavaScript</Label>
          <LodaingContainer>
            <Load total={80}></Load>
          </LodaingContainer>
        </SkillContainer>
        <SkillContainer>
          <Label>React</Label>
          <LodaingContainer>
            <Load total={90}></Load>
          </LodaingContainer>
        </SkillContainer>
        <SkillContainer>
          <Label>Node JS</Label>
          <LodaingContainer>
            <Load total={70}></Load>
          </LodaingContainer>
        </SkillContainer>
      </Right>
    </Container>
  )
}

export default Skills
