import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Container, Image, Right, List, Link, Left, H1 } from "./projectStyles"
function Project({ data }) {
  const { html } = data.markdownRemark
  const { title, repo, link, images } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Container>
        <Left>
          {images.map(item => (
            <Image fluid={item.image.childImageSharp.fluid} />
          ))}
        </Left>
        <Right>
          <H1>{title}</H1>
          <List dangerouslySetInnerHTML={{ __html: html }}></List>
          <Link target="_blank" href={repo}>
            Github Repo
          </Link>
          <Link target="_blank" href={link} full>
            Project link
          </Link>
        </Right>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        slug
        title
        repo
        link
        images {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Project
