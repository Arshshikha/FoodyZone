import React,{useState} from 'react'
import {Link } from "react-router-dom"
const Signup = () => {
const [credentials, setcredentials] = useState({name:"", email:"", password:"", geolocation:""} )


    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response =  await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
        });
        const json= await response.json()
        console.log(json);
        if (!json.success){
            alert("Enter Valid Credentaials")
        }



    }
    const onChange =(event)=>{
        setcredentials({...credentials,[event.target.name]: event.target.value})
    }
  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name="password" value={credentials.password}  onChange={onChange} id="exampleInputPassword1"/>
  </div>
   <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
    <input type="text" className="form-control"  name="geolocation" value={credentials.geolocation} onChange={onChange}  id="exampleInputAddress"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
</form>
</div>
    </>
  )
}

export default Signup
