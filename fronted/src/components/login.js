import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from './navbar'

const Register = () => {
    const navigate=useNavigate()
    const[user,setUser]=useState({email:'',password:''})

    const datahandler= async(e)=>{
        e.preventDefault();
        let result1= await fetch("http://localhost:5000/api/login",{
            method:"post",
            body:JSON.stringify({email:user.email,password:user.password}),
            headers:{"content-Type":"application/json"}
        })
        const result2=await result1.json();
        if(result2){
          
            localStorage.setItem("user",  result1.json())
            localStorage.setItem("useremail",user.email)
            
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
       
        <form className='w-50 m-auto mt-1 p-5 text-light  rounded' onSubmit={datahandler}>
            <h1 className="mt-5">Login</h1>
            <hr></hr>
            
  <div className="m-2">
    <label for="exampleInputEmail1" className="form-label fs-5">Email address</label>
    <input type="email" className="form-control "  name='email' value={user.email } onChange={onchange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-success">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-2">
    <label for="exampleInputPassword1" className="form-label fs-5">Password</label>
    <input type="password" className="form-control" name='password'value={user.passowrd}onChange={onchange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success">login</button>
  <hr/>
  <Link to="/register">New user</Link>
</form>
      
    </div>
    </div>
  )
}

export default Register
