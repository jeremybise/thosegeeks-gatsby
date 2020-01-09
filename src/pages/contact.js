import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"

const Contact = ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description="Get in touch with ThoseGeeks by email, phone or snail mail."
      />
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
