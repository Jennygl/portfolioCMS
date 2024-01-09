import React from "react"
import styled from "styled-components"
import LoginPage from "./LoginContentful"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../css/style.css"

function FooterComp() {
  return (
    <Footer className="mt-1 py-3 text-center position-fixed bottom-0 start-0 d-flex flex-column flex-sm-row">
      <div className="col">Jenny Grinde Lensingf</div>
      <div className="col">
        {/* <p className="text-dark"> */}
        <a href="mailto:jennygrinde@gmail.com" className="link-dark">
          jennygrinde@gmail.com
        </a>
        {/* </p> */}
      </div>
      <div className="col">
        <p>Jenny Grinde Lensingf</p>
      </div>
    </Footer>
  )
}

export default FooterComp

const Footer = styled.div`
  background-color: var(--purple);
  height: 50px;
  width: 100%;
`
