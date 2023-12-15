import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel1 from '../components/Carousel1'
import CardList from '../components/CardList'




export default function index() {

  
  return (
    <div>
        <Navbar/>
     <Carousel1/>
     <div className='m-5' style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CardList/></div>
    
     <Footer/>
    </div>
  )
}
