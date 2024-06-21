import React, { useState } from 'react'
import { HANDRAILS } from '../preDatasets/OutsideAndAroundBuilding'
import { useNavigate } from "react-router-dom";

export default function Handrails() {
    const navigate = useNavigate();

    const [showHeight, setShowHeight] = useState(true)
    const [showHandRails, setShowHandRails] = useState(true)
    const [showExtension, setShowExtension] = useState(true)
    const [showHandRailsPullGrip, setShowHandRailsPullGrip] = useState(true)
    const [showClearanceHandRailsAttachedWalls, setShowClearanceHandRailsAttachedWalls] = useState(true)
    const [showClearanceHandRailsLedges, setShowClearanceHandRailsLegs] = useState(true)

    const [heightNumerator, setHeightNumerator] = useState(0)
    const [heightDenominator, setHeightDenominator] = useState(0)

    const [handRailNumerator, setHandRailNumerator] = useState(0)

    const [extension, setExtension] = useState(0)

    const [handRailFullGripNumerator, setHandRailFullGripNumerator] = useState(0)
    const [handRailFullGripDenominator, setHandRailFullGripDenominator] = useState(0)

    const [clearanceHandrailsAW, setClearanceHandrailsAW] = useState(0)

    const [CHL, setCHL] = useState(0)
    
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const searchHeight = () => {
        const numerator = parseFloat(heightNumerator);
        const denominator = parseFloat(heightDenominator);
        // const { numerator: minNumerator, denominator: maxDenominator } = HEIGHT.parsedRange;

        if (numerator === HANDRAILS.HEIGHT.parsedRange.numerator && 
            denominator === HANDRAILS.HEIGHT.parsedRange.denominator) {
        setError(false);
        console.log("success");
        setDesc('');
        setButtonDefault(false)
        // setShowHeight(false)
        setShowHandRails(false)
        setShowExtension(false)
        setShowHandRailsPullGrip(false)
        setShowClearanceHandRailsAttachedWalls(false)
        setShowClearanceHandRailsLegs(false)
        } else {
            setError(true);
            setDesc(HANDRAILS.HEIGHT.desc);
            setButtonDefault(false)
        // setShowHeight(false)
        setShowHandRails(false)
        setShowExtension(false)
        setShowHandRailsPullGrip(false)
        setShowClearanceHandRailsAttachedWalls(false)
        setShowClearanceHandRailsLegs(false)
        }
    }

    const searchHandRails = () => {
        const numerator = parseFloat(handRailNumerator);
        // const denominator = parseFloat(handRailDenominator);
    
        if (numerator >= HANDRAILS.HANDRAILS.parsedRange.numerator && 
            numerator <= HANDRAILS.HANDRAILS.parsedRange.denominator) {
          setError(false);
          setDesc('');
          setButtonDefault(false)
          setShowHeight(false)
          // setShowHandRails(false)
          setShowExtension(false)
          setShowHandRailsPullGrip(false)
          setShowClearanceHandRailsAttachedWalls(false)
          setShowClearanceHandRailsLegs(false)
          
        } else {
          setDesc(HANDRAILS.HANDRAILS.desc);
          setError(true);
          setButtonDefault(false)
          setShowHeight(false)
          // setShowHandRails(false)
          setShowExtension(false)
          setShowHandRailsPullGrip(false)
          setShowClearanceHandRailsAttachedWalls(false)
          setShowClearanceHandRailsLegs(false)
        }
    };

    const searchExtension = () => {
        if (Number(extension) == HANDRAILS.EXTENSION.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowHeight(false)
            setShowHandRails(false)
            // setShowExtension(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsAttachedWalls(false)
            setShowClearanceHandRailsLegs(false)
          } else {
            setDesc(HANDRAILS.EXTENSION.desc);
            setError(true);
            setButtonDefault(false)
            setShowHeight(false)
            setShowHandRails(false)
            // setShowExtension(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsAttachedWalls(false)
            setShowClearanceHandRailsLegs(false)
          }
    }

    const searchHandRailsFullGrip = () => {
      const numerator = parseFloat(handRailFullGripNumerator);
      // const denominator = parseFloat(handRailDenominator);
  
      if (numerator >= HANDRAILS.HANDRAILS_FULL_GRIP.parsedRange.numerator && 
          numerator <= HANDRAILS.HANDRAILS_FULL_GRIP.parsedRange.denominator) {
        setError(false);
        setDesc('');
        setButtonDefault(false)
        setShowHeight(false)
        setShowHandRails(false)
        setShowExtension(false)
        // setShowHandRailsPullGrip(false)
        setShowClearanceHandRailsAttachedWalls(false)
        setShowClearanceHandRailsLegs(false)
        
      } else {
        setDesc(HANDRAILS.HANDRAILS.desc);
        setError(true);
        setButtonDefault(false)
        setShowHeight(false)
        setShowHandRails(false)
        setShowExtension(false)
        // setShowHandRailsPullGrip(false)
        setShowClearanceHandRailsAttachedWalls(false)
        setShowClearanceHandRailsLegs(false)
      }
    }

    const searchCHAW = () => {
        if (Number(clearanceHandrailsAW) >= HANDRAILS.CLEARANCE_HANDRAILS_ATTACHED_WALLS.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            
            setButtonDefault(false)
            setShowHeight(false)
            setShowHandRails(false)
            setShowExtension(false)
            setShowHandRailsPullGrip(false)
            // setShowClearanceHandRailsAttachedWalls(false)
            setShowClearanceHandRailsLegs(false)
          } else {
            setDesc(HANDRAILS.CLEARANCE_HANDRAILS_ATTACHED_WALLS.desc);
            setError(true);
            setButtonDefault(false)
            setShowHeight(false)
            setShowHandRails(false)
            setShowExtension(false)
            setShowHandRailsPullGrip(false)
            // setShowClearanceHandRailsAttachedWalls(false)
            setShowClearanceHandRailsLegs(false)
          }
    }

    const searchCHL = () => {
        if (Number(CHL) >= HANDRAILS.CLEARANCE_HANDRAILS_LEDGES.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowHeight(false)
            setShowHandRails(false)
            setShowExtension(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsAttachedWalls(false)
            // setShowClearanceHandRailsLegs(false)
          } else {
            setDesc(HANDRAILS.CLEARANCE_HANDRAILS_LEDGES.desc);
            setError(true);
            setButtonDefault(false)
            setShowHeight(false)
            setShowHandRails(false)
            setShowExtension(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsAttachedWalls(false)
            // setShowClearanceHandRailsLegs(false)
          }
    }

    const backButton = () => {
        if (!buttonDefault) {
            setDesc(false)
            setError(false);
            setButtonDefault(true)
            setShowHeight(true) 
            setShowHandRails(true)
            setShowExtension(true)
            setShowClearanceHandRailsAttachedWalls(true)
            setShowHandRailsPullGrip(true)
            setShowClearanceHandRailsLegs(true)
        } else {
          navigate("/Profile");
        }
      }

  return (
    <div className='container-moreheight poppins-regular'>
        <div className='container-body '>

            {
              showHeight &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width h-20'>
                      <p className=' input-text poppins-regular'>Height above steps or ramps</p>
                      <input
                        type="number"
                        name="heightNumerator"
                        className="input-field"
                        value={heightNumerator}
                        onChange={(e) => setHeightNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular'>&</p>
                      <input
                        type="number"
                        name="heightDenominator"
                        className="input-field"
                        value={heightDenominator}
                        onChange={(e) => setHeightDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.HEIGHT.unit})`}</p>
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
              showHandRails &&
                <div className=' flex mb-5'>
                  {/* <p>computation not working</p> */}
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>HandRails for projection at great heights</p>
                      <input
                        type="number"
                        name="handRailNumerator"
                        className="input-field"
                        value={handRailNumerator}
                        onChange={(e) => setHandRailNumerator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.HANDRAILS_FULL_GRIP.unit})`}</p>
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchHandRails}
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
              showExtension && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width  h-20'>
                      <p className=' input-text poppins-regular'>Extension or handrails at the start and end of ramps and stairs</p>
                      <input
                        type="number"
                        name="WIDTH"
                        className="input-field"
                        value={extension}
                        onChange={(e) => setExtension(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.EXTENSION.unit})`}</p>
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchExtension}
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
              showHandRailsPullGrip &&
                <div className=' flex mb-5'>
                  {/* <p>computation not working</p> */}
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Handrail that require full grip</p>
                      <input
                        type="number"
                        name="handRailFullGripNumerator"
                        className="input-field"
                        value={handRailFullGripNumerator}
                        onChange={(e) => setHandRailFullGripNumerator(e.target.value)}
                      />
                      
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.HANDRAILS_FULL_GRIP.unit})`}</p>
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchHandRailsFullGrip}
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
              showClearanceHandRailsAttachedWalls && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Clearance of handrails attached to walls</p>
                      <input
                        type="number"
                        name="WIDTH"
                        className="input-field"
                        value={clearanceHandrailsAW}
                        onChange={(e) => setClearanceHandrailsAW(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.CLEARANCE_HANDRAILS_ATTACHED_WALLS.unit})`}</p>
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchCHAW}
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
              showClearanceHandRailsLedges && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Clearance of handrails on ledge</p>
                      <input
                        type="number"
                        name="WIDTH"
                        className="input-field"
                        value={CHL}
                        onChange={(e) => setCHL(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.CLEARANCE_HANDRAILS_LEDGES.unit})`}</p>
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchCHL}
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
