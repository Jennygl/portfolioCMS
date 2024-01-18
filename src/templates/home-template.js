import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import AboutJenny from "../components/AboutJenny"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const HomeTemplate = ({ title, content, data, text1, text2 }) => (
  <Layout>
    <AboutJenny></AboutJenny>
    <h2>home-template</h2>
    <LogoTitle>
      <FETitle>{text1}</FETitle>

      <JennyTitle>{text2}</JennyTitle>
    </LogoTitle>
    <div className="about-content homeTemplate">
      <div>{renderRichText(content)}</div>
      {/* {documentToReactComponents(JSON.parse(content.raw))} */}
    </div>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Jenny Grinde Lensing</title>

export default HomeTemplate

const LogoTitle = styled.p`
  font-family: "Poiret One", sans-serif;
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18em;
  line-height: 130%;
  padding: 10vh 0 5vh 0;
  /* border: 1px solid red; */
`
const FETitle = styled.span`
  font-size: 1.5em;
  padding-left: 2em;
  color: var(--green);
  /* justify-content: end; */
`
const JennyTitle = styled.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`
