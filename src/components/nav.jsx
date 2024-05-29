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
        <div className='navbar'>
          <div className='icon'>
            <header>
                <img className='logo' src={logo} alt="logo" />
            </header>
          </div>
          <div className='menu'>
            <ul>
              <li className='headernav' onClick={()=>{navigate('home')}}><a>Home</a> </li>
              <li className='headernav'><a href="https://www.dpwh.gov.ph/dpwh/references/laws_codes_orders/bpb344">Batas Pambansa Blg. 344</a></li>
              <li className='headernav'><a href="https://drive.google.com/file/d/1v6xehMOJou9d1ecloxikx5slXDm2M1lR/view">Implementing Rules and Regulations</a></li>
              <li className='headernav' onClick={()=>{navigate("aboutUs")}}><a>About Us</a> </li>
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
