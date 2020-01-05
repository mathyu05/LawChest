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
          borderColor: `#d2bbe8`,
          borderWidth: `2px`,
          borderStyle: `solid`,
          marginBottom: `1rem`,
          fontSize: `1.5rem`
        }
      }>
      <ul
        style =
        {
          {
            listStyleType: `none`,
            margin: `0`,
            padding: `50px 0 0 0`,
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
                  width: `30px`,
                  margin: `0 10px`,
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
