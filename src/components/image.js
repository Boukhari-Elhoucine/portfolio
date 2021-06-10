import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImageP, Container, Item, Button } from "./styles/ProjectStyles"
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              thumbnail {
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
    }
  `)
  return (
    <Container>
      {data.allMarkdownRemark.edges.map((item, key) => (
        <Item key={key}>
          <ImageP
            fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid}
          />
          <Button to={`/projects/${item.node.fields.slug}`}>
            View <br /> Project
          </Button>
        </Item>
      ))}
    </Container>
  )
}

export default Image
