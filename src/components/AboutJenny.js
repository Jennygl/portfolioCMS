import { graphql, useStaticQuery } from "gatsby"
import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const AboutJenny = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            id
            description {
              description
            }
            image {
              gatsbyImage(width: 150)
            }
            image2 {
              gatsbyImage(width: 300)
            }
            name
            firstName
            jobTitle
          }
        }
      }
    }
  `)

  return (
    <>
      <AboutSection>
        <About>
          <div className="mx-5">
            {data.allContentfulAbout.edges.map(edge => {
              return (
                <div
                  //   className="border m-2 h-100 py-3 text-center"
                  key={edge.node.id}
                >
                  <div className="circle1 ">
                    <LogoTitle>
                      <FETitle>{edge.node.jobTitle}</FETitle>

                      <JennyTitle>{edge.node.firstName}</JennyTitle>
                    </LogoTitle>

                    {/* <h4 className="pb-3" id="AboutName">
                  {edge.node.name}
                </h4> */}
                  </div>
                  <div className="circle2 align-self-center about-container">
                    <p className="about-text">
                      {edge.node.description.description}
                    </p>
                  </div>
                  <GatsbyImage
                    className="my-3"
                    id="AboutImage"
                    alt={edge.node.title}
                    image={edge.node.image.gatsbyImage}
                  ></GatsbyImage>
                  {/* <div>
                    <GatsbyImage
                      className="my-3"
                      id="AboutImage"
                      alt={edge.node.title}
                      image={edge.node.image2.gatsbyImage}
                    ></GatsbyImage>
                  </div> */}
                </div>
              )
            })}
            {/* </div> */}
          </div>
        </About>
      </AboutSection>
    </>
  )
}

export default AboutJenny

const AboutSection = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: var(--main-bg-color);
  padding: 35vh 0 0 0;
  @media (max-width: 992px) {
    padding-top: 5vh;
  }
`
const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 0 5vw;
  width: 50vw;
  padding: 1em;
  @media (max-width: 992px) {
    width: 90vw;
  }
  .about-container {
    display: flex;
  }
  .about-text {
    text-align: start;
    /* margin-left: 1em; */
    /* width: 40vw; */
    font-family: "Courier New", Courier, monospace;
    color: var(--green);
  }
  .about-title {
    text-align: center;
    margin: 1em 1em 1em 1em;
  }
  .MeImage {
    /* align-items: center; */
    padding-top: auto;
    /* padding-bottom: auto; */
  }
  #AboutImage {
    width: 150px;
    height: 150px;
  }
`
const LogoTitle = styled.p`
  font-family: "Poiret One", sans-serif;
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18em;
  line-height: 130%;
  padding: 10vh 0 5vh 0;
  /* border: 1px solid red; */
`
const FETitle = styled.span`
  font-size: 1.5em;
  padding-left: 2em;
  color: var(--green);
  /* justify-content: end; */
`
const JennyTitle = styled.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`
