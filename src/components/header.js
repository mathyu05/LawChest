import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image.js";

const Header = ({ siteTitle }) =>
{
  return (
    <header
      style =
      {
        {
          backgroundColor: `#d2bbe8`,
          marginBottom: `1rem`
        }
      }>
      <ul
        style =
        {
          {
            listStyleType: `none`,
            margin: `0`,
            padding: `0`,
            overflow: `hidden`
          }
        }>
        <li
          style =
          {
            {
              float: `left`,
              marginBottom: `0`
            }
          }>
          <Link
            to = "/"
            style = 
            {
              {
                display: `block`,
                color: `black`,
                textAlign: `center`,
                padding: `14px 16px`,
                textDecoration: `none`,
                fontWeight: `bold`
              }
            }
          >
            <div
              style =
              {
                {
                  float: `left`,
                  width: `1rem`,
                  marginRight: `10px`,
                  padding: `auto`
                }
              }>
              <Image />
            </div>
            { siteTitle }
          </Link>
        </li>
        <li
          style =
          {
            {
              float: `left`,
              marginBottom: `0`
            }
          }>
          <Link
            to = "/utilities"
            style = 
            {
              {
                display: `block`,
                color: `black`,
                textAlign: `center`,
                padding: `14px 16px`,
                textDecoration: `none`
              }
            }>
            Utilities
          </Link>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
