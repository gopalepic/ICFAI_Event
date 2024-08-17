import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    email: '',
    contact: '',
    teamName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    axios.post('http://localhost:5000/register', formData)
        .then(response => {
            alert('Registration complete!');
            // Optionally clear the form data
            setFormData({
                name: '',
                branch: '',
                email: '',
                contact: '',
                teamName: '',
            });
            // Avoid page reload; update state or route if needed
        })
        .catch(error => {
            console.error("An error occurred:", error);
            alert('Please Enter The Valid mail.');
        });
       
  };

  const handleemail = (e) => {
    const { name, value } = e.target;
  
    // Check if the email input is the one being changed
    if (name === 'email') {
      // Validate that the email ends with .iujaipur.edu.in
      if (!value.endsWith('@iujaipur.edu.in')) {
        // Optionally, show an error message or adjust the input style
        console.log('Email must end with .iujaipur.edu.in');
      }
    }
  
    // Update the form data
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="p-8 bg-blue-200 mt-4 flex flex-col items-center ">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 w-1/2">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Student Name" 
          className="p-2 border border-gray-300 rounded  "
        />
        <input 
          type="text" 
          name="branch" 
          value={formData.branch} 
          onChange={handleChange} 
          placeholder="Branch" 
          className="p-2 border border-gray-300 rounded"
        />
       
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleemail}
    placeholder="Email"
    className="p-2 border border-gray-300 rounded"
  />

        <input 
          type="number" 
          name="contact" 
          value={formData.contact} 
          onChange={handleChange} 
          placeholder="Contact Number" 
          className="p-2 border border-gray-300 rounded "
        />
        <input 
          type="text" 
          name="teamName" 
          value={formData.teamName} 
          onChange={handleChange} 
          placeholder="Team Name" 
          className="p-2 border border-gray-300 rounded "
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ">
          Submit
        </button>
      </form>
    </section>
  );
}

export default RegistrationForm;

