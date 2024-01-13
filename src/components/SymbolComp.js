import * as React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

const Symbol = ({ data }) => {
  //   const { id, symbol, title, link } = data.contentfulSymbols

  return (
    <div>
      {/* <Link to={link}>symbol</Link> */}
      <p>Symbol:</p>
    </div>
  )
}

export const query = graphql`
  query {
    contentfulSymbols {
      id
      symbol
      title
      link
    }
  }
`

export default Symbol
