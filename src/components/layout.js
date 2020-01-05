/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle = { data.site.siteMetadata.title } />
      <div
        style =
        {
          {
            margin: `0 auto`,
            // maxWidth: 960,
            paddingTop: 0,
          }
        }>
        <main>
          { children }
        </main>
      </div>
      <footer
        style =
        {
          {
            textAlign: `center`,
            borderColor: `#d2bbe8`,
            borderWidth: `2px`,
            borderStyle: `solid`,
            marginTop: `100px`
          }
        }>
        <div
          style =
          {
            {
              paddingTop: `100px`,
              paddingBottom: `10px`
            }
          }>
          Icons made by
          {" "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik">
            Freepik
          </a>
          {" "}
          from
          {" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
