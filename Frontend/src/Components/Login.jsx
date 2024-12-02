import React from 'react'

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

  return (
    <div>
        <form action="submit">
            <div>
                <label> Email: </label>
                <input type="email" placeholder='Enter your email here'/>
            </div>
            <div>
                <label> Password: </label>
                <input type="password" placeholder='Enter your password here'/>
            </div>
        </form>
    </div>
  )
}

export default Login