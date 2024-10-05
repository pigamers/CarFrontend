import React from 'react'
import Navbar from '../components/Navbar'
import GetCarDetails from '../components/GetCarDetails'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

export default function GetCar() {
  return (
    <>
      <div className='font-graduate'>
        <Navbar />
        <GetCarDetails />
        <Footer />
      </div>
    </>
  )
}
