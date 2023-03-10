import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios'

const OneEmployee = () => {
  const GoTo = useNavigate();
  const navigate = useNavigate();
  const { id } = useParams();
  const [employees, setEmployees] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    department: ''
  });

  useEffect(() => {
    if (id === "ID") return;

    fetch(`http://localhost:3000/employees/${id}`)
      .then((response) => response.json())
      .then((myData) => setEmployees(myData));
  }, [id]);


  const handleChange =(e)=> {
    const employeesClone = {...employees}
    employeesClone[e.target.name] = e.target.value
    setEmployees(employeesClone)
  }

  const handleSubmit =(e)=> {
    e.preventDefault();
    if(id === 'ID'){
        axios.post('http://localhost:3000/employees', employees)
          .then(response => response.data)
        return navigate('/employee')
    }else {
        axios.put(`http://localhost:3000/employees/${id}`, employees)
        .then(response => response.data)
        return navigate('/employee')
    }
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => GoTo("/employee")}
        class="focus:outline-none text-white bg-purple-700 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 btn"
      >
        All Employees
      </button>
      <div>
      <form>
        <div class="mb-6">
          <label
            for="fullname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Full Names
          </label>
          <input
            type="text"
            name="fullName"
            value={employees.fullName}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your fullName"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={employees.email}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="job-title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Job title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={employees.jobTitle}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your job title"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="department"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Department
          </label>
          <input
            type="text"
            name="department"
            value={employees.department}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your department"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          { id === 'ID' ? 'Create Employee' : 'Update Employee'}
        </button>
      </form>
      </div>
    </div>
  );
};
export default OneEmployee;
