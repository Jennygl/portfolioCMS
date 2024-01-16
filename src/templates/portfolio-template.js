import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const PortfolioTemplate = ({ title, content }) => {
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
      <Content className="content mx-3 portfolioTemplate">
        <h2>
          {title}{" "}
          <span>
            <i class="bi bi-0-circle-fill"></i>
          </span>
        </h2>

        <div className="contact-content">
          {documentToReactComponents(JSON.parse(content.raw))}
        </div>
        <div className="posts row align-items-start justify-content-center mx-4 mx-sm-1">
          {data.allContentfulPortfolio.edges.map(edge => {
            const slug = edge.node.slug
            const truncatedText = edge.node.text.text.slice(0, 70)
            return (
              <div
                className="post col-sm-3 border m-2 py-3 d-flex flex-column text-center"
                key={edge.node.id}
              >
                <h4 className="pb-3" id="postTitle">
                  {edge.node.title}
                </h4>
                <GatsbyImage
                  className="my-3"
                  id="postImage"
                  alt={edge.node.title}
                  image={edge.node.image.gatsbyImage}
                ></GatsbyImage>
                <p>{truncatedText}</p>
                <Link to={`/portfolio/${slug}`} className="" id="postSlug">
                  {" "}
                  Read more{" "}
                </Link>
              </div>
            )
          })}
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Content>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioTemplate
const Content = styled.div`
  /* color: black; */
`
