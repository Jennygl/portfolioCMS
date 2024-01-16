import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPages(sort: { fields: url, order: ASC }) {
        edges {
          node {
            id
            title
            url
            template
          }
        }
      }
    }
  `)
  const filteredData = data.allContentfulPages.edges.filter(
    ({ node }) => node.url !== "404" && node.url !== "/"
  )

  return { allContentfulPages: { edges: filteredData } }
}

export default useNavigation
