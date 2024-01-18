import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const HomeTemplate = ({ title, content, data, text1, text2 }) => (
  <Layout>
    <LogoTitle>
      <FETitle>{text1}</FETitle>

      <JennyTitle>{text2}</JennyTitle>
    </LogoTitle>
    <div className="about-content homeTemplate">
      <div>{renderRichText(content)}</div>
    </div>
  </Layout>
)
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
`
const JennyTitle = styled.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`
