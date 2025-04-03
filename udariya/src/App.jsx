import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './route/Home'
import Contact from './route/Contact'
import Services from './route/Service'
import About from './route/About'
import FlightBookingPage from './route/flight'
function App() {
  return (
    <div>
     <Navbar/>
 
 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/Services'element={<Services/>}/>
      <Route path='/flight' element={<FlightBookingPage/>}></Route>
     </Routes> 
    </div>
  )
}

export default App


