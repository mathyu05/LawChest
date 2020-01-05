import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import UtilitiesSideBar from "../../components/UtilitiesSideBar.js";

const UtilitiesPage = () =>
{
  var navOpen = true;

  const toggleNav = () =>
  {
    let sideNavWidth = null;
    let mainBackgroundColor = null;
    let sideNaveOpenCloseButtonText = null;
    let utilityOptionsVisibility = null

    if (navOpen === true)
    {
      sideNavWidth = "2rem";
      mainBackgroundColor = "white";
      sideNaveOpenCloseButtonText = "&#9776;";
      utilityOptionsVisibility = "hidden";
    }
    else
    {
      sideNavWidth = "16.5rem";
      mainBackgroundColor = "rgba(0,0,0,0.4)";
      sideNaveOpenCloseButtonText = "&times; Close";
      utilityOptionsVisibility = "visible";
    }

    document.getElementById("sideNav").style.width = sideNavWidth;
    document.getElementById("maaain").style.backgroundColor = mainBackgroundColor;
    document.getElementById("openCloseSideBar").innerHTML = sideNaveOpenCloseButtonText;
    document.getElementById("utilityOptions").style.visibility = utilityOptionsVisibility;

    navOpen = !navOpen;
  };

  return (
    <Layout>
      <SEO 
        title="Utilities" />
      <div
        style =
        {
          {
            transition: `backgroundColor .5s`,
            overflow: `auto`
          }
        }>
        <UtilitiesSideBar
          toggleNav = { toggleNav } />
        <div
          id = "maaain"
          style =
          {
            {
              height: `100%`,
              overflow: `auto`,
              minHeight: `300px`
            }
          }>
          <div
            id = "utilityDiv"
            style =
            {
              {
                marginLeft: `10vw`
              }
            }>
            "Choose a utility shown on the leffffffffffffft"
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UtilitiesPage
