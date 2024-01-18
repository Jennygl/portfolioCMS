import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const NotFoundTemplate = ({ title, content, data, text1, text2 }) => (
  <Layout>
    <div className="about-content homeTemplate">
      <div>{renderRichText(content)}</div>
    </div>
  </Layout>
)
export const Head = () => <title>Jenny Grinde Lensing</title>

export default NotFoundTemplate
