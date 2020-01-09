import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { FiArrowUpRight } from "react-icons/fi"

import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import Cta from "../components/cta"

const workWrapper = css`
  flex-wrap: wrap;
  @media (min-width: 678px) {
    display: flex;
    margin: 3rem auto;
  }
`
const projectStyles = css`
  width: 100%;
  position: relative;
  display: block;
  @media (min-width: 800px) {
    width: 50%;
  }
  @media (min-width: 1100px) {
    width: 33.33333333%;
  }
  img {
    max-width: 100%;
  }
  .thumbnail {
    line-height: 0;
  }
  & h2 {
    text-transform: uppercase;
    color: white;
    margin: 0;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    margin: 0;
    z-index: 1;
    padding: 1rem 3rem 1rem 1rem;
    transition: 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
    @media (min-width: $bp-md) {
      font-size: 2rem;
      left: 2rem;
      bottom: 2rem;
    }
  }
  &:hover {
    h2 {
      bottom: 75px;
    }
    &:after {
      opacity: 0.5;
    }
    .arrow {
      opacity: 1;
      z-index: 1;
    }
  }
  &:after {
    content: "";
    display: block;
    background: #000000;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`
const arrowStyles = css`
  font-size: 3rem;
  color: white;
  opacity: 0;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 1rem;
  transition: 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
  @media (min-width: $bp-md) {
    left: 2rem;
  }
  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`

const Made = ({ data }) => (
  <Layout>
    <PageTitle>Our Work</PageTitle>
    <div css={workWrapper}>
      {data.work.edges.map(({ node }) => (
        <Link
          to={`/made${node.fields.slug}`}
          css={projectStyles}
          key={node.fields.slug}
        >
          <div className="thumbnail">
            <Img fluid={node.frontmatter.hero_image.childImageSharp.fluid} />
          </div>
          <h2>{node.frontmatter.title}</h2>
          <div className="arrow" css={arrowStyles}>
            <FiArrowUpRight />
          </div>
        </Link>
      ))}
    </div>
    <Cta />
  </Layout>
)

export const query = graphql`
  {
    work: allMarkdownRemark(
      filter: {
        fields: { sourceName: { eq: "work" } }
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
            hero_image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Made
