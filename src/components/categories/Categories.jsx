import React from "react";
import "./categories.scss";
import Equipments from "../equipments/Equipments";

const Categories = () => {
  return (
    <div id="Categories">
      <div className="section">
        <div className="div1">
          <h4>Tractors</h4>
          <a href="">Tillage Equipment</a>
          <a href="">Harvesting Equipment</a>
          <a href="">Irrigation Equipment</a>
          <a href="">Soil Preparation</a>
          <a href="">Grain Storage</a>
          <a href="">Utility Vehicles</a>
          <a href="">Precision Farming</a>
        </div>

        <div className="div2">
          <div className="empower">
            <h5>Empowering Your Industry with Precision Machinery</h5>
            <p>
              Unleash the Power of Innovation with GreenGear, your premier
              destination for cutting-edge machinery and equipment.
            </p>
          </div>

          <div className="image6">
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731736410/image_6_vadiss.png"
              alt="tractor"
            />
          </div>
        </div>
      </div>
      <Equipments />
    </div>
  );
};

export default Categories;
