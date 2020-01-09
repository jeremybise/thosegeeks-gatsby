import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { colors, fonts } from "../components/design-tokens"

const Button = props => {
  const color = props.inverted ? colors.white : colors.pink700
  const hoverColor = props.inverted ? colors.pink200 : colors.pink500

  const buttonStyles = css`
    padding: 0.75rem 1rem;
    font-family: ${fonts.headingFont};
    text-transform: uppercase;
    border: 1px solid ${color};
    color: ${color};
    &:hover {
      color: ${hoverColor};
      border: 1px solid ${hoverColor};
    }
  `
  return (
    <Link to={props.to} css={buttonStyles}>
      {props.text}
    </Link>
  )
}

export default Button
