import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './employee.css'
// import axios from 'axios'

const Employee = () => {
  const navigate = useNavigate();
  const [myEmployees, setMyEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => setMyEmployees(data));
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("/employee/ID")}
        class="focus:outline-none text-white bg-green-700 hover:bg-purple-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 btn"
      >
        New Employee
      </button>
      <div className="list-employees">
        {myEmployees.map((value) => {
          return (
            <div
              key={value.id}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="Bordered avatar"
              />

              <div class="p-5">
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Name: {value.fullName}
                </h2>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Email: {value.email}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Job Title: {value.jobTitle}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Department {value.department}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(`/employee/${value.id}`)}
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Update
              </button>
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Employee;
