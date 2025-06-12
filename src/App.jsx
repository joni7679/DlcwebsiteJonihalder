import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  const [searchQuery, SetSearchQuery] = useState("")
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App