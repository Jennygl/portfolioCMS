import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const DefaultTemplate = ({ title, content, text1, text2, image }) => (
  <Layout>
    <Content className="content mx-3 defaultTemplate mt-auto">
      {/* <h2>{title}</h2> */}
      <LogoTitle>
        <Title>{text2}</Title>

        <Name>{text1}</Name>
      </LogoTitle>
      <div className="defaultContent">
        {documentToReactComponents(JSON.parse(content.raw))}
        <GatsbyImage
          className="my-3 justify-self-center me-5"
          id="HomeImage"
          alt={title}
          image={image.gatsbyImage}
        />
      </div>
    </Content>
  </Layout>
)

export default DefaultTemplate
const Content = styled.section`
  .defaultContent {
    width: 100vw;
  }
  @media screen and (min-width: 992px) {
    .defaultContent {
      width: 50vw;
    }
  }
  #HomeImage {
    width: 100px;
    height: 100px;
  }
`

const LogoTitle = styled.p`
  font-family: "Poiret One", sans-serif;
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18em;
  line-height: 130%;
  padding: 10vh 0 5vh 0;
`
const Title = styled.span`
  font-size: 1.5em;
  padding-left: 2em;
  color: var(--green);
  /* justify-content: end; */
`
const Name = styled.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`
