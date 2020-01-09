import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import { colors } from "./design-tokens"

const wrapper = css`
  padding: 4rem;
  background: ${colors.pink700};
  color: ${colors.white};
  text-align: center;
`

const Cta = () => (
  <aside css={wrapper}>
    <h1>Ready to get to work? Let's go!</h1>
    <p>
      <Link to="/contact/">Get in Touch</Link>
    </p>
  </aside>
)

export default Cta
