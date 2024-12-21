import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="section">
        <div>
          <p>Copyright ©greengear 2024 All rights reserved.</p>
        </div>
        <div className="socials">
          <div className="facebook">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="twitter">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="linkedin">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="instagram">
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
