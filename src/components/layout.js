import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css, Global } from "@emotion/core"

import Header from "./header"
import "./layout.css"
import { breakpoints, colors, fonts } from "./design-tokens"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const contentWrapper = css`
    max-width: 1000px;
    margin: auto;
    padding: 3rem 1rem;
    & h2 {
      margin-top: 2rem;
      @media (min-width: ${breakpoints.md}) {
        margin-top: 4rem;
      }
    }
  `
  const footerStyles = css`
    background: ${colors.white};
    text-align: center;
    padding: 1rem;
    font-size: 0.8rem;
    color: ${colors.gray700};
  `

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${colors.gray200};
            font-family: ${fonts.bodyFont};
            @media (min-width: ${breakpoints.md}) {
              font-size: 22px;
            }
          }
          a {
            text-decoration: none;
            color: ${colors.pink700};
            font-weight: bold;
            &:hover {
              color: ${colors.pink500};
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${fonts.headingFont};
            text-transform: uppercase;
          }
          p,
          li,
          ol {
            line-height: 1.625;
          }
          blockquote {
            font-size: 1.6rem;
            font-family: ${fonts.headingFont};
            position: relative;
            margin: 2rem 0;
            padding-left: 3rem;
            @media (min-width: ${breakpoints.md}) {
              margin: 3rem 0;
            }
            p {
              line-height: 2.1rem;
            }
            &:before {
              content: open-quote;
              position: absolute;
              left: 0;
              top: 0px;
              font-size: 6rem;
              color: ${colors.pink700};
              font-family: ${fonts.headingFont};
            }
            cite {
              font-size: 1rem;
              color: ${colors.gray700};
              display: block;
              font-weight: 400;
              font-style: normal;
              margin-top: 0.5rem;
              line-height: 1.3em;
            }
          }
          .gatsby-resp-image-figcaption {
            margin-top: 1rem;
            font-size: 0.8rem;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={contentWrapper}>
        <main>{children}</main>
      </div>
      <footer css={footerStyles}>
        © {new Date().getFullYear()},{` `}
        ThoseGeeks, LLC. All rights reserved.
      </footer>
    </>
  )
}

export default Layout
