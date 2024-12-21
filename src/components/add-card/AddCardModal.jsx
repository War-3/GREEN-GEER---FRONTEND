import React from "react";
import "./add-card.scss";

const AddCardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>ADD CARD</h2>
        <p>Please add your correct card details</p>
        <form>
          <div className="input-group">
            <label>Card Number</label>
            <input type="number" placeholder="Enter card number" />
          </div>

          <div className="flex">
            <div className="input-group">
              <label>CVV</label>
              <input type="password" placeholder="***" />
            </div>
            <div className="input-group">
              <label>Expiry Date</label>
              <input type="text" placeholder="DD/MM/YYYY" />
            </div>
          </div>

          <div className="checkbox-group">
            <div>
              <input type="checkbox" id="defaultCard" />
            </div>
            <label htmlFor="defaultCard">Set as default card</label>
          </div>
          <button type="submit" className="add-card-btn">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
