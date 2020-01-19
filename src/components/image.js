import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


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
    logoWhite: file(relativePath: { eq: "perthIplLogo.svg" }) {
      ...fluidImage
    }
    iplHero: file(relativePath: { eq: "ipl-hero.jpg" }) {
      ...fluidImage
    }
    faceIpl: file(relativePath: { eq: "face.jpg" }) {
      ...fluidImage
    }
    mensIpl: file(relativePath: { eq: "hair-removal.jpeg" }) {
      ...fluidImage
    }
    legsIpl: file(relativePath: { eq: "leg.jpg" }) {
      ...fluidImage
    }
    pigmentationIpl: file(relativePath: { eq: "pigmentation.jpeg" }) {
      ...fluidImage
    }
  }
`


export default Image
