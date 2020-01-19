import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
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
    logoWhite: file(relativePath: { eq: "/images/perth-ipl-centre.svg" }) {
      ...fluidImage
    }
    iplHero: file(relativePath: { eq: "/images/layoutipl-hero.jpg" }) {
      ...fluidImage
    }
    faceIpl: file(relativePath: { eq: "/images/face.jpg" }) {
      ...fluidImage
    }
    mensIpl: file(relativePath: { eq: "/images/hair-removal.jpeg" }) {
      ...fluidImage
    }
    legsIpl: file(relativePath: { eq: "/images/leg.jpg" }) {
      ...fluidImage
    }
    pigmentationIpl: file(relativePath: { eq: "/images/pigmentation.jpeg" }) {
      ...fluidImage
    }
  }
`