import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import ContactUs from './pages/contactus'
import Blog from './pages/blog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
