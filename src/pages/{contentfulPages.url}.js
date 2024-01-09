import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import ContactTemplate from "../templates/contact-template"
import PortfolioTemplate from "../templates/portfolio-template"

const Page = props => {
  const { data } = props
  const { contentfulPages } = data

  const getTemplate = contentfulPages => {
    switch (contentfulPages.template) {
      case "about":
        return <AboutTemplate {...contentfulPages} />
      case "contact":
        return <ContactTemplate {...contentfulPages} />
      case "portfolio":
        return <PortfolioTemplate {...contentfulPages} />
      default:
        return <HomeTemplate {...contentfulPages} />
    }
  }

  return <Layout>{getTemplate(contentfulPages)}</Layout>
}

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

export default Page
