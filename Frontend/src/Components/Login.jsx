import React , {useState} from 'react';
import axios from 'axios';

function Login() {
    const [formData , setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormData((prevData) => {
            return {...prevData , [event.target.name] : event.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/user/login" , formData , {
            withCredentials: true
        });
    };

  return (
    <div>
        <form action="submit">
            <div>
                <label> Email: </label>
                <input onChange={handleChange} name='email' value={formData.email} type="email" placeholder='Enter your email here'/>
            </div>
            <div>
                <label> Password: </label>
                <input onChange={handleChange} name='password' value={formData.password} type="password" placeholder='Enter your password here'/>
            </div>

            <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login