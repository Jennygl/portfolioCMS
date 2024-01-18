import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import SymbolComp from "../components/SymbolComp"
import { graphql, useStaticQuery } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactTemplate = ({ title, content, text1 }) => {
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
          <div className="contact-content ms-5">
            <div>{renderRichText(content)}</div>
            {/* {documentToReactComponents(JSON.parse(content.raw))} */}
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
    /* margin-left: 2vw; */
    /* margin-top: -2vh; */
  }
`

// import React from "react"
// import Layout from "../components/layout"
// import styled from "styled-components"
// import SymbolComp from "../components/SymbolComp"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const links = allContentfulLinks.edges

// export const query = graphql`
//   query {
//     allContentfulLinks {
//       edges {
//         node {
//           title
//           url
//         }
//       }
//     }
//   }
// `

// const ContactTemplate = ({ title, content, data, text1 }) => (
//   <Layout>
//     <Content className="content mx-3 text-center contactTemplate">
//       <h2>{title}</h2>
//       <div className="contact-content">
//         {documentToReactComponents(JSON.parse(content.raw))}
//       </div>
//       <div>
//         {links.map(({ node }) => (
//           <div key={node.title}>
//             {/* <p>ID: {node.id}</p> */}
//             {/* <p>Symbol: {node.symbol}</p> */}
//             <p>Title: {node.title}</p>
//             <p>Link: {node.url}</p>
//           </div>
//         ))}
//       </div>
//       <SymbolComp></SymbolComp>
//     </Content>
//   </Layout>
// )
// export default ContactTemplate
// const Content = styled.div`
//   a {
//     color: black;
//   }
// `
