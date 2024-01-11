import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import AboutJenny from "../components/AboutJenny"

const HomeTemplate = () => (
  <Layout>
    <AboutJenny></AboutJenny>
    <h2>home-template</h2>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Jenny Grinde Lensing</title>

export default HomeTemplate
