import React, { useState } from "react";
import "./checkout.scss";

import { useRecoilValue } from "recoil";
import { subtotalState } from "../atoms/subtotal";
import CheckoutPage3 from "../checkout3/CheckoutPage3";
import { states } from "./states.json"; // Assuming you have the correct JSON file for states.

const CheckoutPage = () => {
  const [activeSection, setActiveSection] = useState(1); // Default active section
  const [formData, setFormData] = useState({
    customerId: "",
    equipmentId: "",
    phoneNumber: "",
    state: "",
    deliveryAddress: "",
    isDefaultAddress: false,
  });
  const [deliveryOption, setDeliveryOption] = useState(""); // New state for delivery option

  const subtotal = useRecoilValue(subtotalState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add logic for form submission here if necessary
  };

  return (
    <div id="CheckoutPage">
      <div>
        {/* 1. CUSTOMER ADDRESS */}
        <div className={`section ${activeSection === 1 ? "active" : ""}`}>
          <div
            className="section-header"
            onClick={() => setActiveSection(1)}
            role="button"
          >
            <input type="checkbox" checked={activeSection === 1} readOnly />
            <span>1. CUSTOMER ADDRESS</span>
          </div>
          {activeSection === 1 && (
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div>
                  <label>Customer ID</label>
                  <input
                    type="text"
                    placeholder="Enter your ID"
                    name="customerId"
                    value={formData.customerId}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Equipment ID</label>
                  <input
                    type="text"
                    placeholder="Enter Equipment ID"
                    name="equipmentId"
                    value={formData.equipmentId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="+234"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option>Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label>Delivery Address</label>
              <input
                type="text"
                placeholder="Enter delivery address"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
              />

              <div className="default">
                <div className="default-address">
                  <div>
                    <input
                      type="checkbox"
                      name="isDefaultAddress"
                      checked={formData.isDefaultAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <label>Set as default address</label>
                </div>
              </div>

              {/* 2. DELIVERY DETAILS */}
              <div className="section-header">
                <span>2. DELIVERY DETAILS</span>
              </div>

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

                <div>
                  <div>
                
                    <span>
                      <b>Greengear pickup station</b>
                      <br />
                      Shop 2 Kiki shopping complex, Ajara dokoh Badagry roundabout,
                      Lagos Nigeria.
                    </span>  <tr><input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "pickup"}
                      onChange={() => setDeliveryOption("pickup")}
                    /></tr>
                  </div>

                  <div >
                    
                    <span>
                      <b>Greengear pickup station</b>
                      <br />
                      Kiki shopping complex, Ajara dokoh Badagry roundabout, Lagos
                      Nigeria.
                    </span><tr><input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "pickup2"}
                      onChange={() => setDeliveryOption("pickup2")}
                    /></tr>
                  </div>
                </div>

                
                <div>
                
                  <span><b>Door Step Delivery</b>
                  <br />Get your equipment delivered to your door step</span>
                  <tr> <input
                    type="radio"
                    name="delivery"
                    checked={deliveryOption === "doorstep"}
                    onChange={() => setDeliveryOption("doorstep")}
                  /></tr>
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
                <button>Save & Proceed to Payment</button>
              </div>
            </form>
          )}
        </div>

        <div className="checkout-container">
          {/* <CheckoutPage2 /> */}
          <CheckoutPage3 />
        </div>

        <div className="summary">
          <h5>Cart Summary</h5>

          <div className="sub">
            <div>
              <p>Sub-Total</p>
            </div>
            ₦{subtotal.toFixed(2)}
          </div>
          <p>Delivery fees not included yet</p>

          <div>
            <button>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;




// {/* 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Added import
// import "./Checkout.css";

// const Checkout = () => {
//   // const [error, setError] = useState("")
//   const [apiError, setApiError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     customer_id: '',
//     equipment_id: '',
//     location: {
//       contactNumber: '',
//       state: '',
//       address: ''
//     },
//     deliveryDetail: {
//       stationPickUp: true,
//       doorPickUp: ''
//     },
//     rental_date: '',
//     return_date: ''
//   });


//     // Function to get the current date and time in the required format (yyyy-MM-ddTHH:mm)
//     const getCurrentDateTime = () => {
//       const now = new Date();
//       const year = now.getFullYear();
//       const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//       const day = String(now.getDate()).padStart(2, '0');
//       const hours = String(now.getHours()).padStart(2, '0');
//       const minutes = String(now.getMinutes()).padStart(2, '0');
      
//       return `${year}-${month}-${day}T${hours}:${minutes}`;
//     };

//      // Set initial state values for rental_date and return_date to the current date and time
//   useEffect(() => {
//     setFormData((prevData) => ({
//       ...prevData,
//       rental_date: getCurrentDateTime(),
//       return_date: getCurrentDateTime(),
//     }));
//   }, []);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const nameParts = name.split('.');
    
//     if (nameParts.length > 1) {
//       setFormData(prevData => ({
//         ...prevData,
//         [nameParts[0]]: {
//           ...prevData[nameParts[0]],
//           [nameParts[1]]: value
//         }
//       }));
//     } else {
//       setFormData(prevData => ({
//         ...prevData,
//         [name]: value
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   setIsSubmitting(true);
//   setApiError("");
//     try {
//       const response = await fetch("http://127.0.0.1:8040/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({     
//           customer_id: formData.customer_id,
//           equipment_id: formData.equipment_id,
//           location: formData.location,
//           deliveryDetail: {
//             stationPickUp: formData.deliveryDetail.stationPickUp,
//             doorPickUp: formData.deliveryDetail.doorPickUp
//           },
//           rental_date: formData.rental_date,
//           return_date: formData.return_date
//         }),
//       });

    
//       if (response.status === 200 || response.status === 201) {
//         const data = await response.json();
//        alert(data.message || "Rental request not submitted successfully!.");
//         // Navigate to the homepage after successful submission
//         navigate("/"); 
//       } else if (response.status === 400 || response.status === 404){
//         const data = await response.json();
//         alert(data.message || "An error occurred while submitting the rental request.");
//       }
//     } catch (error) {
//       // Handle unexpected errors
//       alert("Something went wrong. Please try again later.");
//     } finally {
//       setIsSubmitting(false); // Stop loading state
//     }
//   };

//   return (
//     <div>
//       <h2>Rent Now</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Customer ID</label>
//           <input
//             type="text"
//             name="customer_id"
//             value={formData.customer_id}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Equipment ID</label>
//           <input
//             type="text"
//             name="equipment_id"
//             value={formData.equipment_id}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <h3>Location</h3>
//         <div>
//           <label>Contact Number</label>
//           <input
//             type="text"
//             name="location.contactNumber"
//             value={formData.location.contactNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>State</label>
//           <input
//             type="text"
//             name="location.state"
//             value={formData.location.state}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Address</label>
//           <input
//             type="text"
//             name="location.address"
//             value={formData.location.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <h3>Delivery Details</h3>
//         <div>
//           <label>Station Pick-Up</label>
//           <input
//             type="checkbox"
//             name="deliveryDetail.stationPickUp"
//             checked={formData.deliveryDetail.stationPickUp}
//             onChange={(e) => handleChange({
//               target: {
//                 name: e.target.name,
//                 value: e.target.checked
//               }
//             })}
//           />
//         </div>

//         {/* Door Pick-Up Section */}
//         {!formData.deliveryDetail.stationPickUp && (
//           <div>
//             <label>Door Pick-Up Location</label>
//             <select
//               name="deliveryDetail.doorPickUp"
//               value={formData.deliveryDetail.doorPickUp}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select a location</option>
//               <option value="Ijebu">Ijebu</option>
//               <option value="Ore">Ore</option>
//               <option value="Ibadan">Ibadan</option>
//             </select>
//           </div>
//         )}

//         <h3>Rental Dates</h3>
//         <div>
//           <label>Rental Date</label>
//           <input
//             type="datetime-local"
//             name="rental_date"
//             value={formData.rental_date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Return Date</label>
//           <input
//             type="datetime-local"
//             name="return_date"
//             value={formData.return_date}
//             onChange={handleChange}
//             required
//           />
//         </div>                
//         <button type="submit"
//         name="Submit Rent Now"
//         disabled={isSubmitting}
//               >
//         {isSubmitting ? "Submitting..." : "Submit Rent Now"}</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;

//  */}
