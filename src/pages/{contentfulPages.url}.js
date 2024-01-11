import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import ContactTemplate from "../templates/contact-template"
import PortfolioTemplate from "../templates/portfolio-template"
import DefaultTemplate from "../templates/default-template"

export const query = graphql`
  query ($id: String) {
    contentfulPages(id: { eq: $id }) {
      id
      title
      url
      template
      image {
        gatsbyImage(width: 1000)
      }
      content {
        raw
      }
    }
  }
`
const Page = props => {
  const { data } = props
  const { contentfulPages } = data

  const getTemplate = contentfulPages => {
    switch (contentfulPages.template) {
      case "/":
        return <HomeTemplate {...contentfulPages} />
      case "about":
        return <AboutTemplate {...contentfulPages} />
      case "contact":
        return <ContactTemplate {...contentfulPages} />
      case "portfolio":
        return <PortfolioTemplate {...contentfulPages} />
      default:
        return <DefaultTemplate {...contentfulPages} />
    }
  }

  return (
    <Layout>
      {getTemplate(contentfulPages)}{" "}
    </Layout>
  )
}

export default Page
