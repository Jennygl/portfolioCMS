import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutTemplate = ({ title, content, image }) => (
  <Layout>
    <Content className="content mx-3 aboutTemplate">
      <h2>{title}</h2>
      <div className="about-content">
        {documentToReactComponents(JSON.parse(content.raw))}
      </div>
      <GatsbyImage
        className="my-3"
        id="AboutImage"
        alt={title}
        image={image.gatsbyImage}
      ></GatsbyImage>
    </Content>
  </Layout>
)

export default AboutTemplate

const Content = styled.div`
  color: black;

  #AboutImage {
    width: 10vw;
    height: 10vw;
  }
`
