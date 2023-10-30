import React from "react";
import Logo from "../images/logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="img">
        <img src={Logo} alt="logo" />
      </div>

      <div className="contact">
        <h3>Contact Us</h3>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
          <span>example2020@gmail.com</span>
        </p>
        <span className="number">(904) 443-0343</span>
      </div>
      <div className="more">
        <h3>More</h3>
        <ul>
          <li>About Us </li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="social">
        <ul>
          <li>
            <h3>Social Links</h3>
          </li>
          <li>
            <FaInstagram size={21} />
          </li>
          <li>
            <AiOutlineTwitter size={21} />
          </li>
          <li>
            <BiLogoFacebook size={21} />
          </li>
        </ul>
        <div className="copyright">
          <p>© 2023 Food Truck Example</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
