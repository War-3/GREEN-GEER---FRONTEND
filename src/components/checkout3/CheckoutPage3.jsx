import React, { useState } from "react";
import "./checkout3.scss";
import AddCardModal from "../add-card/AddCardModal";
import Transfer from "../transfer/Transfer";

const CheckoutPage3 = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [paymentOption, setPaymentOption] = useState("card");

  const [isModalOpen, setModalOpen] = useState(false);
  const [isTransferVisible, setIsTransferVisible] = useState(false);

  const handleCloseTransfer = () => {
    setIsTransferVisible(false);
  };

  return (
    <div className="checkout-container">
      {/* 3. PAYMENT METHOD */}
      <div className={`section ${activeSection === 3 ? "active" : ""}`}>
        <div
          className="section-header"
          onClick={() => setActiveSection(3)}
          role="button"
        >
          <input type="checkbox" checked={activeSection === 3} readOnly />
          <span>3. PAYMENT METHOD</span>
        </div>
        {activeSection === 3 && (
          <div className="form payment-method">
            <div className="payment-option">
              <div className="same">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentOption === "card"}
                    onChange={() => setPaymentOption("bank")}
                  />
                </div>
                <h4>Pay With Card</h4>
              </div>
              <div className="cards">
                <p>Pay with your card.</p>
                <div className="card-options">
                  <div>
                    <div>
                      <input type="radio" name="card" />
                    </div>
                    <span>**** **** **** 24568</span>
                  </div>
                  <div className="add-card">
                    <button onClick={() => setModalOpen(true)}>+</button>
                  </div>
                  <AddCardModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                  />
                </div>
              </div>
            </div>

            <div className="payment-option">
              <div className="same">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentOption === "bank"}
                    onChange={() => {
                      setPaymentOption("bank");
                      setIsTransferVisible(true); // Show overlay when bank is selected
                    }}
                  />
                </div>
                <h4>Pay With Bank Transfer</h4>
              </div>
              <div>
                <p>A temporary bank account will be generated for you.</p>
              </div>

              {/* {paymentOption === "bank" && <Transfer />} */}
              {isTransferVisible && <Transfer onClose={handleCloseTransfer} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage3;
