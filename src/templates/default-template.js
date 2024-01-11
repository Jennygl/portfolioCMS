import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const DefaultTemplate = ({ title, content }) => (
  <Layout>
    <Content className="content mx-3 text-center" id="contactContent">
      <h2>{title}</h2>
      <div>{documentToReactComponents(JSON.parse(content.raw))}</div>
    </Content>
  </Layout>
)

export default DefaultTemplate
const Content = styled.div`
  /* color: black; */
`
