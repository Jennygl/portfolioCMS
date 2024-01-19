import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactTemplate = ({ title, content, text1 }) => {
  //GraphQL query to fetch data
  const data = useStaticQuery(graphql`
    query {
      allContentfulLinks {
        edges {
          node {
            title
            url
            icon
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Content className="content mx-3 mx-sm-5 contactTemplate">
        <h2>{title}</h2>
        <div className="d-flex flex-column flex-sm-row">
          <div>
            {data.allContentfulLinks.edges.map(edge => {
              return (
                <div className="link mb-2" key={edge.node.title}>
                  <a
                    href={edge.node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {" "}
                    {/* dangerouslySetInnerHTML, to inject HTML directly into a component. In this case an icon from Contentful  */}
                    <span
                      className="pe-2"
                      dangerouslySetInnerHTML={{ __html: edge.node.icon }}
                    ></span>
                    {edge.node.title}
                  </a>
                </div>
              )
            })}
          </div>
          {/* Render rich text content */}
          <div className="contact-content ms-5">
            <div>{renderRichText(content)}</div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default ContactTemplate

const Content = styled.section`
  .contactTemplate {
    width: 100vw;
  }
  @media screen and (min-width: 992px) {
    .contactTemplate {
      width: 50vw;
    }
  }
  a.link {
    color: black;
    text-decoration: none;
  }
  .contact-content {
    transform: rotate(-10deg);
    font-size: 1.6em;
  }
`
