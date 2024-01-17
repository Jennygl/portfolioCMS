import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types" // Import BLOCKS and MARKS for node types
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

// Define render options for documentToReactComponents
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (_, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_5]: (_, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (_, children) => <h6>{children}</h6>,
    [BLOCKS.LIST]: (_, children) => (
      <ul className="experience-list">{children}</ul>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (_, children) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
}

const AboutTemplate = ({ title, content, image, text1 }) => (
  <Layout>
    <Content className="content mx-2 mx-sm-5 aboutTemplate">
      <h2>{title}</h2>
      <div className="d-flex flex-md-row flex-column">
        <div className="about-content">
          <div>{renderRichText(content, options.renderMark)}</div>
        </div>
        <div className="image-container">
          <GatsbyImage
            className="my-3 justify-self-center me-5"
            id="AboutImage"
            alt={title}
            image={image.gatsbyImage}
          />
        </div>
      </div>
    </Content>
  </Layout>
)

export default AboutTemplate

const Content = styled.section`
  color: black;
  .about-content {
    width: 100vw;
  }
  @media screen and (min-width: 992px) {
    .about-content {
      width: 50vw;
    }
  }
  .image-container {
    margin-right: auto;
  }
  #AboutImage {
    width: 200px;
    height: 200px;
    margin-right: 5vw;
  }
  ul {
    line-height: 0.8;
    font-size: 0.8;
    list-style: none;
  }
  h4 {
    color: var(--background);
    display: table-row;
    padding-bottom: 10vh;
  }
`
