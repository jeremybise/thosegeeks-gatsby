import React from "react"
import { css } from "@emotion/core"

import Button from "./button"

const wrapper = css`
  padding: 4rem;
  background: var(--accent-bg);
  color: var(--text-inverted);
  text-align: center;
  margin-top: 3rem;
  & h1 {
    margin-bottom: 3rem;
    color: var(--text-inverted);
  }
  & p {
    margin-bottom: 0;
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
