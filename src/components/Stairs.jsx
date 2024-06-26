import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { STAIRS } from '../preDatasets/InsideBuildingsAndStructures';

export default function Stairs() {
    const navigate = useNavigate(); 

    const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)
  const [buttonDefault, setButtonDefault] = useState(true)

  const [showTactile, setShowTactile] = useState(true)
  const [tactile, setTactile] = useState(0)

  const searchTactile = () => {
    if (Number(tactile) == STAIRS.TACTILE_STRIP_WIDTH.range) {
        console.log("success");
        setDesc(''); // Clear description on success
        setButtonDefault(false)
      } else {
        setDesc(STAIRS.TACTILE_STRIP_WIDTH.desc);
        setError(true);
        setButtonDefault(false)
      }
  }

  const backButton = () => {
    if (!buttonDefault) {
      setDesc(false)
      setError(false);
      setShowTactile(true)
      setButtonDefault(true)
    } else {
      navigate("/");
    }
  }

  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showTactile && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Tactile strip width</p>
                      <input
                        type="number"
                        name="max"
                        className="input-field"
                        value={tactile}
                        onChange={(e) => setTactile(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${STAIRS.TACTILE_STRIP_WIDTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchTactile}
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
