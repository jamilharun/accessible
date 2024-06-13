import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FENCING } from '../preDatasets/Safety';

export default function Fencing() {
    const navigate = useNavigate();

    const [showTopRails, setShowTopRails] = useState(true)
    const [showTappingRails, setShowTappingRails] = useState(true)

    const [topRails, setTopRails] = useState(0)
    const [tappingRails, setTappingRails] = useState(0)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)

    const searchTopRails = () => {
        if (Number(topRails) >= FENCING.TOP_RAIL.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
          } else {
            setDesc(FENCING.TOP_RAIL.desc);
            setError(true);
            setShowTappingRails(false);
        }
    }

    const searchTappingRails = () => {
        if (Number(tappingRails) <= FENCING.TAPPING_RAIL.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
          } else {
            setDesc(FENCING.TAPPING_RAIL.desc);
            setError(true);
            setShowTopRails(false);
          }
    }

    const backButton = () => {
        if (desc, error) {
          setDesc(false)
          setError(false);
          setShowTopRails(true)
          setShowTappingRails(true)
        } else {
          navigate("/Profile");
        }
      }
  
  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showTopRails && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Top rails</p>
                      <input
                        type="number"
                        name="topRails"
                        className="input-field"
                        value={topRails}
                        onChange={(e) => setTopRails(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${FENCING.TOP_RAIL.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchTopRails}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                  
                </div>
            }

            {
              showTappingRails && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Tapping rails</p>
                      <input
                        type="number"
                        name="tappingRails"
                        className="input-field"
                        value={tappingRails}
                        onChange={(e) => setTappingRails(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${FENCING.TAPPING_RAIL.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchTappingRails}
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
