import React , {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Card({ book_id , title, author, owner, address, url }) {
  const [showDelete, setShowDelete] = useState(false);
  console.log(book_id);

  const owner_name = owner.username;

  const handleDelete = () => {
    try {
        const resp = axios.delete(`/book/delete-book/${book_id}`);
        
        if(resp.status && resp.statuscode === 403){
            toast.warning("You are not a moderator");
        }
    } catch (error) {
        console.log(error);
    }
  }

  const toggleDelete = () => {
    setShowDelete((prev) => !prev);
  }

  return (
    <div onClick={toggleDelete} >
      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{owner_name}</h1>
      <h1>{address}</h1>
      {
        showDelete && (
            <button onClick={handleDelete}> Delete </button>
        )
      }
    </div>
  );
}

export default Card;