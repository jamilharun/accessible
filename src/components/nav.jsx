import React from 'react'
import { Outlet, Route, Routes, useNavigate} from "react-router-dom";
import logo from '../assets/logo.png'
import '../App.css'
import Home from './home';
import About_us from './about-us';

export default function Nav() {
    const navigate = useNavigate()
  return (
    <>
      <div className='main'>
        <div className='navbar z-10'>
          <div className='icon z-10'>
            <header>
                <img className='logo z-10' src={logo} alt="logo" />
            </header>
          </div>
          <div className='menu z-10'>
            <ul className=''>
              <li className='headernav' onClick={()=>{navigate('/')}}>Home</li>
              <li className='headernav'><a href="https://ncda.gov.ph/disability-laws/batas-pambansa/batas-pambansa-blg-344/">Batas Pambansa Blg. 344</a></li>
              <li className='headernav'><a href="https://www.dpwh.gov.ph/dpwh/references/laws_codes_orders/bpb344">Implementing Rules and Regulations</a></li>
              <li className='headernav' onClick={()=>{navigate("aboutUs")}}>About Us</li>
            </ul>
          </div>
        </div>
        <div>
            <Outlet/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="aboutUs/*" element={<About_us/>}/>
            </Routes>
        </div>
      </div>
    </>
  )
}
