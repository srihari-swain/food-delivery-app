import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from './navbar'

const Register = () => {
    const navigate=useNavigate()
    const[user,setUser]=useState({name:'',email:'',password:'',location:''})

    const datahandler= async(e)=>{
        e.preventDefault();
        let result= await fetch("http://localhost:5000/api/register",{
            method:"post",
            body:JSON.stringify({name:user.name,email:user.email,password:user.password,location:user.location}),
            headers:{"content-Type":"application/json"}
        })
        result=await result.json();
        if(result){
            localStorage.setItem("user",result.result)
            navigate('/home')
        }
        else{
            alert("please enter valid data")
        }

    }
    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
      }
  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
     backgroundSize: 'cover',height: '100vh' }}>
    <div>
        <div>
            
        </div>
        <form className='w-50 m-auto mt-2 p-5 text-light  rounded' onSubmit={datahandler}>
            <h1>Sign-up</h1>
            <hr></hr>
            <div className="mb-2">
    <label for="exampleInputName" className="form-label fs-5">Name</label>
    <input type="text" className="form-control" name="name" value={user.name} onChange={onchange} id="exampleInputName"/>
  </div>
  <div className="mb-2">
    <label for="exampleInputEmail1" className="form-label fs-5">Email address</label>
    <input type="email" className="form-control "  name='email' value={user.email } onChange={onchange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-success">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-2">
    <label for="exampleInputPassword1" className="form-label fs-5">Password</label>
    <input type="password" className="form-control" name='password'value={user.passowrd}onChange={onchange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-2">
    <label for="exampleInputLocation" className="form-label fs-5">Location</label>
    <input type="text" className="form-control"name='location' value={user.location} onChange={onchange} id="exampleInputLocation"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-success">sign-up</button>
  <hr/>
  <Link to="/login">Already have an account?</Link>
</form>
      
    </div>
    </div>
  )
}

export default Register
