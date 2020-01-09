import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"
import Cta from "../components/cta"

const Is = ({ data }) => {
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
  query IsQuery {
    markdownRemark(fields: { sourceName: { eq: "is" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Is
