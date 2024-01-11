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
  return data
}

// const useNavigation = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulPages(sort: { url: ASC }) {
//         edges {
//           node {
//             id
//             title
//             url
//             template
//           }
//         }
//       }
//     }
//   `)
//   return data
// }
export default useNavigation
