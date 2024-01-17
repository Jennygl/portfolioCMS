import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import SymbolComp from "../components/SymbolComp"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
      <Content className="content mx-2 mx-sm-5 contactTemplate">
        <h2>{title}</h2>
        <div className="contact-content">
          {documentToReactComponents(JSON.parse(content.raw))}
        </div>

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
      </Content>
    </Layout>
  )
}

export default ContactTemplate

const Content = styled.section`
  a.link {
    color: black;
    text-decoration: none;
  }
  .contact-content {
    transform: rotate(-10deg);
    font-size: 1.6em;
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
