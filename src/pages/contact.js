import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"

const Contact = ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <Narrow>
        <PageTitle>{page.frontmatter.title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Narrow>
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    markdownRemark(fields: { sourceName: { eq: "contact" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Contact
