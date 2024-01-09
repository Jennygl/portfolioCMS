import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const AboutTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulExperience {
        edges {
          node {
            id
            name
            
          }
        }
      }
    }
  `)
  console.log("Data:", data)

  return (
    <Layout>
      <h2 className="mt-5 mx-3">About</h2>
      <ul className="d-flex flex-column align-items-start justify-content-center mx-sm-1">
        {data.allContentfulExperience.edges.map(({ node }) => (
          <li className="col-sm-3 m-2" key={node.id}>
            <p>{node.name}</p>
            {/* <div>{documentToReactComponents(JSON.parse(node.text.raw))}</div> */}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <title>About Page</title>

export default AboutTemplate
