import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id ='carousel'>
    <div className="carousel-caption " style={{zIndex:'10'}}>
        <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
      </div>
    <div className="carousel-item active">
      <img src="https://tse1.mm.bing.net/th/id/OIP.yQWKrcsv4B0EUukVirfHIAHaEK?pid=Api&P=0&h=220" className="d-block w-100"  style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tse2.mm.bing.net/th/id/OIP.nLh9QrYdNkVciFtkDYEIDAHaHa?pid=Api&P=0&h=220" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tse4.mm.bing.net/th/id/OIP.GrplJ71DVRZQPXCC0V4FGAHaEc?pid=Api&P=0&h=220" className="d-block w-100"  style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
