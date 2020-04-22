import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"

const Contact = ({ data }) => {
  const page = data.mdx
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description="Get in touch with ThoseGeeks by email, phone or snail mail."
      />
      <Narrow>
        <PageTitle>{page.frontmatter.title}</PageTitle>
        <MDXRenderer>{page.body}</MDXRenderer>
      </Narrow>
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    mdx(fields: { sourceName: { eq: "contact" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Contact
