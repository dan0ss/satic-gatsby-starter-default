import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
  <Img fluid={props.data.faceIpl.childImageSharp.fluid} />
  <Img fluid={props.data.mensIpl.childImageSharp.fluid} />
  <Img fluid={props.data.legsIpl.childImageSharp.fluid} />

  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    logoWhite: file(relativePath: { eq: "images/perth-ipl-logo.svg" }) {
      ...fluidImage
    }
    iplHero: file(relativePath: { eq: "images/ipl-hero.jpg" }) {
      ...fluidImage
    }
    faceIpl: file(relativePath: { eq: "images/face.jpg" }) {
      ...fluidImage
    }
    mensIpl: file(relativePath: { eq: "images/hair-removal.jpeg" }) {
      ...fluidImage
    }
    legsIpl: file(relativePath: { eq: "images/leg.jpg" }) {
      ...fluidImage
    }
    pigmentationIpl: file(relativePath: { eq: "images/pigmentation.jpeg" }) {
      ...fluidImage
    }
  }
`