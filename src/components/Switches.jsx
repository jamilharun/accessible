import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SWITCHES } from '../preDatasets/InsideBuildingsAndStructures';

export default function Switches() {
    const navigate = useNavigate(); 

    const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)
  
  const [buttonDefault, setButtonDefault] = useState(true)

    const [showHeight, setShowHeight] = useState(true)
    const [showDistance, setShowDistance] = useState(true)

    const [height, setHeight] = useState(0)
    const [distance, setDistance] = useState(0)


    const searchHeight  = () => {
        if (Number(height) >= SWITCHES.HEIGHT.range.min && 
            Number(height) <= SWITCHES.HEIGHT.range.max) {
            console.log("success");
            setDesc(''); // Clear description on success
            setShowDistance(false)
            setButtonDefault(false)
          } else {
            setDesc(SWITCHES.HEIGHT.desc);
            setError(true);
            setShowDistance(false)
            setButtonDefault(false)
          }
      }

      const searchDistance = () => {
        if (Number(distance) <= SWITCHES.DISTANCE.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setShowHeight(false)
          setButtonDefault(false)
        } else {
          setDesc(SWITCHES.DISTANCE.desc);
          setError(true);
          setShowHeight(false)
          setButtonDefault(false)
        }
      };

      const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowDistance(true)
          setShowHeight(true)     
        } else {
          navigate("/Profile");
        }
      }

      
  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showHeight && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Height</p>
                      <input
                        type="number"
                        name="max"
                        className="input-field w-full"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SWITCHES.HEIGHT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchHeight}
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
              showDistance && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Distance from the latch</p>
                      <input
                        type="number"
                        name="max"
                        className="input-field"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SWITCHES.DISTANCE.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchDistance}
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
