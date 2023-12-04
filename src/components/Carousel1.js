import React from 'react'

export default function Carousel1() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/1600x500/?hills" className="d-block w-100" alt="..."/>
       
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/1600x500/?lake" className="d-block w-100" alt="..."/>
       
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/1600x500/?goa" className="d-block w-100" alt="..."/>
        
      </div>
      <div className='carousel-caption' style={{"zIndex":"10"}}>
  <form className="d-flex "  role="search">
      <input className="form-control me-2 start-0 bottom-20 end-20 position-absolute " type="search" placeholder="Source" aria-label="Search"/>
      <input className="form-control me-2 start-0 bottom-50 end-50 position-absolute  " type="search" placeholder="Destination" aria-label="Search"/>
      <button style={{justifyContent:"center"}} className="btn btn-outline-success text-white bg-warning start-70 bottom-90 end-50 position-absolute" type="submit">Search</button>
    </form>
  </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
