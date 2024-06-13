import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PLACES_ASSEMBLY } from '../preDatasets/InsideBuildingsAndStructures';
export default function PlacesOfAssembly() {
    const navigate = useNavigate(); 

    const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)

  const [showWheelChairTurnabout, setShowWheelChairTurnabout] = useState(true)
  const [showWheelChairWidth, setShowWheelChairWidth] = useState(true)
  const [showSpacePerson, setShowSpacePerson] = useState(true)

  const [wheelChairTurnabout, setWheelChairTurnabout] = useState(0)
  const [wheelChairWidth, setWheelChairWidth] = useState(0)
  const [spacePerson, setSpacePerson] = useState(0)

  const searchWheelChairTurnabout = () => {
    if (Number(wheelChairTurnabout) == PLACES_ASSEMBLY.WHEELCHAIR_TURNABOUT_SPACE.range) {
        console.log("success");
        setDesc(''); // Clear description on success
      } else {
        setDesc(PLACES_ASSEMBLY.WHEELCHAIR_TURNABOUT_SPACE.desc);
        setError(true);
        // setShowWheelChairTurnabout(false)
        setShowWheelChairWidth(false)
        setShowSpacePerson(false)
      }
  }

  const searchWheelChairWidth = () => {
    if (Number(wheelChairWidth) == PLACES_ASSEMBLY.WHEELCHAIR_WIDTH.range) {
        console.log("success");
        setDesc(''); // Clear description on success
      } else {
        setDesc(PLACES_ASSEMBLY.WHEELCHAIR_WIDTH.desc);
        setError(true);
        setShowWheelChairTurnabout(false)
        // setShowWheelChairWidth(false)
        setShowSpacePerson(false)
      }
  }

  const searchSpacePerson = () => {
    if (Number(spacePerson) == PLACES_ASSEMBLY.SPACEPERSON_BRACES_CRUTCHES.range) {
        console.log("success");
        setDesc(''); // Clear description on success
      } else {
        setDesc(PLACES_ASSEMBLY.SPACEPERSON_BRACES_CRUTCHES.desc);
        setError(true);
        setShowWheelChairTurnabout(false)
        setShowWheelChairWidth(false)
        // setShowSpacePerson(false)
      }
  }

  const backButton = () => {
    if (desc, error) {
      setDesc(false)
      setError(false);
      setShowWheelChairTurnabout(true)
      setShowWheelChairWidth(true)
      setShowSpacePerson(true)    
    } else {
      navigate("/Profile");
    }
  }
  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
        
        
       
            {
              showWheelChairTurnabout && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Wheelchair Turnabout space</p>
                      <input
                        type="number"
                        name="wheelChairTurnabout"
                        className="input-field"
                        value={wheelChairTurnabout}
                        onChange={(e) => setWheelChairTurnabout(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PLACES_ASSEMBLY.WHEELCHAIR_TURNABOUT_SPACE.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchWheelChairTurnabout}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                  
                </div>
            }

{
              showWheelChairWidth && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Wheelchair Turnabout space</p>
                      <input
                        type="number"
                        name="wheelChairWidth"
                        className="input-field"
                        value={wheelChairWidth}
                        onChange={(e) => setWheelChairWidth(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PLACES_ASSEMBLY.WHEELCHAIR_WIDTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchWheelChairWidth}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                  
                </div>
            }

{
              showSpacePerson && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Space/person with brase or crutches</p>
                      <input
                        type="number"
                        name="wheelChairWidth"
                        className="input-field"
                        value={spacePerson}
                        onChange={(e) => setSpacePerson(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PLACES_ASSEMBLY.SPACEPERSON_BRACES_CRUTCHES.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchSpacePerson}
                      className='input-button poppins-regular'>
                      <p>Search</p>
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
