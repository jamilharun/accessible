import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { RAMPS } from '../preDatasets/InsideBuildingsAndStructures';

export default function Ramps() {
    const navigate = useNavigate();
    const [showClear, setShowClear] = useState(true)
    const [clear, setClear] = useState(0)
    const [showGradient, setShowGradient] = useState(true)
    const [gradientNumerator, setGradientNumerator] = useState(0)
    const [gradientDenominator, setGradientDenominator] = useState(0)
    const [showLength, setShowLength] = useState(true)
    const [length, setLength] = useState(0)
  
    const [showLanding, setShowLanding] = useState(true)
    const [showLevel, setShowLevel] = useState(true)
    const [showHandrailsRampLevel, setShowHandrailsRampLevel] = useState(true)
    const [showCurbs, setShowCurbs] = useState(true)
    const [showRailing, setShowRailing] = useState(true)

    const [landings, setLandings] = useState(0)
    const [levels, setLevels] = useState(0)
    const [handrailsRampLevelsNumerator, setHandrailsRampLevelsNumerator] = useState(0)
    const [handrailsRampLevelsDenominator, setHandrailsRampLevelsDenominator] = useState(0)
    const [curbs, setCurbs] = useState(0)
    const [railings, setRailings] = useState(0)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const searchClear = () => {
        if (Number(clear) >= RAMPS.CLEAR.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowGradient(false);
          setShowLength(false);
          setShowLanding(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        } else {
          setDesc(RAMPS.CLEAR.desc);
          setError(true);
          setButtonDefault(false)
          setShowGradient(false);
          setShowLength(false);
          setShowLanding(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        }
      };

      const searchGradient = () => {
        const parsedNumerator = Number(gradientNumerator);
        const parsedDenominator = Number(gradientDenominator);
      
        if (parsedNumerator / parsedDenominator <= RAMPS.GRADIENT.parsedRange.numerator / RAMPS.GRADIENT.parsedRange.denominator) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowClear(false);
          setShowLength(false);
          setShowLanding(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        } else {
          setDesc(RAMPS.GRADIENT.desc);
          setError(true);
          setButtonDefault(false)
          setShowClear(false);
          setShowLength(false);
          setShowLanding(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        }
      };

      const searchLength = () => {
        if (Number(length) <= RAMPS.LENGTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowClear(false);
          setShowGradient(false);
          setShowLanding(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        } else {
          setDesc(RAMPS.LENGTH.desc);
          setError(true);
          setButtonDefault(false)
          setShowClear(false);
          setShowGradient(false);
          setShowLanding(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        }
      };

      const searchLandings = () => {
        if (Number(landings) >= RAMPS.LANDING.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowClear(false);
          setShowGradient(false);
          setShowLength(false);

          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        } else {
          setDesc(RAMPS.LANDING.desc);
          setError(true);
          setButtonDefault(false)
          setShowClear(false);
          setShowGradient(false);
          setShowLength(false);
          setShowLevel(false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        }
      }

      const searchLevel = () => {
        if (Number(levels) >= RAMPS.LEVEL.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowClear(false);
          setShowGradient(false);
          setShowLength(false);
          setShowLanding  (false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        } else {
          setDesc(RAMPS.LEVEL.desc);
          setError(true);
          setButtonDefault(false)
          setShowClear(false);
          setShowGradient(false);
          setShowLength(false);
          setShowLanding  (false);
          setShowHandrailsRampLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        }
      };

      const searchHandrailsRampLevels = () => {
        const parsedNumerator = Number(handrailsRampLevelsNumerator);
        const parsedDenominator = Number(handrailsRampLevelsDenominator);
      
        if (parsedNumerator / parsedDenominator && RAMPS.HANDRAILS_FROM_THE_RAMP_LEVEL.parsedRange.numerator / RAMPS.HANDRAILS_FROM_THE_RAMP_LEVEL.parsedRange.denominator) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowClear(false)
          setShowGradient(false);
          setShowLength(false);
          setShowLanding  (false);
          setShowLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        } else {
          setDesc(RAMPS.GRADIENT.desc);
          setError(true);
          setButtonDefault(false)
          setShowClear(false)
          setShowGradient(false);
          setShowLength(false);
          setShowLanding  (false);
          setShowLevel(false);
          setShowCurbs(false);
          setShowRailing(false);
        }
      }

      const searchCurbs = () => {
        if (Number(curbs) >= RAMPS.CURBS.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowClear(false);
            setShowGradient(false);
            setShowLength(false);
            setShowLanding  (false);
            setShowLevel(false);
            setShowHandrailsRampLevel(false);
            setShowRailing(false);
          } else {
            setDesc(RAMPS.CURBS.desc);
            setError(true);
            setButtonDefault(false)
            setShowClear(false);
            setShowGradient(false);
            setShowLength(false);
            setShowLanding  (false);
            setShowLevel(false);
            setShowHandrailsRampLevel(false);
            setShowRailing(false);
          }
      }

      const searchRailing = () => {
        if (Number(railings) >= RAMPS.RAILING.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowClear(false);
            setShowGradient(false);
            setShowLength(false);
            setShowLanding  (false);
            setShowLevel(false);
            setShowHandrailsRampLevel(false);
            setShowCurbs(false);
          } else {
            setDesc(RAMPS.RAILING.desc);
            setError(true);
            setButtonDefault(false)
            setShowClear(false);
            setShowGradient(false);
            setShowLength(false);
            setShowLanding  (false);
            setShowLevel(false);
            setShowHandrailsRampLevel(false);
            setShowCurbs(false);
          }
      }

      const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowClear(true)
          setShowGradient(true);
          setShowLength(true);
          setShowLevel(true);
          setShowLevel(true);
          setShowHandrailsRampLevel(true);
          setShowCurbs(true);
          setShowRailing(true);
        } else {
          navigate("/");
        }
      }
      
  
    return (
    <div className='container-moreheight poppins-regular'>
            <div className='container-body '>
            {
              showClear && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Clear</p>
                      <input
                        type="number"
                        name="clear"
                        className="input-field "
                        value={clear}
                        onChange={(e) => setClear(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.CLEAR.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchClear}
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
              showGradient &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Gradient</p>
                      <input
                        type="number"
                        name="gradientNumerator"
                        className="input-field"
                        value={gradientNumerator}
                        onChange={(e) => setGradientNumerator(e.target.value)}
                      />
                      <p className=' input-border poppins-regular'>:</p>
                      <input
                        type="number"
                        name="gradientDenuminator"
                        className="input-field"
                        value={gradientDenominator}
                        onChange={(e) => setGradientDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      {/* <p className='unit'>{`(${Dropped_Curbs.GRADIENT.unit})`}</p> */}
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchGradient}
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
              showLength && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Length</p>
                      <input
                        type="number"
                        name="length"
                        className="input-field "
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.LENGTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLength}
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
              showLanding && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Landing</p>
                      <input
                        type="number"
                        name="landings"
                        className="input-field "
                        value={landings}
                        onChange={(e) => setLandings(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.LENGTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLandings}
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
              showLevel && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Level area</p>
                      <input
                        type="number"
                        name="levels"
                        className="input-field "
                        value={levels}
                        onChange={(e) => setLevels(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.LENGTH.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLevel}
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
              showHandrailsRampLevel &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width h-20'>
                      <p className=' input-text poppins-regular'>Handrails from the ramp level</p>
                      <input
                        type="number"
                        name="handrailsRampLevelsNumerator"
                        className="input-field"
                        value={handrailsRampLevelsNumerator}
                        onChange={(e) => setHandrailsRampLevelsNumerator(e.target.value)}
                      />
                      <p className=' input-border poppins-regular'>:</p>
                      <input
                        type="number"
                        name="handrailsRampLevelsDenominator"
                        className="input-field"
                        value={handrailsRampLevelsDenominator}
                        onChange={(e) => setHandrailsRampLevelsDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.HANDRAILS_FROM_THE_RAMP_LEVEL.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchHandrailsRampLevels}
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
              showCurbs && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Curbs</p>
                      <input
                        type="number"
                        name="curbs"
                        className="input-field "
                        value={curbs}
                        onChange={(e) => setCurbs(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.CURBS.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchCurbs}
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
              showRailing && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Railing</p>
                      <input
                        type="number"
                        name="curbs"
                        className="input-field "
                        value={railings}
                        onChange={(e) => setRailings(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${RAMPS.RAILING.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchRailing}
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
