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
    
   const response = axios.post('https://icfai-event-backend.vercel.app:5000/register', formData)
   console.log(response)
          if(response.status === 201){
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
        }
      else{
        alert("Having problems");
      }
      

  };
  return(
  <section className="p-4 sm:p-8 bg-blue-200 mt-4 flex flex-col items-center">
  <h2 className="text-xl sm:text-2xl font-bold mb-4">Registration Form</h2>
  <form onSubmit={handleSubmit} className="grid gap-4 w-full sm:w-1/2 px-4">
    <input 
      type="text" 
      name="name" 
      value={formData.name} 
      onChange={handleChange} 
      placeholder="Student Name" 
      className="p-2 border border-gray-300 rounded w-full"
    />
    <input 
      type="text" 
      name="branch" 
      value={formData.branch} 
      onChange={handleChange} 
      placeholder="Branch" 
      className="p-2 border border-gray-300 rounded w-full"
    />
    <input 
      type="email" 
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
      placeholder="Email" 
      className="p-2 border border-gray-300 rounded w-full"
    />
    <input 
      type="number" 
      name="contact" 
      value={formData.contact} 
      onChange={handleChange} 
      placeholder="Contact Number" 
      className="p-2 border border-gray-300 rounded w-full"
    />
    <input 
      type="text" 
      name="teamName" 
      value={formData.teamName} 
      onChange={handleChange} 
      placeholder="Team Name" 
      className="p-2 border border-gray-300 rounded w-full"
    />
    <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-600 w-full">
      Submit
    </button>
  </form>
</section>

  
)};


export default RegistrationForm;
