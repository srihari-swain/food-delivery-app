import React from 'react'
import Navbar from './navbar'

import { Usecart,Usedispatch } from './contexreducer'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate()
    const data=Usecart();
    const dispatch=Usedispatch();
    if(data.length===0){
        return (
          <div>
            <div><Navbar/></div>
            <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        )
    }
    const checkHandle= async()=>{
 let auth_email=localStorage.getItem("useremail");
    let result=await fetch("http://localhost:5000/api/orderData",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        email:auth_email,
        order_data:[data],
        order_date: new Date().toDateString()
      

      })


    })
    if (result.status === 200) {dispatch({ type: "DROP" })
    
    
      
    }
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0)

    
  return (
    <div>
      <div>
        <Navbar/>
      </div>
        {console.log(data)}
        <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
        <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
            
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((food,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            
                        </tr>
                    )
                })
            }
          </tbody>
        </table>

        </div>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
        <button className='btn bg-success mt-5 ' onClick={checkHandle} > Check Out </button>
        </div>
      
    </div>
  )
}

export default Cart
