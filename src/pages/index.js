import React from "react"
// import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cta from "../components/cta"
import { breakpoints } from "../components/design-tokens"

const masthead = css`
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0;
  margin: 2rem 0;
  @media (min-width: ${breakpoints.md}) {
    margin: 2rem 0 3rem 0;
    font-size: 3.25rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 css={masthead}>
      WE DESIGN, BUILD AND HOST QUALITY, HAND-CRAFTED, PERFORMANT WEBSITES.
    </h1>
    <p>Work list here...</p>
    <p>More work link here...</p>
    <Cta />
  </Layout>
)

export default IndexPage
