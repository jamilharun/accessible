import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PARKING_AREAS } from '../preDatasets/Parking';

export default function ParkingArea() {
    const navigate = useNavigate();

    const [showWidth, setShowWidth] = useState(true)
    const [showClear, setShowClear] = useState(true)

    const [width, setWidth] = useState(0)
    const [clear, setClear] = useState(0)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const searchWidth = () => {
        if (Number(width) >= PARKING_AREAS.WIDTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          
          setButtonDefault(false)
          setShowClear(false);
          // setShowWidth(false);
        } else {
          setDesc(PARKING_AREAS.WIDTH.desc);
          setError(true);
          setButtonDefault(false)
          setShowClear(false);
          // setShowWidth(false);
        }
      };

    const searchClear = () => {
        if (Number(clear) >= PARKING_AREAS.CLEAR.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          // setShowClear(false);
          setShowWidth(false);
        } else {
          setDesc(PARKING_AREAS.CLEAR.desc);
          setError(true);
          setButtonDefault(false)
          // setShowClear(false);
          setShowWidth(false);
        }
      };

    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowWidth(true)
            setShowClear(true)
        } else {
          navigate("/Profile");
        }
    }
  
    return (
    <div className='container-moreheight poppins-regular'>
        <div className='container-body '>

            

            {
              showWidth && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Width</p>
                      <input
                        type="number"
                        name="width"
                        className="input-field"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PARKING_AREAS.WIDTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchWidth}
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
              showClear && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Clear</p>
                      <input
                        type="number"
                        name="depth"
                        className="input-field"
                        value={clear}
                        onChange={(e) => setClear(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PARKING_AREAS.CLEAR.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchClear}
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
