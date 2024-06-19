import React from 'react'
import logo from '../assets/logo.png'
import BRUSOLA from '../assets/sdfsdf.png'
import CURTISS from '../assets/CURTISS.jpg'
import PANGANIBAN from '../assets/PANGANIBAN.jpg'
import RUBICO from '../assets/RUBICO.jpg'
import TOLENTINO from '../assets/TOLENTINO.png'
import VELUNTA from '../assets/VELUNTA.jpg'
import '../App.css'
export default function About_us() {
  return (
    <>
        <div className="about-us-page">
            <header className='aboutpic'>
                <img src={logo} alt="logo2" class="about-us-logo"/>
            </header>
            <div className="about-us-content">
                <p className="tagline colotsomepurple poppins-bold" >&ldquo;Accessibility for All&rdquo;</p>
                <p className="us aumessage">AccessAble is a database management system designed for the construction industry to 
                    quickly and effectively verify whether a certain structure meets the IRR of the Accessibility Law. 
                    By specifying a structure and inputting the dimensions, it will immediately determine if the structure 
                    or building component complies with the standards.</p>
                <p className="us aumessage">The purpose of this project is to develop an interactive website that emphasizes the importance of 
                    complying with BP 344 and its IRR in constructing buildings and structures.</p>
            </div>
            <div className='footer'>
                <p className="footer-developers colorBlack" >Developed by: <span className='colorsomeOrange'>GROUP 4 </span><span className='colorBlack'>|</span> <span className='colorblue'>BSCE 4-2</span></p>
                <ul className='devlist'>
                    <li>
                        <p>BRUSOLA, KRISHA LORRAINE B.</p> 
                        <img src={BRUSOLA} alt="krisha" width="80" height="80"/>
                    </li>
                    <li>
                        <p>CURTISS, KERR C.</p>
                        <img src={CURTISS} alt="krisha" width="80" height="80"/>
                    </li>
                    <li>
                        <p>PANGANIBAN, KAILA MAE N.</p>
                        <img src={PANGANIBAN} alt="krisha" width="80" height="80"/>
                    </li>
                    <li>
                        <p>RUBICO, COREENE JANE O.</p>
                        <img src={RUBICO} alt="krisha" width="80" height="80"/>
                    </li>
                    <li>
                        <p>TOLENTINO, MJ F.</p>
                        <img src={TOLENTINO} alt="krisha" width="80" height="80"/>
                    </li>
                    <li>
                        <p>VELUNTA, KYLA A.</p>
                        <img src={VELUNTA} alt="krisha" width="80" height="80"/>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
