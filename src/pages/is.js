import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"
import Cta from "../components/cta"

const Is = ({ data }) => {
  const page = data.mdx
  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
        description="ThoseGeeks was founded by Jeremy Bise and Clint Harris. We work with small to medium businesses, nonprofits and agencies."
      />
      <Narrow>
        <PageTitle>{page.frontmatter.title}</PageTitle>
        <MDXRenderer>{page.body}</MDXRenderer>
      </Narrow>
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query IsQuery {
    mdx(fields: { sourceName: { eq: "is" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Is
