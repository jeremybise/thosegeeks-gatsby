import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css, Global } from "@emotion/core"

import Header from "./header"
import "./system.css"
import "./layout.css"

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
    padding: 8rem 1rem;
    & h2 {
      margin-top: 2rem;
      @media (min-width: var(--bp-md)) {
        margin-top: 3rem;
      }
    }
  `
  const footerStyles = css`
    background: var(--bg-light);
    text-align: center;
    padding: 1rem;
    font-size: 0.8rem;
    color: var(--text-light);
  `

  return (
    <>
      <Global
        styles={css`
          body {
            color: var(--text);
            background: var(--bg);
            font-family: var(--body-font);
            @media (min-width: var(--bp-md)) {
              font-size: 22px;
            }
          }
          a {
            text-decoration: none;
            color: var(--accent);
            font-weight: bold;
            transition: 0.3s linear;
            &:hover {
              color: var(--accent-hover);
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--heading-font);
            text-transform: uppercase;
            color: var(--text-light);
          }
          p,
          li,
          ol {
            line-height: 1.625;
          }
          blockquote {
            font-size: 1.6rem;
            font-family: var(--heading-font);
            position: relative;
            margin: 2rem 0;
            padding-left: 3rem;
            @media (min-width: var(--bp-md)) {
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
              color: var(--accent);
              font-family: var(--heading-font);
            }
            cite {
              font-size: 1rem;
              color: var(--text-light);
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
