import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"

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

const WorkTemplate = ({ data, pageContext }) => {
  const project = data.markdownRemark

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Narrow>
        <div css={breadcrumbs}>
          &larr; <Link to="/docs/">Docs</Link>
        </div>
        <PageTitle>{project.frontmatter.title}</PageTitle>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Narrow>
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default WorkTemplate
