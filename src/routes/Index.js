import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel1 from '../components/Carousel1'

export default function index() {
  return (
    <div>
        <Navbar/>
     <Carousel1/>
     <Card/>
     <Card/>
     <Card/>
     <Footer/>
    </div>
  )
}
