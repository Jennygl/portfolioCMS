import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"

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
      <Content className="mx-4 h-100">
        <div className="content">
          <h2 className="mt-5">{props.data.contentfulPortfolio.title}</h2>
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
        </div>
        <Link to="/portfolio/">Back to the Portfolio Page</Link>
      </Content>
    </Layout>
  )
}

export default PortfolioItem

const Content = styled.section`
  margin-top: 100px;
  a {
    color: black;
  }
`
