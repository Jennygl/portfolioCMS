import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const ContactTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContact {
        edges {
          node {
            id
            jobTitle
            name
            eMail
            gitHub
          }
        }
      }
      allContentfulPages {
        edges {
          node {
            id
            content {
              raw
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2 className="mb-5 mx-3">Contact </h2>
      <div className="row align-items-start justify-content-center mx-4 mx-sm-1">
        {data.allContentfulContact.edges.map(({ node }) => (
          <div
            className="col-sm-3 border m-2 py-3 d-flex flex-column text-center"
            key={node.id}
          >
            <h4 className="pb-3" id="postTitle">
              {node.jobTitle}
            </h4>
            <p>{node.name}</p>
            <p>{node.eMail}</p>
            <a href={node.gitHub} target="_blank" rel="noopener noreferrer">
              {node.gitHub}
            </a>
          </div>
        ))}
      </div>
      <div className="row align-items-start justify-content-center mx-4 mx-sm-1">
        {data.allContentfulPages.edges.map(({ node }) => (
          <div
            className="col-sm-3 border m-2 py-3 d-flex flex-column text-center"
            key={node.id}
          >
            <h4 className="pb-3" id="postTitle">
              {node.content.raw}
            </h4>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default ContactTemplate
