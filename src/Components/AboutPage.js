import React from "react";
import AboutImg from "../images/About.png";
const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="imgContainer">
        <img src={AboutImg} alt="imgAbout" />
      </div>
      <div className="aboutContent">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore
          ex unde eius mollitia minus ab vitae, velit inventore fugiat eos
          officiis ea impedit ut atque exercitationem cumque doloribus eaque.
        </p>
        <button className="readmoreBtn">Read More</button>
      </div>
    </div>
  );
};

export default AboutPage;
