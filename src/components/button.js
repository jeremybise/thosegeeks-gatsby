import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Button = props => {
  const buttonStyles = css`
    padding: 0.75rem 1rem;
    font-family: var(--heading-font);
    text-transform: uppercase;
    border: 1px solid ${props.inverted ? "var(--white)" : "var(--accent)"};
    color: ${props.inverted ? "var(--white)" : "var(--accent)"};
    &:hover {
      color: ${props.inverted ? "var(--text-inverted)" : "var(--text)"};
      border: 1px solid ${props.inverted ? "var(--text)" : "var(--text)"};
      transform: scale(1.2);
    }
  `
  return (
    <Link to={props.to} css={buttonStyles}>
      {props.text}
    </Link>
  )
}

export default Button
