import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('/user/signup', formData);
      if (response.status === 200) {
        toast.success('Signed up successfully!');
      } else {
        toast.error('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.warning('Some error occurred. Please try again later.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;