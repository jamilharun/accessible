import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SIGNAGE } from '../preDatasets/Safety';

export default function SafetySignage() {
    const navigate = useNavigate();

    const [showAvailable, setShowAvailable] = useState(true)
    const [available, setAvailable] = useState(0)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const searchAvailable = () => {
      if (Number(available) >= SIGNAGE.AVAILABLE.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowKickBoard(false);
        } else {
          setDesc(SIGNAGE.AVAILABLE.desc);
          setError(true);
          setButtonDefault(false)
          setShowKickBoard(false);
      }
  }

  const backButton = () => {
    if (!buttonDefault) {
      setDesc(false)
      setError(false);
      setShowAvailable(true)
      setButtonDefault(true)
    } else {
      navigate("/Profile");
    }
  }

  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showAvailable && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Available</p>
                      <input
                        type="number"
                        name="available"
                        className="input-field"
                        value={available}
                        onChange={(e) => setAvailable(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SIGNAGE.AVAILABLE.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchAvailable}
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
