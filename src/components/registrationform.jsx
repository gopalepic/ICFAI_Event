import React, { useState } from 'react';

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
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="p-8 bg-white mt-4">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Student Name" 
          className="p-2 border border-gray-300 rounded"
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
          onChange={handleChange} 
          placeholder="Email" 
          className="p-2 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          name="contact" 
          value={formData.contact} 
          onChange={handleChange} 
          placeholder="Contact Number" 
          className="p-2 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          name="teamName" 
          value={formData.teamName} 
          onChange={handleChange} 
          placeholder="Team Name" 
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
