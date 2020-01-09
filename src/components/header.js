import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

import { fonts, breakpoints, colors } from "./design-tokens"

const globalHeader = css`
  background: ${colors.white};
  padding: 1.25rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${breakpoints.md}) {
    padding: 1.25rem 2rem;
  }
`
const logo = css`
  align-self: center;
  & h1 {
    margin: 0;
    padding: 0;
    /* line-height: 0; */
  }
  & a {
    text-decoration: none;
    font-family: ${fonts.headingFont};
    text-transform: uppercase;
    font-size: 1.1rem;
    color: ${colors.gray900};
    letter-spacing: 1px;
    font-weight: 700;
    padding: 0.5rem;
    top: -8px;
    position: relative;
    &:hover {
      color: ${colors.pink700};
    }
  }
`
const globalNav = css`
  align-self: center;
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
  &.open {
    display: block;
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;
    background: ${colors.white};
    z-index: 10;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1rem;
      text-align: center;
      @media (min-width: ${breakpoints.md}) {
        display: inline;
      }
      a {
        font-family: ${fonts.headingFont};
        font-weight: 400;
        font-size: 0.9rem;
        color: ${colors.gray700};
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1rem;
        display: block;
        @media (min-width: ${breakpoints.md}) {
          padding: 0.5rem;
          display: inline-block;
        }
        &.active {
          color: ${colors.pink700};
        }
        &:hover {
          color: ${colors.pink700};
        }
      }
    }
  }
`
const actions = css`
  align-self: center;
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
  a {
    font-family: ${fonts.headingFont};
    font-weight: 400;
    font-size: 0.9rem;
    color: ${colors.gray900};
    text-decoration: none;
    text-transform: uppercase;
    @include text-base;
    letter-spacing: 1px;
    padding: 0.5rem;
    &:hover {
      color: ${colors.pink700};
    }
  }
`
const mobileNavButton = css`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  display: block;
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
  width: 35px;
  height: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  &.open {
    & span:nth-of-type(1) {
      top: 50%;
      opacity: 0;
    }
    & span:nth-of-type(2) {
      top: 10px;
      transform: rotate(45deg);
    }
    & span:nth-of-type(3) {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  & span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${colors.gray900};
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  & span:nth-of-type(1) {
    top: 0px;
  }
  & span:nth-of-type(2) {
    top: 8px;
  }
  & span:nth-of-type(3) {
    top: 16px;
  }
`

const Header = () => (
  <header css={globalHeader}>
    <div css={logo}>
      <h1>
        <Link to="/">thosegeeks_</Link>
      </h1>
    </div>
    <div css={mobileNavButton}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav css={globalNav}>
      <ul>
        <li>
          <Link to="/made/" activeClassName="active" partiallyActive={true}>
            Our Work
          </Link>
        </li>
        <li>
          <Link to="/does/" activeClassName="active">
            What We Do
          </Link>
        </li>
        <li>
          <Link to="/is/" activeClassName="active">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
    <div css={actions}>
      <Link to="/contact/" activeClassName="active">
        Get In Touch
      </Link>
    </div>
  </header>
)

export default Header
