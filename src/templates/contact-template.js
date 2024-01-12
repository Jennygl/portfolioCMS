import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SymbolComp from "../components/SymbolComp"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ContactTemplate = ({ title, content, data, text1 }) => (
  <Layout>
    <Content className="content mx-3 text-center contactTemplate">
      <h2>{title}</h2>
      <div className="contact-content">
        {documentToReactComponents(JSON.parse(content.raw))}
      </div>
      <SymbolComp></SymbolComp>
    </Content>
  </Layout>
)
export default ContactTemplate
const Content = styled.div`
  /* color: black; */
`
