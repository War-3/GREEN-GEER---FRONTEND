import React, { useState } from "react";
import "./checkout.scss";
import { Link } from "react-router-dom";
import CheckoutPage2 from "../checkout2/CheckoutPage2";
import CheckoutPage3 from "../checkout3/CheckoutPage3";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { subtotalState } from "../atoms/subtotal";

const CheckoutPage = () => {
  const [activeSection, setActiveSection] = useState(1); // Default active section

  const subtotal = useRecoilValue(subtotalState);

  //   const location = useLocation();
  //   const { subtotal } = location.state || { subtotal: 0 }; // Default subtotal to 0 if undefined

  console.log("Subtotal on checkout page:", subtotal);

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
            <form className="form">
              <div className="row">
                <div>
                  <label>Customer ID</label>
                  <input type="text" placeholder="Enter your ID" />
                </div>
                <div>
                  <label>Equipment ID</label>
                  <input type="text" placeholder="Enter Equipment ID" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Phone Number</label>
                  <input type="text" placeholder="+234" />
                </div>
                <div>
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Kano</option>
                  </select>
                </div>
              </div>

              <label>Delivery Address</label>
              <input type="text" placeholder="Enter delivery address" />

              <div className="default">
                <div className="default-address">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <label>Set as default address</label>
                </div>

                <div className="actions">
                  <button type="button" className="cancel">
                    Cancel
                  </button>
                  <button type="submit" className="save">
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        <CheckoutPage2 />
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
  );
};

export default CheckoutPage;


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


