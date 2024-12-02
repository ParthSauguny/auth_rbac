import React from 'react'

function Signup() {
    const [formData , setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    })

    const handleChange = (event) => {
        setFormData((prevData) => {
            return {...prevData , [event.target.name] : event.target.value};
        })
    }

    const handleSubmit = () => {
        const response = axios("" , formData)
    }

  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
            <div>
                <label> Username: </label>
                <input type="text" onChange={handleChange} placeholder='Enter your username here'/>
            </div>
            <div>
                <label> Email: </label>
                <input type="email" onChange={handleChange} placeholder='Enter your email here'/>
            </div>
            <div>
                <label> Password: </label>
                <input type="password" onChange={handleChange} placeholder='Enter your password here'/>
            </div>
            <div>
                <label> Select your role: </label>
                <input type="text" onChange={handleChange} placeholder='Enter your username here'/>
            </div>
      </form>
    </div>
  )
}

export default Signup