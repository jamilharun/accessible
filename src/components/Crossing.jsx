import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CROSSINGS } from '../preDatasets/OutsideAndAroundBuilding';

export default function Crossing() {
  const navigate = useNavigate();

  const [showDepth, setShowDepth] = useState(true)
  const [showWidth, setShowWidth] = useState(true)
  const [showCrossing, setShowCrossing] = useState(true)

  const [depth, setDepth] = useState(0)
  const [width, setWidth] = useState(0)
  const [crossing, setCrossing] = useState(0)

  const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)

  const searchDepth = () => {
    if (Number(depth) >= CROSSINGS.DEPTH.range.value) {
      console.log("success");
      setDesc(''); // Clear description on success
    } else {
      setDesc(CROSSINGS.DEPTH.desc);
      setError(true);
      setShowWidth(false);
      setShowCrossing(false);
    }
  };

  const searchWidth = () => {
    if (Number(width) >= CROSSINGS.WIDTH.range.value) {
      console.log("success");
      setDesc(''); // Clear description on success
    } else {
      setDesc(CROSSINGS.WIDTH.desc);
      setError(true);
      setShowDepth(false);
      setShowCrossing(false);
    }
  };

  const searchCrossing = () => {
    if (Number(crossing) >= CROSSINGS.CROSSING_PERIOD.range.value) {
      console.log("success");
      setDesc(''); // Clear description on success
    } else {
      setDesc(CROSSINGS.CROSSING_PERIOD.desc);
      setError(true);
      setShowDepth(false);
      setShowWidth(false);
    }
  };

  const backButton = () => {
    if (desc, error) {
      setDesc(false)
      setError(false);

      setShowDepth(true)
      setShowWidth(true)
      setShowCrossing(true)
    } else {
      navigate("/Profile");
    }
}
  return (
    <div className='container-moreheight poppins-regular'>
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
                      <p className='unit'>{`(${CROSSINGS.DEPTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchDepth}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }

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
                      <p className='unit'>{`(${CROSSINGS.WIDTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchWidth}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }
        
            {
              showCrossing && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Crossing period</p>
                      <input
                        type="number"
                        name="crossing"
                        className="input-field"
                        value={crossing}
                        onChange={(e) => setCrossing(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${CROSSINGS.CROSSING_PERIOD.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchCrossing}
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
