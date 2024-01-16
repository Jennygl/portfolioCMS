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
      specifyImage {
        gatsbyImage(width: 200)
      }
    }
  }
`

const PortfolioItem = props => {
  const { title, text, image, specifyImage } = props.data.contentfulPortfolio
  return (
    <Layout>
      {/* <SEO title={props.data.contentfulPortfolio.title} /> */}
      <Content className="mx-4 h-100">
        <div className="content">
          <h1 className="mt-5">{props.data.contentfulPortfolio.title}</h1>
          <p className="mt-5">{props.data.contentfulPortfolio.text.text}</p>
          <GatsbyImage
            className="my-3"
            id="AboutImage"
            alt={props.data.contentfulPortfolio.title}
            image={props.data.contentfulPortfolio.image.gatsbyImage}
          ></GatsbyImage>
          {specifyImage && (
            <GatsbyImage
              className="my-3"
              id="AboutImage"
              alt={title}
              image={specifyImage.gatsbyImage}
            />
          )}
          {/* {props.data.contentfulPortfolio.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulPortfolio.featuredImage.fluid}
            alt={props.data.contentfulPortfolio.title}
          />
        )} */}
        </div>
        <Link to="/portfolio/">Back to the Portfolio Page</Link>
      </Content>
    </Layout>
  )
}

export default PortfolioItem

const Content = styled.div`
  margin-top: 100px;
  a {
    color: black;
  }
`
