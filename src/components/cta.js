import React from "react"
import { css } from "@emotion/core"

import Button from "./button"
import { colors } from "./design-tokens"

const wrapper = css`
  padding: 4rem;
  background: ${colors.pink700};
  color: ${colors.white};
  text-align: center;
  margin-top: 3rem;
  & h1 {
    margin-bottom: 3rem;
  }
`

const Cta = () => (
  <aside css={wrapper}>
    <h1>Ready to get to work? Let's go!</h1>
    <p>
      <Button to="/contact/" text="Get in Touch" inverted />
    </p>
  </aside>
)

export default Cta
