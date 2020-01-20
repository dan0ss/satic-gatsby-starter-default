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
    <Img fluid={props.data.logoIpl.childImageSharp.fluid} />
    <Img fluid={props.data.faceIpl.childImageSharp.fluid} />
    <Img fluid={props.data.machineIpl.childImageSharp.fluid} />
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
    logoIpl: file(relativePath: { eq: "perth-ipl-logo.svg" }) {
      ...fluidImage
    }
    faceIpl: file(relativePath: { eq: "face.jpg" }) {
      ...fluidImage
    }
    machineIpl: file(relativePath: { eq: "machine.jpg" }) {
      ...fluidImage
    }
  }
`