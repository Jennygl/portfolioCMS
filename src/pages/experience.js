import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <title>Experience Page</title>

export default ThirdPage
