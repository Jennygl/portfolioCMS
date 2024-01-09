// src/pages/404.js
import React from "react"
import { graphql } from "gatsby"

const NotFoundPage = ({ data }) => {
  //   const notFoundContent = data.contentfulNotFoundPage // Adjust the query based on your Contentful content model

  return (
    <div>
      <h1>404 - Page Not Found.</h1>
      {/* <p>{notFoundContent.description}</p> */}
    </div>
  )
}

// export const query = graphql`
//   query {
//     contentfulNotFoundPage {
//       description
//     }
//   }
// `

export default NotFoundPage
