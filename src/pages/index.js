import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import AboutJenny from "../components/AboutJenny"

const IndexPage = () => (
  <Layout>
    <AboutJenny></AboutJenny>
  </Layout>
)

export const Head = () => <title>Jenny Grinde Lensing</title>

export default IndexPage
