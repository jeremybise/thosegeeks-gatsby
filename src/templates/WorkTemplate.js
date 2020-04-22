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
`
const prevNext = css`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
`

const WorkTemplate = ({ data, pageContext }) => {
  const project = data.mdx
  const { next, prev } = pageContext

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Narrow>
        <div css={breadcrumbs}>
          &larr; <Link to="/made/">Our Work</Link>
        </div>
        <PageTitle>{project.frontmatter.title}</PageTitle>
        <MDXRenderer>{project.body}</MDXRenderer>
        <div css={prevNext}>
          {prev && (
            <Link to={`/made${prev.fields.slug}`}>
              &larr; {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={`/made${next.fields.slug}`}>
              {next.frontmatter.title} &rarr;
            </Link>
          )}
        </div>
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
