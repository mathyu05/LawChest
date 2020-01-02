import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () =>
{
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO 
        title="Home" />
      <h1
        style =
        {
          {
            textAlign: `center`
          }
        }>
        { data.site.siteMetadata.description }
      </h1>
      <div
        style =
        {
          {
            maxWidth: `150px`,
            margin: `1.45rem auto`
          }
        }>
          <Image />
      </div>
      <div
        style =
        {
          {
            height: `60px`,
            width: `200px`,
            margin: `0 auto`,
            borderRadius: `5px`,
            padding: `16px 16px`,
            backgroundColor: `#d2bbe8`,
            textAlign: `center`,
            fontWeight: `bold`,
            transition: `all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s`
          }
        }>
        <Link
          to = "/utilities"
          style =
          {
            {
              textDecoration: `none`,
              color: `black`
            }
          }>
          Find A Utility
          <svg
            fill = "currentColor"
            preserveAspectRatio = "xMidYMid meet"
            height = "1em"
            width = "1em"
            viewBox = "0 0 40 40"
            style = 
            {
              {
                verticalAlign: `middle`,
                marginLeft: `0.2em`
              }
            }>
            <g>
              <path
                d = "m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z">
              </path>
            </g>
          </svg>
        </Link>
      </div>
    </Layout>
  );
}

export default IndexPage
