import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../css/style.css"
import { Link } from "gatsby-link"
import FooterComp from "./FooterComp"
import useNavigation from "../hooks/use-navigation"
import LoginPage from "./LoginContentful"

const Layout = ({ children }) => {
  const { allContentfulPages } = useNavigation()

  return (
    <>
      <header className="mb-5 pb-1">
        <nav className="navbar navbar-expand-md navbar-light position-fixed top-0">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <p>Jenny</p>
            </Link>
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
                  <div className="navitem" key={edge.node.id}>
                    <li className="nav-item">
                      <Link to={`/${edge.node.url}`} className="nav-link">
                        {edge.node.title}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  CMS
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <LoginPage></LoginPage>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <FooterComp></FooterComp>
    </>
  )
}

export default Layout
