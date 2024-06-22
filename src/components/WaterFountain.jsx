import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { WATER_FOUNTAINS } from '../preDatasets/InsideBuildingsAndStructures';
export default function WaterFountain() {
    const navigate = useNavigate(); 

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const [showLocation, setShowLocation] = useState(true)
    const [showWallMounted, setShowWallMounted] = useState(true)
    const [showFloorMounted, setShowFloorMounted] = useState(true)

    const [location, setLocation] = useState(0)
    const [wallMounted, setWallMounted] = useState(0)
    const [floorMounted, setFloorMounted] = useState(0)

    const searchLocation = () => {
        if (Number(location) >= WATER_FOUNTAINS.LOCATION.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            // showLocation(false)
            setShowWallMounted(false)
            setShowFloorMounted(false)
          } else {
            setDesc(WATER_FOUNTAINS.LOCATION.desc);
            setError(true);
            setButtonDefault(false)
            // showLocation(false)
            setShowWallMounted(false)
            setShowFloorMounted(false)
          }
    }

    const searchWallMounted = () => {
        if (Number(wallMounted) <= WATER_FOUNTAINS.WALL_MOUNTED.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowLocation(false)
            // setShowWallMounted(false)
            setShowFloorMounted(false)
          } else {
            setDesc(WATER_FOUNTAINS.WALL_MOUNTED.desc);
            setError(true);
            setButtonDefault(false)
            setShowLocation(false)
            // setShowWallMounted(false)
            setShowFloorMounted(false)
          }
    }

    const searchFloorMounted = () => {
        if (Number(floorMounted) > WATER_FOUNTAINS.FLOOR_MOUNTED.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowLocation(false)
            setShowWallMounted(false)
            // setShowFloorMounted(false)
          } else {
            setDesc(WATER_FOUNTAINS.FLOOR_MOUNTED.desc);
            setError(true);
            setButtonDefault(false)
            setShowLocation(false)
            setShowWallMounted(false)
            // setShowFloorMounted(false)
          }
        
    }

    const backButton = () => {
      if (!buttonDefault) {
        setDesc(false)
        setError(false);
        setButtonDefault(true)
        setShowLocation(true)
        setShowWallMounted(true)
        setShowFloorMounted(true)
      } else {
        navigate("/Profile");
      }
    }
  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
               showLocation && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular justify-self-start'>Location of Fountain</p>
                      <input
                        type="number"
                        name="location"
                        className="input-field "
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WATER_FOUNTAINS.LOCATION.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLocation}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div> :
                    <div>
                      {
                        error ? <div>
                          <p className='inadequate'>INADEQUATE</p>
                        </div> :
                        <div>
                        <p className='inadequate'>ADEQUATE</p>
                      </div>
                      }
                    </div>
                  }
                </div>
            }

            {
               showWallMounted && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Wall-mounted W.F. height</p>
                      <input
                        type="number"
                        name="wallMounted"
                        className="input-field"
                        value={wallMounted}
                        onChange={(e) => setWallMounted(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WATER_FOUNTAINS.WALL_MOUNTED.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchWallMounted}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div> :
                    <div>
                      {
                        error ? <div>
                          <p className='inadequate'>INADEQUATE</p>
                        </div> :
                        <div>
                        <p className='inadequate'>ADEQUATE</p>
                      </div>
                      }
                    </div>
                  }
                </div>
            }

            {
               showFloorMounted && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Floor-mounted W.F. height</p>
                      <input
                        type="number"
                        name="floorMounted"
                        className="input-field"
                        value={floorMounted}
                        onChange={(e) => setFloorMounted(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WATER_FOUNTAINS.FLOOR_MOUNTED.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchFloorMounted}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div> :
                    <div>
                      {
                        error ? <div>
                          <p className='inadequate'>INADEQUATE</p>
                        </div> :
                        <div>
                        <p className='inadequate'>ADEQUATE</p>
                      </div>
                      }
                    </div>
                  }
                </div>
            }

            
            {desc && <div dangerouslySetInnerHTML={{ __html: desc }} className='description'></div>}
        </div>
        <div className='backButton' onClick={()=>{backButton()}}>
          <p>
            back
          </p>
        </div>
    </div>
  )
}
