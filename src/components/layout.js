import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../css/style.css"
import { Link } from "gatsby-link"
import useNavigation from "../hooks/use-navigation"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

// Layout component that serves as the overall structure for pages
const Layout = ({ children }) => {
  // Fetch site metadata and navigation data using GraphQL queries and hooks
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  const { allContentfulPages } = useNavigation()

  return (
    <>
      {/* Head metadata using React Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta name="description" content={data.site.siteMetadata.description} />

        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      {/* Header section with navigation */}
      <header className="mb-5 pb-1" siteTitle={data.site.siteMetadata.author}>
        <nav className="navbar navbar-expand-md navbar-light position-fixed top-0">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <h2>{data.site.siteMetadata.title} </h2>
            </Link>

            {/* Navbar toggle button for small screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {allContentfulPages.edges.map(edge => (
                  <div className="navitem" key={edge.node.template}>
                    <li className="nav-item">
                      <Link
                        to={`/${edge.node.url}`}
                        key={edge.node.url}
                        className="nav-link"
                      >
                        {edge.node.title}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Main content section */}
      <main>{children}</main>
    </>
  )
}

export default Layout
