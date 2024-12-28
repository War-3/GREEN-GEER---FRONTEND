// import React, { useState, useEffect } from "react";
// import "./description.scss";
// import StarRating from "../star-rating/StarRating";
// import { cartsData } from "../atom/carts";
// import { Link, useParams } from "react-router-dom";
// import EquipmentList from "../equipments/EquipmentList" 


// const Description = () => {
//   let [carts, setCarts] = useRecoilState(cartsData);
  
//     function addToCart(data) {
//       if (carts.find((x) => x.id === data.id)) {
//         console.log("already added to cart");
//       } else {
//         console.log("added to cart");
  
//         setCarts([...carts, data]);
//       }
//     }

//   const { _id } = useParams(); // Assuming the equipment ID is passed in the URL.
//   const [equipment, setEquipment] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch equipment details from the API
//     const fetchEquipmentDetails = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8040/api/equipment/:id/${_id}`);
//         setEquipment(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load equipment details.");
//         setLoading(false);
//       }
//     };

//     fetchEquipmentDetails();
//   }, [_id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div id="Description">
//       <div className="section1">
//         <img
//           src={equipment.image}
//           alt={equipment.name}
//           loading="lazy"
//         />
//       </div>

//       <div className="john">
//         <span>
//           <h3>{equipment.name}</h3>
//         </span>
//         <span>
//           <button>{equipment.availability ? "Available" : "Unavailable"}</button>
//         </span>
//       </div>

//       <div className="rent">
//         <Link to={"/Checkout"}>
//           <div className="first">
//             <button>Rent Now</button>
//           </div>
//         </Link>

//         <div className="second">
//           <div>
//             <button className="add" onClick={() => addToCart(EquipmentList)}>Add To Cart</button>
//           </div>
//         </div>
//       </div>

//       <div className="section2">
//         <div className="div1">
//           <h3>Product Details</h3>
//           <p>{equipment.description}</p>
//         </div>

//         <div className="div2">
//           <div className="specification">
//             <h4>Specifications:</h4>
//             <ul>
//               {equipment.specifications.map((spec, index) => (
//                 <li key={index}>
//                   <b>{spec.label}:</b> {spec.value}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="features">
//             <h4>Features:</h4>
//             <ul>
//               {equipment.features.map((feature, index) => (
//                 <li key={index}>
//                   <b>{feature.label}:</b> {feature.value}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="section3">
//         <h3>Verified Customer Feedback</h3>
//         <hr />

//         <div className="div3">
//           <div className="rating">
//             <h5>RATINGS</h5>
//             <div className="verified">
//               <p>
//                 <b>{equipment.rating.average}/5</b>
//               </p>
//               <div>
//                 <StarRating totalStars={5} currentRating={equipment.rating.average} />
//               </div>
//               <p>{equipment.rating.count} Verified Ratings</p>
//             </div>
//           </div>

//           <div className="comments">
//             <h5>Comments from Verified Customers</h5>
//             {equipment.reviews.map((review, index) => (
//               <div className="review" key={index}>
//                 <h6>{review.name}</h6>
//                 <div>
//                   <StarRating totalStars={5} currentRating={review.rating} />
//                 </div>
//                 <p>“{review.comment}”</p>
//                 <p>{new Date(review.date).toLocaleDateString()}</p>
//                 <hr />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Description;

import React from "react";
import "./description.scss";
import StarRating from "../star-rating/StarRating";
import { Link } from "react-router-dom";


const Description = () => {
 
  return (
    <div id="Description">
      <div className="section1">
        <img
          src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731352232/image_1_zvyvst.png"
          alt="tractor"
          loading="lazy"
        />
      </div>

      <div className="john">
        <span>
          <h3>John Dey Tractor</h3>
        </span>
        <span>
          <button>Available</button>
        </span>
      </div>
      
                    
                  
      <div className="rent">
      <Link to={"/Checkout"}>
        <div className="first">
          <button>Rent Now</button>
        </div>
        </Link>
        <div className="second">
          {/* <div>
            <img
              src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731352224/Frame_4_n3pqm4.png"
              alt="cart"
            />
          </div> */}
          {/* <div>
            <button className="add" onClick={() => addToCart(equipments)}>Add To Cart</button>
          </div> */}
        </div>
      </div>

      <div className="section2">
        <div className="div1">
          <h3>Product Details</h3>
          <p>
            Introducing our advanced agricultural harvesters, designed for
            maximum efficiency in harvesting grains, forage, and specialty
            crops. With powerful engines, adjustable cutting widths, and
            precision farming technology, our machines ensure optimal yield and
            minimal downtime. Built for durability and ease of maintenance, they
            feature advanced safety systems for operator protection. Elevate
            your farming experience and boost productivity with our
            state-of-the-art harvesters, tailored for modern agriculture.
          </p>
        </div>

        <div className="div2">
          <div className="specification">
            <h4>Specifications:</h4>
            <ul>
              <li>
                <b>Engine Power:</b> 55 HP (41 kW)
              </li>
              <li>
                <b>Engine Type:</b> 3-cylinder diesel
              </li>
              <li>
                <b>Transmission:</b> 9F/3R SyncShuttle™ Transmission
              </li>
              <li>
                <b>PTO Power: </b>45 HP
              </li>
              <li>
                <b>Hydraulic System:</b> Dual pump system with a flow rate of
                16.7 GPM
              </li>
              <li>
                <b>(gallons per minute) Fuel Tank Capacity:</b> 17.6 gallons
              </li>
              <li>
                <b>Weight:</b> Approx. 4,661 lbs
              </li>
            </ul>
          </div>

          <div className="features">
            <h4>Features:</h4>
            <ul>
              <li>
                <b>Power and Efficiency: </b> Equipped with a high-powered
                diesel engine, designed for fuel efficiency and minimal
                emissions.
              </li>
              <li>
                <b>Versatility:</b> Suitable for multiple tasks, from plowing to
                light construction.
              </li>
              <li>
                <b>Enhanced Visibility:</b> 5055E has an open operator station
                for clear visibility, aiding in maneuvering in tight spaces.
              </li>
              <li>
                <b>Hydraulic System:</b> Dual pumps allow simultaneous use of
                steering and loader without reduced performance.
              </li>
              <li>
                <b>Comfort and Ergonomics:</b> Adjustable seat, ergonomic
                controls, and easy-to-read digital display for optimal user
                comfort.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section3">
        <h3>Verified Customer Feedback</h3>
        <hr />

        <div className="div3">
          <div className="rating">
            <h5>RATINGS</h5>
            <div className="verified">
              <p>
                <b>3.9/5</b>
              </p>
              <div>
                <StarRating totalStars={5} />
              </div>
              <p>4 Verified Ratings</p>
            </div>
          </div>

          <div className="comments">
            <h5>Comments from Verified Customers</h5>

            <div className="benson">
              <h6>John Benson</h6>
              <div>
                <StarRating totalStars={5} />
              </div>
              <p>“Works well and in good condition”</p>
              <p>30-10-2024</p>
            </div>

            <hr />

            <div className="benson">
              <h6>John Benson</h6>
              <div>
                <StarRating totalStars={5} />
              </div>
              <p>“Works well and in good condition”</p>
              <p>30-10-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;



