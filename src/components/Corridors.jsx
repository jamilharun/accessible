import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CORRIDORS } from '../preDatasets/InsideBuildingsAndStructures';

export default function Corridors() {
    const navigate = useNavigate();
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)

    const [showWidth, setShowWidth] = useState(true)
    const [showTurnaboutArea, setShowTurnaboutArea] = useState(true)
    const [showTurnaboutSpace, setShowTurnaboutSpace] = useState(true)
    const [showTurnaboutSpaceDead, setShowTurnaboutSpaceDead] = useState(true)
    
    const [width, setWidth] = useState(0)
    const [tounaboutAreaNumerator, setTounablutAreaNumerator] = useState(0)
    const [tounaboutAreaDenominator, setTounablutAreaDenominator] = useState(0)
    const [turnablutSpace, setTurnaboutSpace] = useState(0)
    const [turnablutSpaceDead, setTurnaboutSpaceDead] = useState(0)
    
    const searchWidth = () => {
        if (Number(width) >= CORRIDORS.WIDTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
        } else {
          setDesc(CORRIDORS.WIDTH.desc);
          setError(true);
          setShowTurnaboutArea(false)
          setShowTurnaboutSpace(false)
          setShowTurnaboutSpaceDead(false)
        }
      };

      const searchTurnaboutArea = () => {
        const parsedNumerator = parseFloat(tounaboutAreaNumerator);
        const parsedDenominator = parseFloat(tounaboutAreaDenominator);
        if (parsedNumerator >= CORRIDORS.TURNABOUTS_AREA.range.numerator && 
            parsedDenominator <= CORRIDORS.TURNABOUTS_AREA.range.denominator) {
          setError(false);
          // Add any search logic here if needed
          console.log('Values are within the range.');
        } else {
          setDesc(CORRIDORS.TURNABOUTS_AREA.desc);
          setError(true);
          setShowWidth(true)
          setShowTurnaboutArea(true)
          setShowTurnaboutSpace(true)
          setShowTurnaboutSpaceDead(true)
        }
      }

      const searchTurnaboutSpace = () => {
        if (Number(turnablutSpace) <= CORRIDORS.TURNABOUTS_SPACE.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
        } else {
          setDesc(CORRIDORS.TURNABOUTS_SPACE.desc);
          setError(true);
          setShowWidth(false)
          setShowTurnaboutArea(false)
          setShowTurnaboutSpaceDead(false)
        }
      }

      const searchTurnaboutSpaceDead = () => {
        if (Number(turnablutSpaceDead) <= CORRIDORS.TURNABOUT_SPACES_DEAD_ENDS.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
        } else {
          setDesc(CORRIDORS.TURNABOUT_SPACES_DEAD_ENDS.desc);
          setError(true);
          setShowWidth(false)
          setShowTurnaboutArea(false)
          setShowTurnaboutSpace(false)
          
        }

      }

      const backButton = () => {
        if (desc, error) {
          setDesc(false)
          setError(false);
          setShowWidth(true)
          setShowTurnaboutArea(true)
          setShowTurnaboutSpace(true)
          setShowTurnaboutSpaceDead(true)
          
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
                      <p className='unit'>{`(${CORRIDORS.WIDTH.unit})`}</p>
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
              showTurnaboutArea &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Turnabout Area</p>
                      <input
                        type="number"
                        name="tounaboutAreaNumerator"
                        className="input-field"
                        value={tounaboutAreaNumerator}
                        onChange={(e) => setTounablutAreaNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular'>x</p>
                      <input
                        type="number"
                        name="handRailDenominator"
                        className="input-field"
                        value={tounaboutAreaDenominator}
                        onChange={(e) => setTounablutAreaDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${CORRIDORS.TURNABOUTS_AREA.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchTurnaboutArea}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }


            {
              showTurnaboutSpace && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Turnabout space</p>
                      <input
                        type="number"
                        name="turnablutSpace"
                        className="input-field"
                        value={turnablutSpace}
                        onChange={(e) => setTurnaboutSpace(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${CORRIDORS.TURNABOUTS_SPACE.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchTurnaboutSpace}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                  
                </div>
            }

{
              showTurnaboutSpaceDead && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Turnabout space at dead end</p>
                      <input
                        type="number"
                        name="turnablutSpace"
                        className="input-field"
                        value={turnablutSpaceDead}
                        onChange={(e) => setTurnaboutSpaceDead(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${CORRIDORS.TURNABOUT_SPACES_DEAD_ENDS.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchTurnaboutSpaceDead}
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
