import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const PortfolioTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            title
            slug
            text {
              text
            }
            image {
              gatsbyImage(width: 1000)
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h2 className="mb-5 mx-3">Portfolio</h2>
      <div className="posts row align-items-start justify-content-center mx-4 mx-sm-1">
        {data.allContentfulPortfolio.edges.map(edge => {
          const slug = edge.node.slug
          return (
            <div
              className="post col-sm-3 border m-2 py-3 d-flex flex-column text-center"
              key={edge.node.id}
            >
              <h4 className="pb-3" id="postTitle">
                {edge.node.title} portfolio-template
              </h4>
              <GatsbyImage
                className="my-3"
                id="postImage"
                alt={edge.node.title}
                image={edge.node.image.gatsbyImage}
              ></GatsbyImage>
              <p>{edge.node.text.text}</p>
              <Link to={`/portfolio/${slug}`} className="" id="postSlug">
                {" "}
                Read more{" "}
              </Link>
            </div>
          )
        })}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioTemplate
