import React from 'react'
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import '../App.css'
import DroppedCurbs from './DroppedCurbs';
import CurbCutouts from './CurbCutouts';
import WalkWaysPassageWays from './WalkWaysPassageWays';
import Handrails from './Handrails';
import Signages from './Signages';
import Crossing from './Crossing';
import ParkingArea from './ParkingArea';
import Fencing from './Fencing';
import Covers from './Covers';
import SafetySignage from './SafetySignage';
import Entrance from './Entrance';
import Ramps from './Ramps';
import Doors from './Doors';
import Thresholds from './Thresholds';
import Switches from './Switches';
import Corridors from './Corridors';
import WashRooms from './WashRooms';
import Stairs from './Stairs';
import Elevator from './Elevator';
import WaterFountain from './WaterFountain';
import PublicTelephone from './PublicTelephone';
import PlacesOfAssembly from './PlacesOfAssembly';
export default function Home() {
    const navigate = useNavigate();


    // const dropdownMenu = document.querySelector('.dropdown-menu ul');

    //     // Get the computed style of the dropdown menu
    // const computedStyle = window.getComputedStyle(dropdownMenu);

    //     // Access the max-height property
    // const maxHeight = computedStyle.getPropertyValue('max-height');
  return (
    <>
    <div className='home'>
        <header className='homeHeader'>
          <h2>BP 344 Checker</h2>
          <h1 className='colorBlack league-spartan'>Minimum Requirements for <span className='colorblue'>Accessibility</span></h1>
        </header>
        
        <div className='mainContent h-3/4'>
            {/* drop down */}
            <div className='dropdown-container'>
            <div id="dc-meters-search" className='displaynone'>
                <input className="dropped-curbs" type="number" id="meter-input"/>
                <a href="#"><button id="check-meter">Search</button></a>
            </div>
            <div className="dropdown-menu">
                <button>Outside and Around Buildings▾</button>
                <ul>
                    <li onClick={()=>{navigate("DroppedCurbs")}}>Dropped Curbs</li>
                    <li onClick={()=>{navigate("CurbCutouts")}}>Curb Cut-outs</li>
                    <li onClick={()=>{navigate("WalkPassageWays")}}>Walkways and Passageways</li>
                    <li onClick={()=>{navigate("HandRails")}}>Handrails</li>
                    <li onClick={()=>{navigate("Signage")}}>Signages</li>
                    <li onClick={()=>{navigate("Crossing")}}>Crossings</li>
                </ul>
            </div>

            <div className="dropdown-menu">
                <button>Inside Buildings and Structures▾</button>
                <ul>
                    <li onClick={()=>{navigate("Entrance")}}>Entrances</li>
                    <li onClick={()=>{navigate("Ramps")}}>Ramps</li>
                    <li onClick={()=>{navigate("Doors")}}>Doors</li>
                    <li onClick={()=>{navigate("Thresholds")}}>Thresholds</li>
                    <li onClick={()=>{navigate("Switches")}}>Switches</li>
                    {/* <li onClick={()=>{navigate("Signages")}}>Signages</li> */}
                    <li onClick={()=>{navigate("Corridor")}}>Corridors</li>
                    <li onClick={()=>{navigate("Washtoilet")}}>Washrooms & Toilets</li>
                    <li onClick={()=>{navigate("Stairs")}}>Stairs</li>
                    <li onClick={()=>{navigate("Elevator")}}>Elevators</li>
                    <li onClick={()=>{navigate("WaterFountain")}}>Water Fountains</li>
                    <li onClick={()=>{navigate("PublicTel")}}>Public Telephones</li>
                    <li onClick={()=>{navigate("PlaceAssembly")}}>Places of Assembly</li>
                </ul>
            </div>

            <div className="dropdown-menu">
                <button>Safety▾</button>
                <ul>
                    <li onClick={()=>{navigate("Fencing")}}>Fencing for Roadworks and Footworks</li>
                    <li onClick={()=>{navigate("Covers")}}>Covers for Excavation</li>
                    <li onClick={()=>{navigate("SafetySignage")}}>Signage for Roadworks on the Carriageway</li>
                </ul>
            </div>

            <div class="dropdown-menu">
                <button>Parking▾</button>
                <ul>
                    <li onClick={()=>{navigate("ParkingArea")}}>Parking Areas</li>
                </ul>
            </div>
            </div>
            {/* end of drop down */}

            <Outlet />

            <Routes>
                <Route path="DroppedCurbs" element={<DroppedCurbs />} />
                <Route path="CurbCutouts" element={<CurbCutouts/>} />
                <Route path="WalkPassageWays" element={<WalkWaysPassageWays/>} />
                <Route path="HandRails" element={<Handrails/>} />
                <Route path="Signage" element={<Signages/>} />
                <Route path="Crossing" element={<Crossing/>} />
                <Route path="ParkingArea" element={<ParkingArea/>} />
                <Route path="Fencing" element={<Fencing/>} />
                <Route path="Covers" element={<Covers/>} />
                <Route path="SafetySignage" element={<SafetySignage/>} />
                <Route path="Entrance" element={<Entrance/>} />
                <Route path="Ramps" element={<Ramps/>} />
                <Route path="Doors" element={<Doors/>} />
                <Route path="Thresholds" element={<Thresholds/>} />
                <Route path="Switches" element={<Switches/>} />
                <Route path="Corridor" element={<Corridors/>} />
                <Route path="Washtoilet" element={<WashRooms/>} />
                <Route path="Stairs" element={<Stairs/>} />
                <Route path="Elevator" element={<Elevator/>} />
                <Route path="WaterFountain" element={<WaterFountain/>} />
                <Route path="PublicTel" element={<PublicTelephone/>} />
                <Route path="PlaceAssembly" element={<PlacesOfAssembly/>} />
            </Routes>
        </div>
        {/* <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis, unde tenetur saepe, nobis ipsum perferendis repellat deleniti itaque voluptas, qui temporibus magni alias enim autem provident? Est, quam officia?
        </div> */}
    </div>
    </>
  )
}
