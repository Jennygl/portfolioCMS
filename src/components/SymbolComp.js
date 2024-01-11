import * as React from "react"
import { graphql } from "gatsby"

const Symbol = ({ data }) => {
//   const { id, symbol, title } = data.contentfulSymbols

  return (
    <div>
      {/* <h1>{title}</h1>
      <p>ID: {id}</p> */}
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
    }
  }
`

export default Symbol
