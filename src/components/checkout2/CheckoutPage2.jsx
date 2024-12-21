import React, { useState } from "react";
import "./checkout2.scss";

const CheckoutPage2 = () => {
  const [activeSection, setActiveSection] = useState(1); // Default active section
  const [deliveryOption, setDeliveryOption] = useState("pickup"); // Delivery Option

  return (
    <div className="checkout-container">
      {/* 2. DELIVERY DETAILS */}
      <div className={`section ${activeSection === 2 ? "active" : ""}`}>
        <div
          className="section-header"
          onClick={() => setActiveSection(2)}
          role="button"
        >
          <input type="checkbox" checked={activeSection === 2} readOnly />
          <span>2. DELIVERY DETAILS</span>
        </div>
        {activeSection === 2 && (
          <div className="delivery-details">
            <h4>Station Pick-up</h4>
            <p>Pick up from any of our stations near you.</p>

            <div className="row">
              <label>Select a pick-up station</label>
              <select>
                <option>Lagos</option>
                <option>Abuja</option>
              </select>
              <div type="button" className="location-btn">
                Use my current location
              </div>
            </div>

            <div className="pickup-options">
              <div>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === "pickup"}
                  onChange={() => setDeliveryOption("pickup")}
                />
                <span>
                  <b>Greengear pickup station</b>
                  <br />
                  Shop 2 Kiki shopping complex, Ajara dokoh Badagry roundabout,
                  Lagos Nigeria.
                </span>
              </div>
              <div>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === "pickup2"}
                  onChange={() => setDeliveryOption("pickup2")}
                />
                <span>
                  <b>Greengear pickup station</b>
                  <br />
                  Kiki shopping complex, Ajara dokoh Badagry roundabout, Lagos
                  Nigeria.
                </span>
              </div>
            </div>

            <h4>Door Step Delivery</h4>
            <div>
              <input
                type="radio"
                name="delivery"
                checked={deliveryOption === "doorstep"}
                onChange={() => setDeliveryOption("doorstep")}
              />
              <span>Get your equipment delivered to your door step</span>
            </div>

            {deliveryOption === "doorstep" && (
              <div className="doorstep-info">
                <div className="item-card">
                  <img
                    src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731659617/tractor_hednus.png"
                    alt="tractor"
                  />
                  <div>
                    <p>John Dey Tractor</p>
                    <span>Qty: 1</span>
                  </div>
                </div>
              </div>
            )}
            <button>Confirm Details</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage2;
