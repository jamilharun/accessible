import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { DOORS } from '../preDatasets/InsideBuildingsAndStructures';


export default function Doors() {
    const navigate = useNavigate();
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const [showWidth, setShowWidth] = useState(true)
    const [showLevelSpace, setShowLevelSpace] = useState(true)
    const [showLevelSpaceCorridor, setShowLevelSpaceCorridor] = useState(true)
    const [showDoorKnobs, setShowDoorKnobs] = useState(true)
    const [showVertical, setShowVertical] = useState(true)
    const [showKick, setShowKick] = useState(true)

    const [width, setWidth] = useState(0)
    const [levelSpaceNumerator, setLevelSpaceNumerator] = useState(0)
    const [levelSpaceDenominator, setLevelSpaceDenominator] = useState(0)
    const [levelSpaceCorridor, setLevelSpaceCorridor] = useState(0)
    const [doorKnobs, setDoorKnobs] = useState(0)
    const [vertical, setVertical] = useState(0)
    const [kick, setKick] = useState(0)

    const searchWidth = () => {
        if (Number(width) >= DOORS.WIDTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowLevelSpace(false)
          setShowLevelSpaceCorridor(false)
          setShowDoorKnobs(false)
          setShowVertical(false)
          setShowKick(false)
        } else {
          setDesc(DOORS.WIDTH.desc);
          setError(true);
          setButtonDefault(false)
          setShowLevelSpace(false)
          setShowLevelSpaceCorridor(false)
          setShowDoorKnobs(false)
          setShowVertical(false)
          setShowKick(false)
        }
      };

      const searchLevelSpace  = () => {
        const parsedNumerator = Number(levelSpaceNumerator);
        const parsedDenominator = Number(levelSpaceDenominator);
      
        if (parsedNumerator / parsedDenominator == DOORS.LEVEL_SPACE.rangeParsed.numerator / DOORS.LEVEL_SPACE.rangeParsed.denominator) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowWidth(false)
          setShowLevelSpaceCorridor(false)
          setShowDoorKnobs(false)
          setShowVertical(false)
          setShowKick(false)
        } else {
          setDesc(DOORS.LEVEL_SPACE.desc);
          setError(true);
          setButtonDefault(false)
          setShowWidth(false)
          setShowLevelSpaceCorridor(false)
          setShowDoorKnobs(false)
          setShowVertical(false)
          setShowKick(false)
        }
      };

      const searchLevelSpaceCorridor  = () => {
        if (Number(levelSpaceCorridor) >= DOORS.LEVEL_SPACE_CORRIDOR.range.value) {
        console.log("success");
        setDesc(''); // Clear description on success
        setButtonDefault(false)
        setShowWidth(false)
        setShowLevelSpace(false)
        setShowDoorKnobs(false)
        setShowVertical(false)
        setShowKick(false)
      } else {
        setDesc(DOORS.LEVEL_SPACE_CORRIDOR.desc);
        setError(true);
        setButtonDefault(false)
        setShowWidth(false)
        setShowLevelSpace(false)
        setShowDoorKnobs(false)
        setShowVertical(false)
        setShowKick(false)
      }}
      const searchDoorKnobs  = () => {
        if (Number(doorKnobs) >= DOORS.DOORKNOBS.range.numerator && 
            Number(doorKnobs) <= DOORS.DOORKNOBS.range.denominator) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowWidth(false)
            setShowLevelSpace(false)
            setShowLevelSpaceCorridor(false)
            setShowVertical(false)
            setShowKick(false)
          } else {
            setDesc(DOORS.DOORKNOBS.desc);
            setError(true);
            setButtonDefault(false)
            setShowWidth(false)
            setShowLevelSpace(false)
            setShowLevelSpaceCorridor(false)
            setShowVertical(false)
            setShowKick(false)
          }
      }
      const searchVertical  = () => {
        if (Number(vertical) == DOORS.VERTICAL.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowLevelSpace(false)
            setShowLevelSpaceCorridor(false)
            setShowDoorKnobs(false)
            setShowKick(false)
            setShowWidth(false)
          } else {
            setDesc(DOORS.VERTICAL.desc);
            setError(true);
            setButtonDefault(false)
            setShowLevelSpace(false)
            setShowLevelSpaceCorridor(false)
            setShowDoorKnobs(false)
            setShowKick(false)
            setShowWidth(false)
          }
      }
      const searchKick  = () => {
        if (Number(kick) >= DOORS.KICK.range.min && 
            Number(kick) <= DOORS.KICK.range.max) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowWidth(false)
          setShowLevelSpace(false)
          setShowLevelSpaceCorridor(false)
          setShowDoorKnobs(false)
          setShowVertical(false)
          } else {
            setDesc(DOORS.KICK.desc);
            setError(true);
            setButtonDefault(false)
            setShowWidth(false)
          setShowLevelSpace(false)
          setShowLevelSpaceCorridor(false)
          setShowDoorKnobs(false)
          setShowVertical(false)
          }
      }


      const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowWidth(true)
          setShowLevelSpace(true)
          setShowLevelSpaceCorridor(true)
          setShowDoorKnobs(true)
          setShowVertical(true)
          setShowKick(true)
        } else {
          navigate("/");
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
                        name="WIDTH"
                        className="input-field "
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${DOORS.WIDTH.unit})`}</p>
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
              showLevelSpace &&
                <div className=' flex mb-5'>  
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Level space</p>
                      <input
                        type="number"
                        name="levelSpaceNumerator"
                        className="input-field"
                        value={levelSpaceNumerator}
                        onChange={(e) => setLevelSpaceDenominator(e.target.value)}
                      />
                      <p className=' input-border poppins-regular'>:</p>
                      <input
                        type="number"
                        name="levelSpaceDenominator"
                        className="input-field"
                        value={levelSpaceDenominator}
                        onChange={(e) => setLevelSpaceDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${DOORS.LEVEL_SPACE.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLevelSpace}
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
              showLevelSpaceCorridor && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Level space (corridor width)</p>
                      <input
                        type="number"
                        name="WIDTH"
                        className="input-field"
                        value={levelSpaceCorridor}
                        onChange={(e) => setLevelSpaceCorridor(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${DOORS.LEVEL_SPACE_CORRIDOR.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLevelSpaceCorridor}
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
              showDoorKnobs && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Doorknobs and other hardware</p>
                      <input
                        type="number"
                        name="doorKnobs"
                        className="input-field"
                        value={doorKnobs}
                        onChange={(e) => setDoorKnobs(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${DOORS.DOORKNOBS.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchDoorKnobs}
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
                showVertical && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Vertical dull handles</p>
                      <input
                        type="number"
                        name="doorKnobs"
                        className="input-field"
                        value={vertical}
                        onChange={(e) => setVertical(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${DOORS.VERTICAL.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchVertical}
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
                showKick && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Kick plates</p>
                      <input
                        type="number"
                        name="doorKnobs"
                        className="input-field "
                        value={kick}
                        onChange={(e) => setKick(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${DOORS.KICK.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchKick}
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
