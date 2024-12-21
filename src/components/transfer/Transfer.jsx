import React, { useState } from "react";
import "./transfer.scss";
import copied from "../../assets/copied.svg";
import ConfirmationModal from "../confirmation/ConfirmationModal";

const Transfer = ({ onClose }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmTransfer = () => {
    setIsConfirmed(true); // Show the confirmation modal
    console.log(confirm);
  };

  return (
    <>
      {!isConfirmed ? (
        <div className="overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Pay With Bank Transfer</h3>
            </div>
            <p className="instruction">
              Make a transfer with the details provided below
            </p>
            <div className="bank-details">
              <p>Bank Name</p>
              <div className="copy">
                <div>
                  <span>Access Bank</span>
                </div>
                <button>Change bank</button>
              </div>
              <p>Account Number</p>
              <div className="copy">
                <div>
                  <span>9173634242</span>
                </div>
                <img src={copied} alt="copy-icon" />
              </div>
              <p>Amount</p>
              <div className="copy">
                <div>
                  <span>₦60,000</span>
                </div>
                <img src={copied} alt="copy-icon" />
              </div>
            </div>
            <p className="info">
              Search for Access bank on your bank app. Use this account for this
              transaction only.
            </p>
            <div className="footer">
              <span>Expires in 50 mins</span>
              <button className="confirm-btn" onClick={handleConfirmTransfer}>
                I’ve Made The Transfer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ConfirmationModal onClose={onClose} />
      )}
    </>
  );
};

export default Transfer;
