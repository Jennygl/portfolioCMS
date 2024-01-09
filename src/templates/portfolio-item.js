import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
// import Img from "gatsby-image"
// import SEO from "../components/seo"

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      title
      text {
        text
      }
      image {
        gatsbyImage(width: 200)
      }
    }
  }
`

const PortfolioItem = props => {
  return (
    <Layout>
      {/* <SEO title={props.data.contentfulPortfolio.title} /> */}
      <Link to="/Portfolio/">Visit the Portfolio Page</Link>
      <div className="content">
        <h1 className="mt-5">{props.data.contentfulPortfolio.title}</h1>
        <p className="mt-5">{props.data.contentfulPortfolio.text.text}</p>
        <GatsbyImage
          className="my-3"
          id="AboutImage"
          alt={props.data.contentfulPortfolio.title}
          image={props.data.contentfulPortfolio.image.gatsbyImage}
        ></GatsbyImage>
        {/* {props.data.contentfulPortfolio.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulPortfolio.featuredImage.fluid}
            alt={props.data.contentfulPortfolio.title}
          />
        )} */}
      </div>
    </Layout>
  )
}

export default PortfolioItem


