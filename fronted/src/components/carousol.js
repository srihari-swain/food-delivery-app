import React from 'react'

const Carousol = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div classNameName="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner h-50"id='carousel' >
    <div className="carousel-item active">
      <img src="https://www.pexels.com/photo/top-view-photo-of-food-dessert-1099680/" className="d-block w-100 h-10rem" alt="..."/>
      <div className='carousel'id="carousel">
      <div className="carousel-caption " style={{zIndex:"9"}}>
        <form className='d-flex justify-content-center' >
        <input  className=' form-control me-2' type="search" placeholder='search' arial-label='search'/>
        <button className='btn btn-outline-success  text-white bg-success' type="submit">search</button>
        </form>
      </div>
      </div>
    </div>
    <div className="carousel-item ">
      <img src="https://source.unsplash.com/random/300×300/?momos" className="d-block w-100" alt="..."/>
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
  )
}

export default Carousol
