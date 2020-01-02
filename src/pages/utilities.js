import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PenaltyUnitsCalculator from "../components/PenaltyUnitsCalculator";

const UtilitiesPage = () =>
{
  return (
    <Layout>
      <SEO 
        title="Utilities" />
      <ul
        style =
        {
          {
            listStyleType: `none`,
            margin: `0`,
            padding: `0`,
            width: `25%`,
            backgroundColor: `#d2bbe8`,
            height: `100%`,
            overflow: `auto`
          }
        }>
        <li>
          Penalty Units Calculator
        </li>
      </ul>
      <div
        style = 
        {
          {
            marginLeft: `25%`,
            padding: `1px 16px`
          }
        }>
        <PenaltyUnitsCalculator />
      </div>
    </Layout>
  );
}

export default UtilitiesPage
