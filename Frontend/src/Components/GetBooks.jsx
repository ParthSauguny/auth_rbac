import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

function GetBooks() {
  const [books , setBooks] = useState(null);

  useEffect(() => {
    console.log("hello")
    axios.get("http://localhost:5000/book/api/get-books")
    .then(res => {
      setBooks(res.data);
      console.log(res.data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    })
  } , []);

  return (
    <div className='my-5'>
      {books ? (
        books.length > 0 ? (
          books.map(book => (
            <Card
              book_id={book._id}
              title={book.title}
              author={book.author}
              owner={book.owner || 'Unknown Owner'}  // Safe access with a fallback
              address={book.address}
            />
          ))
        ) : (
          <div className='flex justify-center text-4xl'>No books available at the moment.</div> // Fallback message for empty books array
        )
      ) : (
        <div className='flex justify-center text-4xl'>Please register yourself first</div> // Message for null array
      )}
    </div>
  )
}

export default GetBooks