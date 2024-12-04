import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        This is an assignment for VRV Security.
        <br /> <br />
        <Link to='/user/signup'>
            <button> Signup </button>
        </Link>
        <span>  | | | | | |  </span>
        <Link to='/user/login'>
            <button> Login </button>
        </Link>
        <br /> <br />
        Add Book:
        <Link to='/book/addbook'>
            <button> Add Book </button>
        </Link>
        <br /> <br />

        view books
        <Link to='/book/getbooks'>
          <button>view books</button>
        </Link>
    </div>
  )
}

export default Home