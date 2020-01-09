import React from "react"
import { css } from "@emotion/core"

import { breakpoints } from "./design-tokens"

const wrapper = css`
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0.5rem 0 0 0;
  @media (min-width: ${breakpoints.md}) {
    font-size: 3.25rem;
    margin-bottom: 2rem;
  }
`

const PageTitle = ({ children }) => <h1 css={wrapper}>{children}</h1>

export default PageTitle
