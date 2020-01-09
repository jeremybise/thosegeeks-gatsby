import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"
import Cta from "../components/cta"

const Does = ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <Narrow>
        <PageTitle>{page.frontmatter.title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Narrow>
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query DoesQuery {
    markdownRemark(fields: { sourceName: { eq: "does" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Does
