import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();
    console.log("Login response:", json);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("userEmail", credentials.email);

      console.log("Stored token:", localStorage.getItem("token"));
      console.log("Stored email:", localStorage.getItem("userEmail"));

      navigate("/");  // after login go to home, or use navigate("/myorder")
    } else {
      alert("Invalid Credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div style={{
      backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")',
      height: "100vh",
      backgroundSize: "cover"
    }}>
      <div className='container'>
        <form className='w-50 m-auto bg-success p-4 rounded' onSubmit={handleSubmit}>
          <h2 className='text-center text-white mb-4'>Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} required />
          </div>
          <button type="submit" className="btn btn-dark w-100">Submit</button>
          <Link to="/signup" className='btn btn-light w-100 mt-2'>New User? Sign Up</Link>
        </form>
      </div>
    </div>
  )
}