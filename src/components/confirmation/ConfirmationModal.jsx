import React from "react";
import "./confirmation.scss";
import { Link } from "react-router-dom";

const ConfirmationModal = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <h3>Yes, your order was successfully placed</h3>
        <div className="success-icon">
          <span>&#10003;</span> {/* Checkmark symbol */}
        </div>
        <p className="thanks-message">Thanks for putting up this order</p>
        <p className="order-details">
          Your order <strong>#B436245</strong> has successfully been placed.
          You’ll find all the details about your order below, and we’ll send you
          a shipping confirmation email as soon as your order ships. In the
          meantime, you can help spread the gospel of Nigeria Warehouse.
        </p>
        <p className="suggestion">
          Questions? Suggestions? Insightful thoughts?{" "}
          <a href="mailto:support@greengear.com">Shoot us an email.</a>
        </p>
        <Link to={"/"}>
          <button className="back-to-home">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationModal;
