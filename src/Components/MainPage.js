import React from "react";
import SideImage from "./SideImage";
import LogoHeader from "../images/logo.png";

const MainPage = () => {
  return (
    <div className="mainpageContainer">
      <div className="sideConatiner">
        <div className="logoHeader">
          <img src={LogoHeader} alt="logo" />
        </div>
        <div className="blogContent">
          <h1 className="blogHeading">
            Discover the
            <span> Best</span> Food and Drinks
          </h1>

          <p className="blogPara">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>

          <button className="exploreBtn">Explore Now!</button>
        </div>
      </div>

      <SideImage />
    </div>
  );
};

export default MainPage;

