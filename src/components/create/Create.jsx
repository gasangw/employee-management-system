import React, { useState } from "react";
import axios from "axios";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [department, setDepartment] = useState("");
    
    const changeName = (e) => {
      setName(e.target.value);
    };
  
    const changeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const changeJobTitle = (e) => {
      setJobTitle(e.target.value);
    };
  
    const changeDepartment = (e) => {
      setDepartment(e.target.value);
    };

    const handleSubmission =(e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/employees', {
         fullName: name,
         email: email,
         jobTitle: jobTitle,
         department: department
       })
       .then(response => response.data)
       
    }


   return (
    <div>
      <form onSubmit={handleSubmission}>
        <div class="mb-6">
          <label
            for="fullname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Full Names
          </label>
          <input
            type="text"
            id="fullname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your fullName"
            onChange={changeName}
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
            id="email"
            onChange={changeEmail}
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
            id="job-title"
            onChange={changeJobTitle}
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
            id="department"
            onChange={changeDepartment}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your department"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Employee
        </button>
      </form>
    </div>
  );
};

export default Create;
