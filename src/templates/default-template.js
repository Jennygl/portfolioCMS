import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const DefaultTemplate = ({ title, content, text1, text2 }) => (
  <Layout>
    <Content className="content mx-3 defaultTemplate">
      <h2>{title} default-template</h2>
      <LogoTitle>
        <Title>{text2}</Title>

        <Name>{text1}</Name>
      </LogoTitle>
      <div>{documentToReactComponents(JSON.parse(content.raw))}</div>
    </Content>
  </Layout>
)

export default DefaultTemplate
const Content = styled.div`
  /* color: black; */
`

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
