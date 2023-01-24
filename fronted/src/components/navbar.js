import React from 'react'
import { Link,useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear();
    navigate('/')

  }
  const auth=localStorage.getItem("user")
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-success ">
  <div className="container-fluid">
    <Link className="navbar-brand fs-5 text-danger" to="/"> URBAN TADKA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {auth ?
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          
  
          <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
          
        
        
         <div className="d-flex">
       
          <Link className="nav-link " to="/cart">My cart</Link>
         <button className="btn btn-outline-success bg-light text-danger" type="submit" onClick={logout}>Logout</button>
         
       </div>
       </div>
       
        :
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/register">signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/login">login</Link>
        </li>
        </ul>
        }
      </ul>
      
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
