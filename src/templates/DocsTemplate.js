import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import { fonts } from "../components/design-tokens"
import Layout from "../components/layout"
import Narrow from "../components/Narrow"
import PageTitle from "../components/PageTitle"
import Cta from "../components/cta"

const breadcrumbs = css`
  margin-bottom: 2rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-family: ${fonts.headingFont};
  text-align: center;
`

const WorkTemplate = ({ data, pageContext }) => {
  const project = data.mdx

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Narrow>
        <div css={breadcrumbs}>
          &larr; <Link to="/docs/">Docs</Link>
        </div>
        <PageTitle>{project.frontmatter.title}</PageTitle>
        <MDXRenderer>{project.body}</MDXRenderer>
      </Narrow>
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default WorkTemplate
