import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { THRESHOLDS } from '../preDatasets/InsideBuildingsAndStructures';

export default function Thresholds() {
    const navigate = useNavigate();

    const [showMax, setShowMax] = useState(true)
    const [max, setMax] = useState(0)
    
  const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)
  const [buttonDefault, setButtonDefault] = useState(true)
  const searchMax = () => {
    if (Number(max) <= THRESHOLDS.MAX.range.value) {
      console.log("success");
      setDesc(''); // Clear description on success
      setButtonDefault(false)
    } else {
      setDesc(THRESHOLDS.MAX.desc);
      setError(true);
      setButtonDefault(false)
    }
  };

  const backButton = () => {
    if (!buttonDefault) {
      setDesc(false)
      setError(false);
      setShowMax(true)
      setButtonDefault(true)
    } else {
      navigate("/Profile");
    }
  }

  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showMax && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Max</p>
                      <input
                        type="number"
                        name="max"
                        className="input-field"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${THRESHOLDS.MAX.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchMax}
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
