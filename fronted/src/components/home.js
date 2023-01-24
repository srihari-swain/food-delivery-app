import React from 'react'
import Carousol from './carousol'
import Footer from './footer'
import Navbar from './navbar'
import Card from "./card"
import { useEffect, useState } from 'react'


const Home = () => {
  const[search,setSearch]=useState()
  const[foodCategory,setFoodCategory]=useState([])
  const [fooditem,setFooditem]=useState([])
  
const foodfun=async()=>{
  let result = await fetch("http://localhost:5000/api/fooditem", {
    method: "post",
    body: JSON.stringify({ }),
    headers: { "content-Type": "application/json" },
  });
result=await result.json()

setFoodCategory(result[1])
setFooditem(result[0])

}
  
  useEffect(()=>{
foodfun()
  },[])
  return (
    <div>
      <div className='sticky-top'><Navbar/></div>
      <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
 
  <div className="carousel-inner " id='caro' >
    <div className="carousel-item active">
      
      <img src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 h-50" alt="..."/>
      
     
    </div>
    <div className="carousel-item ">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×300/?pizza" className="d-block w-100" alt="..."/>
     
    </div>
  </div>
 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
      
      
      <div className='container'> 
      {
        foodCategory!==[] ?foodCategory.map((data)=>{
          return(
            <div className='row md-3'>
            <div key={data._id} className="fs-3  m-3">
                {data.CategoryName}
              </div>
              <hr />
              {
                fooditem!==[] ?fooditem.filter((item)=>item.CategoryName===data.CategoryName).map((food)=>{
                  return(
                    <div key={food._id} className="col-12 col-md-6 col-lg-3">
                      <Card food={food} 
                      
                      option={food.options[0]}/>
                      </div>
                  )
                })
                :<div> no items are matched</div>
              }
              </div>

          )
        }):<div> data can not fetch</div>
      }
</div>
      
      <Footer/>
    </div>
  )
}

export default Home
