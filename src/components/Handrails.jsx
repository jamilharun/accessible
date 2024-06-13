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
    const [handRailDenominator, setHandRailDenominator] = useState(0)

    const [extension, setExtension] = useState(0)

    const [handRailFullGripNumerator, setHandRailFullGripNumerator] = useState(0)
    const [handRailFullGripDenominator, setHandRailFullGripDenominator] = useState(0)

    const [clearanceHandrailsAW, setClearanceHandrailsAW] = useState(0)

    const [CHL, setCHL] = useState(0)
    
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)

    const searchHeight = () => {
        const numerator = parseFloat(heightNumerator);
        const denominator = parseFloat(heightDenominator);
        // const { numerator: minNumerator, denominator: maxDenominator } = HEIGHT.parsedRange;

        if (numerator === HANDRAILS.HEIGHT.parsedRange.numerator && 
            denominator === HANDRAILS.HEIGHT.parsedRange.denominator) {
        setError(false);
        console.log("success");
        setDesc('');
        } else {
            setError(true);
            setDesc(HANDRAILS.HEIGHT.desc);
            setShowHandRails(false)
            setShowExtension(false)
            setShowClearanceHandRailsAttachedWalls(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsLegs(false)
        }
    }

    const searchHandRails = () => {
        const numerator = parseFloat(handRailNumerator);
        const denominator = parseFloat(handRailDenominator);
    
        if (numerator >= minNumerator && denominator <= maxDenominator) {
          setError(false);
          // Add any search logic here if needed
          console.log('Values are within the range.');
        } else {
          setError(true);
        }
    };

    const searchExtension = () => {
        if (Number(extension) == HANDRAILS.EXTENSION.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
          } else {
            setDesc(HANDRAILS.EXTENSION.desc);
            setError(true);
            setShowHeight(false)
            setShowHandRails(false)
            setShowClearanceHandRailsAttachedWalls(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsLegs(false)
          }
    }

    const searchHandRailsFullGrip = () => {

    }

    const searchCHAW = () => {
        if (Number(clearanceHandrailsAW) >= HANDRAILS.CLEARANCE_HANDRAILS_ATTACHED_WALLS.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
          } else {
            setDesc(HANDRAILS.CLEARANCE_HANDRAILS_ATTACHED_WALLS.desc);
            setError(true);
            setShowHeight(false)
            setShowHandRails(false)
            setShowExtension(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsLegs(false)
          }
    }

    const searchCHL = () => {
        if (Number(CHL) >= HANDRAILS.CLEARANCE_HANDRAILS_LEDGES.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
          } else {
            setDesc(HANDRAILS.CLEARANCE_HANDRAILS_LEDGES.desc);
            setError(true);
            setShowHeight(false)
            setShowHandRails(false)
            setShowExtension(false)
            setShowHandRailsPullGrip(false)
            setShowClearanceHandRailsAttachedWalls(false)
          }
    }

    const backButton = () => {
        if (desc, error) {
            setDesc(false)
            setError(false);
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
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Height</p>
                      <input
                        type="number"
                        name="heightNumerator"
                        className="input-field"
                        value={heightNumerator}
                        onChange={(e) => setHeightNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular'>x</p>
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
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchHeight}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }

            {
              showHandRails &&
                <div className=' flex mb-5'>
                  <p>computation not working</p>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>HandRails</p>
                      <input
                        type="number"
                        name="handRailNumerator"
                        className="input-field"
                        value={handRailNumerator}
                        onChange={(e) => setHandRailNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular'>x</p>
                      <input
                        type="number"
                        name="handRailDenominator"
                        className="input-field"
                        value={handRailDenominator}
                        onChange={(e) => setHandRailDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.HANDRAILS_FULL_GRIP.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchHandRails}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }

            {
              showExtension && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Extension</p>
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
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchExtension}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }

            {
              showHandRailsPullGrip &&
                <div className=' flex mb-5'>
                  <p>computation not working</p>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Handrail full grip</p>
                      <input
                        type="number"
                        name="handRailFullGripNumerator"
                        className="input-field"
                        value={handRailFullGripNumerator}
                        onChange={(e) => setHandRailFullGripNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular'>x</p>
                      <input
                        type="number"
                        name="handRailFullGripDenominator"
                        className="input-field"
                        value={handRailFullGripDenominator}
                        onChange={(e) => setHandRailFullGripDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${HANDRAILS.HANDRAILS_FULL_GRIP.unit})`}</p>
                    </div>
                  </div>
                  {
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchHandRailsFullGrip}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }

            {
              showClearanceHandRailsAttachedWalls && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Clearance handrails attached walls</p>
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
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchCHAW}
                      className='input-button poppins-regular'>
                      <p>Search</p>
                    </div>
                  }
                </div>
            }

            {
              showClearanceHandRailsLedges && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Clearance handrails ledge</p>
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
                    error ? <div>
                      <p className='inadequate'>INADEQUATE</p>
                    </div> :
                    <div 
                      onClick={searchCHL}
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
