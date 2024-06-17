import React, { useState } from 'react'
import { ENTRANCES } from '../preDatasets/InsideBuildingsAndStructures';
import { useNavigate } from 'react-router-dom';

export default function Entrance() {
    const navigate = useNavigate();
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)

    const [showWidth, setShowWidth] = useState(true)
    const [width, setWidth] = useState(0)
    const [depth, setDepth] = useState(0)
    const [showDepth, setShowDepth] = useState(true)
    const [buttonDefault, setButtonDefault] = useState(true)

    const searchDepth = () => {
        if (Number(depth) >= ENTRANCES.DEPTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setShowWidth(false);
          setButtonDefault(false)
        } else {
          setDesc(ENTRANCES.DEPTH.desc);
          setError(true);
          setShowWidth(false);
          setButtonDefault(false)
        }
      };

    const searchWidth = () => {
        if (Number(width) >= ENTRANCES.WIDTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowDepth(false);
        } else {
          setDesc(ENTRANCES.WIDTH.desc);
          setError(true);
          setButtonDefault(false)
          setShowDepth(false);
        }
      };
    
    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setShowDepth(true)
          setShowWidth(true)
          setButtonDefault(true)
        } else {
          navigate("/Profile");
        }
      }
  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
        {
              showDepth && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Depth</p>
                      <input
                        type="number"
                        name="depth"
                        className="input-field"
                        value={depth}
                        onChange={(e) => setDepth(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ENTRANCES.DEPTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchDepth}
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
              showWidth && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>width</p>
                      <input
                        type="number"
                        name="WIDTH"
                        className="input-field"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ENTRANCES.WIDTH.unit})`}</p>
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
