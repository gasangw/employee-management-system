// import React from "react";
// import { useEffect, useState } from "react";
// import Employeedata from "./Employeedata";


// const Employee = () => {
//   const [myEmployees, setMyEmployees] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/employees")
//       .then((response) => response.json())
//       .then((data) => setMyEmployees(data));
//   }, []);
//   return (
//     <div>
//       {myEmployees.map((value) => {
//         return <Employeedata detail={value} key={value.id} />;
//       })}
//     </div>
//   );
// };
// export default Employee;
