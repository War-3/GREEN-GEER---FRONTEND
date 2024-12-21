import React from "react";
import "./footer1.scss";
import policy from "../../assets/policy.svg";
import delivery from "../../assets/delivery.svg";
import station from "../../assets/station.svg";

const Footer1 = () => {
  return (
    <div id="Footer1">
      <div className="section">
        <div className="return same">
          <img src={policy} alt="box" />
          <div>
            <h5>Return Policy</h5>
            <p>Money Back Guaranteed</p>
          </div>
        </div>

        <div className="delivery same">
          <img src={delivery} alt="box" />
          <div>
            <h5>Return Policy</h5>
            <p>Money Back Guaranteed</p>
          </div>
        </div>

        <div className="station same">
          <img src={station} alt="box" />
          <div>
            <h5>Return Policy</h5>
            <p>Money Back Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
