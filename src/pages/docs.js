import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const Docs = ({ data }) => (
  <Layout>
    <SEO title="Docs" />
    <PageTitle>Docs</PageTitle>
    <div>
      {data.docs.edges.map(({ node }) => (
        <Link to={`/docs${node.fields.slug}`} key={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
        </Link>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    docs: allMarkdownRemark(
      filter: {
        fields: { sourceName: { eq: "docs" } }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Docs
