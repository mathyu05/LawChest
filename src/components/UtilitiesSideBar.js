import React from "react";
import { Link } from "gatsby"

import "./UtilitiesSideBar.css"


const UtilitiesSideBar = (props) =>
{
  return (
    <div
      id = "sideNav"
      style =
      {
        {
          overflowX: `hidden`,
          transition: `0.5s`,
          float: `left`,
          width: `16.5rem`,
          height: `calc(100% + 80px)`,
          borderColor: `#d2bbe8`,
          borderWidth: `2px`,
          borderStyle: `solid`
        }
      }>
      {
        
      }
      <div
        id = "openCloseSideBar"
        className = "onlyMobile"
        onClick = { props.toggleNav }
        style =
        {
          {
            padding: `8px 8px 8px 8px`,
            textDecoration: `none`,
            color: `#818181`,
            display: `block`,
            transition: `0.3s`,
            cursor: `pointer`
          }
        }>
        &times; Close
      </div>
      <div
        id = "utilityOptions">
        <Link
          to = "/utilities/penaltyunitscalculator"
          // onClick = { props.showPenaltyUnitsCalculator }
          style =
          {
            {
              padding: `8px 8px 8px 8px`,
              textDecoration: `none`,
              color: `#818181`,
              display: `block`,
              transition: `0.3s`
            }
          }>
          Penalty Unit Calculator
        </Link>
        <div
          // onClick = { props.showPenaltyUnitsCalculator }
          style =
          {
            {
              padding: `8px 8px 8px 8px`,
              textDecoration: `none`,
              color: `#818181`,
              display: `block`,
              transition: `0.3s`,
              cursor: `pointer`
            }
          }>
          Other Thingy
        </div>
      </div>
    </div>
  );
}

export default UtilitiesSideBar