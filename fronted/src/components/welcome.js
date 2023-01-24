import React from 'react'

import { Link } from 'react-router-dom'


const Welcome = () => {
  return (
    <div>
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
     backgroundSize: 'cover',height: '100vh' }}>
        <nav class="navbar bg-success">
  <div class="container">
    
    <div className="navbar-brand fs-5 text-danger" > URBAN TADKA</div>
    <div className='d-flex'>
    
        
          <Link className="nav-link text-light" to="/register">signup</Link>
        
       
          <Link className="nav-link text-light" to="/login">login</Link>
         
        
        
      

    </div>
   
    
  </div>
</nav>
<div >
            <h1 className='h1'>! WELCOME TO URBAN TADKA !</h1>
          </div>
     </div>
         
       

      
    </div>
  )
}

export default Welcome
