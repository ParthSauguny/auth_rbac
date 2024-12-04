import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const AddBook = () => {
  const [formData , setFormData] = useState({
    title: '',
    author: '',
    owner: null,
    address: ''
  })
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prevData) => {
      return {...prevData , [event.target.name] : event.target.value};
  })
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);  // Enable loading state

  if (!title || !author || !address) {
    setError('All fields are required');
    setLoading(false);
    return;
  }
  console.log("stage 1 OK !!!!!");

  console.log("stage 2 crossed !!!!!");

  try {
    console.log(" entering try catch ");
    
    const res = await axios.post('/book/add-book', formData, {
      withCredentials: true});
    console.log("data sent");

    if(res.status === 200){
      setSuccess('Book added successfully!');
    }

    console.log("added book");

    console.log("all done");
  } catch (err) {
    setError('Failed to add book. Please try again.');
    if(err.response && err.response.status === 401){
      navigate('/user/login');
    }
    if(err.response && err.response.status === 403){
      setError("You are not an admin");
    }
    console.log("error aagya pencho oye");
    
    console.error(err);
  } finally {
    setLoading(false);  // Disable loading state
  }
};


  return (
    <>
    <h2 className="text-4xl font-bold mb-4 text-center">Add a Book</h2>
    <div className="max-w-md bg-slate-400 mx-auto mt-5 p-6 border border-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            name='title'
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
          <input
            type="text"
            id="author"
            name='author'
            value={formData.author}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            name='address'
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
            type="submit" 
            className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            disabled={loading}  // Disable button during loading
        >
            {loading ? 'Adding...' : 'Add Book'}
        </button>

      </form>
      {error && <p className="mt-2 text-red-600">{error}</p>}
      {success && <p className="mt-2 text-green-600">{success}</p>}
    </div>
    </>
  );
};

export default AddBook;