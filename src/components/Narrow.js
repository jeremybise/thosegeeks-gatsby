import React from "react"
import { css } from "@emotion/core"

const wrapper = css`
  max-width: 800px;
  margin: auto;
`

const Narrow = ({ children }) => <div css={wrapper}>{children}</div>

export default Narrow
