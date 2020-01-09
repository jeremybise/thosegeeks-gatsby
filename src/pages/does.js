import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"
import Cta from "../components/cta"

const Does = ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description="ThoseGeeks designs and develops quality, hand-crafted websites using strategy, best practices and the right technology."
      />
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
