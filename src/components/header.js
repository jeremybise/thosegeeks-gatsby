import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const globalHeader = css`
  background: var(--header-bg);
  padding: 1.25rem 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(5px);
  @media (min-width: 767px) {
    padding: 1rem;
  }
`
const logo = css`
  align-self: center;
  & h1 {
    margin: 0;
    padding: 0;
  }
  & a {
    text-decoration: none;
    font-family: var(--heading-font);
    text-transform: uppercase;
    font-size: 1.1rem;
    color: var(--text);
    letter-spacing: 1px;
    font-weight: 700;
    padding: 0.5rem;
    top: -8px;
    position: relative;
    &:hover {
      color: var(--accent);
    }
  }
`
const globalNav = css`
  align-self: center;
  display: none;
  @media (min-width: 767px) {
    display: block;
  }
  &.open {
    display: block;
    position: absolute;
    left: 0;
    top: 65px;
    width: 100%;
    background: var(--bg-light);
    z-index: 10;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1rem;
      text-align: center;
      @media (min-width: 767px) {
        display: inline;
      }
      a {
        font-family: var(--heading-font);
        font-weight: 400;
        font-size: 0.9rem;
        color: var(--text-light);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1rem;
        display: block;
        @media (min-width: 767px) {
          padding: 0.5rem;
          display: inline-block;
        }
        &.active {
          color: var(--accent-hover);
        }
        &:hover {
          color: var(--accent-hover);
        }
      }
    }
  }
`
const actions = css`
  align-self: center;
  display: none;
  @media (min-width: 767px) {
    display: block;
  }
  a {
    font-family: var(--heading-font);
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--text);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.5rem;
    &.active {
      color: var(--accent-hover);
    }
    &:hover {
      color: var(--accent-hover);
    }
  }
`
const mobileNavButton = css`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: block;
  outline: none;
  @media (min-width: 767px) {
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
    background: var(--text);
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

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header css={globalHeader}>
      <div css={logo}>
        <h1>
          <Link to="/">thosegeeks_</Link>
        </h1>
      </div>
      <button
        css={mobileNavButton}
        onClick={toggleNav}
        className={navOpen ? "open" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav css={globalNav} className={navOpen ? "open" : ""}>
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
}

export default Header
