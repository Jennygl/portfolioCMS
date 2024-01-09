import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPages(sort: { url: ASC }) {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  `)
  return data
}
export default useNavigation
