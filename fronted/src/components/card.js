import React, { useState ,useRef, useEffect} from 'react'
import { Usecart, Usedispatch} from './contexreducer';

const Card = ( props) => {
  let priceref=useRef()
  let data=Usecart();
let dispatch=Usedispatch();
  const[qty,setQty]=useState(1)
  const[size,setSize]=useState('')
  const image=props.food.img;
  const options=props.option;
  const optionprice=Object.keys(options)
  const handlefun= async()=>{
  let foods=[];
  for(const item of data){
    if(item.id===props.food._id){
      foods=item;
      break;
    }
  }
  if(foods!==[]){
    if(foods.size===size){
    await dispatch({type:"UPDATE",id:props.food._id,price:finalprice,qty:qty})
    console.log(data)
    return;
  }
  else if(foods.size!==size){
    await dispatch({type:"ADD",id:foods._id,name:props.food.name,price:finalprice,qty:qty,size:size,img:props.food.img})
    return;
  }
  return ;

  }
  else{
  await dispatch({type:"ADD",id:props.food._id,name:props.food.name,price:finalprice,qty:qty,size:size,img:props.food.img})
  }
  
  
 

}

  useEffect(()=>{
    setSize(priceref.current.value)
  },[])
  let finalprice=qty* parseInt(options[size])


  return (
    <div>
       <div className='m-2 d-flex '><div className="card m-3" style={{ width: "16rem", maxHeight: "360px" }}>
  <img src={image} className="card-img-top" alt="..."style={{ height: "120px", objectFit: "fill" }} />
  <div className="card-body">
    <h5 className="card-title">{props.food.name}</h5>
    
    <div className='container w-100 '>
    <select className='m-2 h-100 bg-success rounded'ref={priceref} onChange={(e)=>{setQty(e.target.value)}}>
    {
      Array.from(Array(6),(e,i)=>{
        return(
          <option key={i+1} value={i+1}>{i+1}</option>
        )
      })
    }
    
    </select>
    <select className='m-2 h-1000 bg-success' ref={priceref} onChange={(e)=>{setSize(e.target.value)}}>
     {
      optionprice.map((data)=>{
        return(
          <option key={data} value={data}  >{data}</option>
        )
      })
     }
    </select>
    <div className='d-inline h-100 fs-5'>₹{ finalprice}/-</div>
    </div>
    <hr/>
    <button className='btn btn-outline-success  text-white bg-success' type="submit"  onClick={handlefun}>Add to Cart</button>
    
  </div>
</div>
      
    </div>
    </div>
  )
}


export default Card
