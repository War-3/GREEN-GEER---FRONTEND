// import React, { useEffect, useState } from 'react';

// const EquipmentList = () => {
//   const [equipment, setEquipment] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch equipment data from the backend API
//     fetch('http://127.0.0.1:8040/api/equipment/all') // Update with your backend URL
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.data) {
//           setEquipment(data.data);
//         } else {
//           setError('No equipment found');
//         }
//       })
//       .catch((err) => {
//         setError('Error fetching equipment');
//         console.error(err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>All Equipment</h1>
//       <div>
//         {equipment.map((item) => (
//           <div key={item._id}>
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <p><strong>Category:</strong> {item.category}</p>
//             <p><strong>Status:</strong> {item.status}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EquipmentList;
