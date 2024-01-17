import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { Helmet } from "react-helmet"
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
      {/* <Helmet>
        <title>Jenny's Portfolio</title>
        <meta name="description" content="My frontend projects" />
      </Helmet> */}
      <Content className="content mx-2 mx-sm-5 portfolioTemplate">
        <h2>{title} </h2>
        {content && (
          <div className="portfolio-content">
            {documentToReactComponents(JSON.parse(content.raw))}
          </div>
        )}
        <div className="posts row align-items-start justify-content-center mx-4 mx-sm-1">
          {data.allContentfulPortfolio.edges.map(edge => {
            const slug = edge.node.slug
            const truncatedText = edge.node.text.text.slice(0, 60)
            return (
              <div
                className="post col-sm-3 border m-2 py-3 d-flex flex-column text-center"
                key={edge.node.id}
              >
                <h4 className="pb-3" id="postTitle">
                  {edge.node.title}
                </h4>
                <GatsbyImage
                  className="my-3 postImage mx-auto"
                  id="postImage"
                  alt={edge.node.title}
                  image={edge.node.image.gatsbyImage}
                ></GatsbyImage>
                <p className="mt-auto">{truncatedText}...</p>
                <Link to={`/portfolio/${slug}`} className="" id="postSlug">
                  {" "}
                  Read more{" "}
                </Link>
              </div>
            )
          })}
        </div>
        <Link className="absolute bottom-0" to="/">
          Go back to the homepage
        </Link>
      </Content>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioTemplate
const Content = styled.section`
  /* color: black; */
  .post {
    min-width: 180px;
    min-height: 300px;
    /* background-color: var(--green);
    background-image: linear-gradient(to bottom, brightpurple, darkgrey); */
    /* background-color: var(--green);
    background-image: linear-gradient(to bottom, #58c69a, #093c27); */
    color: black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
  }
  .postImage {
    width: 150px;
    /* height: 150px; */
  }
  #postTitle {
    font-weight: 100;
    font-family: "Poiret One", sans-serif;
    font-size: 1.5em;
  }
  #postSlug {
    font-weight: 100;
    font-family: "Poiret One", sans-serif;
    font-size: 0.8em;
    /* text-decoration: none; */
    color: black;
  }
`
