import React from 'react';
import myimage from "../Images/bg.png"
import './about.css'
const About = () => {
  return (
    <div div className="im">

      <div div class = "py-16 im">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={myimage}
                alt="bg"
                loading="lazy"
               
              />
            </div>
            <div  class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Employee Management System
              </h2>
              <p class="mt-6 text-gray-600">
                An organization needs to record every  employees.and managing  has direct relation with employees, their payroll and leave.Various software
                for e - keeping our employee are very important in our company.Most of them are the desktop based applications and the others, though they are web based applications, during our preliminary survey we found that they were not efficient enough to cater the needs of the organization.Hence, we thought it be a beneficial project
                for us and the college as well as the concerned organizations.
              </p>
              <p class="mt-4 text-gray-600">
                {' '}
                Its pleasure to work with us your are mostly welcome in our organisation
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default About;
