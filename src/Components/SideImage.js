import React from "react";
import MainImage from "../images/Group 289.png";
import RedBg from "../images/Vector 1.png";

const SideImage = () => {
  return (
    <div className="sideImageContainer">
      <div className="pizzaRedContainer">
        <img src={MainImage} alt="mainimage" className="pizzaImage" />

        <img src={RedBg} alt="redimage" className="redImage" />
      </div>

      <button className="pizzaBtn">Get In Touch</button>
    </div>
  );
};

export default SideImage;
