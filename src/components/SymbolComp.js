import * as React from "react"
import { graphql } from "gatsby"

const SymbolComp = ({ data }) => {
  // Check if data is defined before accessing properties
  if (!data || !data.allContentfulLinks) {
    return null // or return a default component, message, or handle it in some way
  }

  const links = data.allContentfulLinks.edges

  return (
    <div>
      {links.map(({ node }) => (
        <div key={node.title}>
          <p>Title: {node.title}</p>
          <p>Link: {node.url}</p>
          <p>hej</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulLinks {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`

export default SymbolComp
