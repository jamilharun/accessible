import React from 'react'
import '../App.css'
export default function Home() {
  return (
    <>
    <div>
        <header className='homeHeader'>
          <h2>BP 344 Checker</h2>
          <h1 className='colorBlack'>Minimum Requirements for <span className='colorblue'>Accessibility</span></h1>
        </header>
        <div className='dropdown-container'>
          <div id="dc-meters-search" className='displaynone'>
              <input className="dropped-curbs" type="number" id="meter-input"/>
              <a href="#"><button id="check-meter">Search</button></a>
          </div>
          <div className="dropdown-menu">
              <button>Outside and Around Buildings▾</button>
              <ul>
                  <li><a href="#">Dropped Curbs</a></li>
                  <li><a href="#">Curb Cut-outs</a></li>
                  <li><a href="#">Walkways and Passageways</a></li>
                  <li><a href="#">Handrails</a></li>
                  <li><a href="#">Open Spaces</a></li>
                  <li><a href="#">Signages</a></li>
                  <li><a href="#">Crossings</a></li>
              </ul>
          </div>

          <div className="dropdown-menu">
              <button>Inside Buildings and Structures▾</button>
              <ul>
                  <li><a href="#">Entrances</a></li>
                  <li><a href="#">Ramps</a></li>
                  <li><a href="#">Doors</a></li>
                  <li><a href="#">Thresholds</a></li>
                  <li><a href="#">Switches</a></li>
                  <li><a href="#">Signages</a></li>
                  <li><a href="#">Corridors</a></li>
                  <li><a href="#">Washrooms & Toilets</a></li>
                  <li><a href="#">Stairs</a></li>
                  <li><a href="#">Elevators</a></li>
                  <li><a href="#">Water Fountains</a></li>
                  <li><a href="#">Public Telephones</a></li>
                  <li><a href="#">Places of Assembly</a></li>
              </ul>
          </div>

          <div className="dropdown-menu">
              <button>Safety▾</button>
              <ul>
                  <li><a href="#">Fencing for Roadworks and Footworks</a></li>
                  <li><a href="#">Covers for Excavation</a></li>
                  <li><a href="#">Signage for Roadworks on the Carriageway</a></li>
                  <li><a href="#">Location of Emergency Exit</a></li>
                  <li><a href="#">Audible and Visible Alarm System</a></li>
              </ul>
          </div>

          <div class="dropdown-menu">
              <button>Parking▾</button>
              <ul>
                  <li><a href="#">Parking Areas</a></li>
              </ul>
          </div>

        </div>
    </div>
    </>
  )
}