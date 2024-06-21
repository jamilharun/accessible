import React, { useState } from 'react'
import { WALKWAYS_AND_PASSAGEWAYS } from '../preDatasets/OutsideAndAroundBuilding'
import { useNavigate } from "react-router-dom";

export default function WalkWaysPassageWays() {
    const navigate = useNavigate();  
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)
  
    const [showGradient, setShowGradient] = useState(true)
    const [showCrossGradient, setShowCrossGradient] = useState(true)
    const [showWidth, setShowWidth] = useState(true)
    const [showGratingOpenings, setShowGratingOpenings] = useState(true)
    const [showProjection, setShowProjection] = useState(true)
    const [showInterruption, setShowInterruption] = useState(true)
    const [showSpacesLengthBusyWalkWays, setShowSpacesLengthBusyWalkWays] = useState(true)
    const [showAngle, setShowAngle] = useState(true)
    const [showDimention, setShowDimension] = useState(true)

    const [showSpaceDimention, setShowSpaceDimension] = useState(true)
    const [showSpaceDistance, setShowSpaceDistance] = useState(true)

    const [gradientNumerator, setGradientNumerator] = useState(0)
    const [gradientDenominator, setGradientDenominator] = useState(0)
    const [gradientPercent, setGradientPercent] = useState(0)
    
    const [crossGradientNumerator, setCrossGradientNumerator] = useState(0)
    const [crossGradientDenominator, setCrossGradientDenominator] = useState(0)

    const [width, setWidth] = useState(0)

    const [gratingWidth, setGratingWidth] = useState(0)
    const [gratingHeight, setGratingHeight] = useState(0)

    const [projection, setProjection] = useState(0)

    const [interruption, setInterruption] = useState(0)

    const [spaceDimension, setSpaceDimension] = useState(0)
    const [spaceDistance, setSpaceDistance] = useState(0)
    const [angle, setAngle] = useState(0)
    const [dimension, setDimension] = useState(0)

    const searchGradient = () => {
        const parsedNumerator = Number(gradientNumerator);
        const parsedDenominator = Number(gradientDenominator);
        // const parsedPercentage = parseFloat(gradientPercent);

        // const isRatioValid = parsedNumerator / parsedDenominator <= WALKWAYS_AND_PASSAGEWAYS.GRADIENT.parsedRange.ratio.numerator / WALKWAYS_AND_PASSAGEWAYS.GRADIENT.parsedRange.ratio.denominator;
        // const isPercentageValid = !isNaN(parsedPercentage) && parsedPercentage <= WALKWAYS_AND_PASSAGEWAYS.GRADIENT.parsedRange.percentage;

        if (parsedNumerator <= WALKWAYS_AND_PASSAGEWAYS.GRADIENT.parsedRange.ratio.numerator && 
            parsedDenominator <= WALKWAYS_AND_PASSAGEWAYS.GRADIENT.parsedRange.ratio.denominator) {
            console.log("Success");
            setDesc(''); // Clear description on success
            setError(false);
            setButtonDefault(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowGratingOpenings(false)
            setShowProjection(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
        } else {
            setDesc(WALKWAYS_AND_PASSAGEWAYS.GRADIENT.desc);
            setError(true);
            setButtonDefault(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowGratingOpenings(false)
            setShowProjection(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
        }
    }

    const searchCrossGradient = () => {
        const parsedNumerator = Number(crossGradientNumerator);
        const parsedDenominator = Number(crossGradientDenominator);
      
        if (parsedNumerator / parsedDenominator <= WALKWAYS_AND_PASSAGEWAYS.CROSS_GRADIENT.parsedRange.numerator / WALKWAYS_AND_PASSAGEWAYS.CROSS_GRADIENT.parsedRange.denominator) {
          console.log("success");
          setDesc('');
          
          setButtonDefault(false)
          setShowGradient(false)
          setShowWidth(false)
          setShowGratingOpenings(false)
          setShowProjection(false)
          setShowInterruption(false)
          setShowSpacesLengthBusyWalkWays(false)
          setShowAngle(false)
          setShowDimension(false)
        } else {
          setDesc(WALKWAYS_AND_PASSAGEWAYS.CROSS_GRADIENT.desc);
          setError(true);
          setButtonDefault(false)
          setShowGradient(false)
          setShowWidth(false)
          setShowGratingOpenings(false)
          setShowProjection(false)
          setShowInterruption(false)
          setShowSpacesLengthBusyWalkWays(false)
          setShowAngle(false)
          setShowDimension(false)
        }
    };

    const searchWidth = () => {
        if (Number(width) >= WALKWAYS_AND_PASSAGEWAYS.WIDTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          
          setButtonDefault(false)
          setShowGradient(false)
          setShowCrossGradient(false)
          setShowGratingOpenings(false)
            setShowProjection(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
        } else {
          setDesc(WALKWAYS_AND_PASSAGEWAYS.WIDTH.desc);
          setError(true);
          setButtonDefault(false)
          setShowGradient(false)
          setShowCrossGradient(false)
          setShowGratingOpenings(false)
            setShowProjection(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
        }
    };

    const searchGratingOpenings = () => {
        const maxWidth = WALKWAYS_AND_PASSAGEWAYS.GRATING_OPENINGS.range.width;
        const maxHeight = WALKWAYS_AND_PASSAGEWAYS.GRATING_OPENINGS.range.height;

        // Check if both width and height are within the specified range
        if (gratingWidth <= maxWidth && gratingHeight <= maxHeight) {
            console.log("Grating openings are within the specified dimensions.");
            setDesc(''); 
            
            setButtonDefault(false)
            setShowGradient(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowProjection(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
        } else {
            setDesc(WALKWAYS_AND_PASSAGEWAYS.GRATING_OPENINGS.desc);
            setError(true);
            setButtonDefault(false)
            setShowGradient(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowProjection(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
        }
    };

    const searchProjection = () => {
        if (Number(projection) <= WALKWAYS_AND_PASSAGEWAYS.PROJECTION.range.value) {
            console.log("success");
            setDesc(''); 
            
            setButtonDefault(false)
            setShowGradient(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowGratingOpenings(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
          } else {
            setDesc(WALKWAYS_AND_PASSAGEWAYS.PROJECTION.desc);
            setError(true);
            setButtonDefault(false)
            setShowGradient(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowGratingOpenings(false)
            setShowInterruption(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
          }
    }

    const searchInterruption = () => {
        if (Number(interruption) >= WALKWAYS_AND_PASSAGEWAYS.INTERRUPTION.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            
            setButtonDefault(false)
            setShowGradient(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowGratingOpenings(false)
            setShowProjection(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
          } else {
            setDesc(WALKWAYS_AND_PASSAGEWAYS.INTERRUPTION.desc);
            setError(true);
            setButtonDefault(false)
            setShowGradient(false)
            setShowCrossGradient(false)
            setShowWidth(false)
            setShowGratingOpenings(false)
            setShowProjection(false)
            setShowSpacesLengthBusyWalkWays(false)
            setShowAngle(false)
            setShowDimension(false)
          }
    }

    const searchSpaceDimention = () => {
      if (Number(spaceDimension) >= WALKWAYS_AND_PASSAGEWAYS.SPACES_IN_LENGTHY_BUSY_WALKWAYS.DIMENSION.range.value) {
        console.log("success");
        setDesc(''); // Clear description on success
        
        setButtonDefault(false)
        setShowGradient(false)
        setShowCrossGradient(false)
        setShowWidth(false)
        setShowGratingOpenings(false)
          setShowProjection(false)
          setShowInterruption(false)
          setShowAngle(false)
          setShowDimension(false)

        setShowSpaceDistance(false)
      } else {
        setDesc(WALKWAYS_AND_PASSAGEWAYS.SPACES_IN_LENGTHY_BUSY_WALKWAYS.DIMENSION.desc);
        setError(true);
        setButtonDefault(false)
        setShowGradient(false)
        setShowCrossGradient(false)
        setShowWidth(false)
        setShowGratingOpenings(false)
          setShowProjection(false)
          setShowInterruption(false)
          setShowAngle(false)
          setShowDimension(false)

        setShowSpaceDistance(false)
      }
    }

    const searchSpaceDistance = () => {
      if (Number(spaceDistance) <= WALKWAYS_AND_PASSAGEWAYS.SPACES_IN_LENGTHY_BUSY_WALKWAYS.DISTANCE.range.value) {
        console.log("success");
        setDesc(''); // Clear description on success
        setButtonDefault(false)
        setShowGradient(false)
        setShowCrossGradient(false)
        setShowWidth(false)
        setShowGratingOpenings(false)
        setShowProjection(false)
        setShowInterruption(false)
        // setShowSpacesLengthBusyWalkWays(false)
        setShowAngle(false)
        setShowDimension(false)
        setShowSpaceDimension(false)
        // setShowSpaceDistance(true)
      } else {
        setDesc(WALKWAYS_AND_PASSAGEWAYS.SPACES_IN_LENGTHY_BUSY_WALKWAYS.DISTANCE.desc);
        setError(true);
        setButtonDefault(false)
        setShowGradient(false)
        setShowCrossGradient(false)
        setShowWidth(false)
        setShowGratingOpenings(false)
        setShowProjection(false)
        setShowInterruption(false)
        // setShowSpacesLengthBusyWalkWays(false)
        setShowAngle(false)
        setShowDimension(false)

        setShowSpaceDimension(false)
        // setShowSpaceDistance(true)
      }
    }

    const searchAngle = () => {
      if (Number(angle) === WALKWAYS_AND_PASSAGEWAYS.ANGLE.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowGradient           (false)
          setShowCrossGradient      (false)
          setShowWidth              (false)
          setShowGratingOpenings    (false)
          setShowProjection         (false)
          setShowInterruption       (false)
          setShowDimension          (false)
          setShowSpacesLengthBusyWalkWays(false)
      } else {
          setDesc(WALKWAYS_AND_PASSAGEWAYS.ANGLE.desc);
          setError                  (true);
          setButtonDefault(false)
          setDesc                   (false)
          setError                  (false);
          setShowGradient           (false)
          setShowCrossGradient      (false)
          setShowWidth              (false)
          setShowGratingOpenings    (false)
          setShowProjection         (false)
          setShowInterruption       (false)
          setShowDimension          (false)
          setShowSpacesLengthBusyWalkWays(false)
      }
    };

    const searchDimention = () => {
      if (Number(dimension) >= WALKWAYS_AND_PASSAGEWAYS.DIMENSION.range.value) {
        console.log("success");
        setDesc('');
        setButtonDefault(false)
        setShowGradient(false)
        setShowCrossGradient(false)
        setShowWidth(false)
        setShowGratingOpenings(false)
        setShowProjection(false)
        setShowInterruption(false)
        setShowSpacesLengthBusyWalkWays(false)
        setShowAngle(false)
        // setShowDimension(false)
        setShowSpaceDimension(false)
        setShowSpaceDistance(true)
      } else {
        setDesc(WALKWAYS_AND_PASSAGEWAYS.DIMENSION.desc);
        setError(true);
        setButtonDefault(false)
        setShowGradient(false)
        setShowCrossGradient(false)
        setShowWidth(false)
        setShowGratingOpenings(false)
        setShowProjection(false)
        setShowInterruption(false)
        setShowSpacesLengthBusyWalkWays(false)
        setShowAngle(false)
        // setShowDimension(false)
        setShowSpaceDimension(false)
        setShowSpaceDistance(true)
      }
  };

    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
            setShowGradient(true)
            setShowCrossGradient(true)
            setShowWidth(true)
            setShowGratingOpenings(true)
            setShowProjection(true)
            setShowInterruption(true)
            setShowSpacesLengthBusyWalkWays(true)
            setShowAngle(true)
            setShowDimension(true)

            setShowSpaceDimension(true)
            setShowSpaceDistance(true)
        } else {
          navigate("/Profile");
        }
      }
    return (
        <div className='container-moreheight poppins-regular'>
            <div className='container-body '>

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
                      <p className=' input-border poppins-regular '>:</p>
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
                    showCrossGradient &&
                        <div className=' flex mb-5'>
                        <div>
                            <div className=' input-container input-container-width'>
                            <p className=' input-text poppins-regular'>Cross Gradient</p>
                            <input
                                type="number"
                                name="crossGradientNumerator"
                                className="input-field"
                                value={crossGradientNumerator}
                                onChange={(e) => setCrossGradientNumerator(e.target.value)}
                            />
                            <p className=' input-border poppins-regular'>:</p>
                            <input
                                type="number"
                                name="crossGradientDenominator"
                                className="input-field"
                                value={crossGradientDenominator}
                                onChange={(e) => setCrossGradientDenominator(e.target.value)}
                            />
                            </div>
                            <div className=' input-text text-end'>
                            {/* <p className='unit'>{`(${Dropped_Curbs.GRADIENT.unit})`}</p> */}
                            </div>
                        </div>
                        {
                        buttonDefault ?
                        <div 
                          onClick={searchCrossGradient}
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
                          <p className=' input-text poppins-regular'>Width</p>
                          <input
                            type="number"
                            name="WIDTH"
                            className="input-field"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                          />
                        </div>
                        <div className=' input-text text-end'>
                          <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.WIDTH.unit})`}</p>
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
                    showGratingOpenings &&
                        <div className=' flex mb-5'>
                        <div>
                            <div className=' input-container input-container-width'>
                            <p className=' input-text poppins-regular'>Grating Openings</p>
                            <input
                                type="number"
                                name="gratingWidth"
                                className="input-field"
                                value={gratingWidth}
                                onChange={(e) => setGratingWidth(e.target.value)}
                            />
                            <p className=' input-border poppins-regular'>x</p>
                            <input
                                type="number"
                                name="gratingHeight"
                                className="input-field"
                                value={gratingHeight}
                                onChange={(e) => setGratingHeight(e.target.value)}
                            />
                            </div>
                            <div className=' input-text text-end'>
                            <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.GRATING_OPENINGS.unit})`}</p>
                            </div>
                        </div>
                        {
                              buttonDefault ?
                              <div 
                                onClick={searchGratingOpenings}
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
                  showProjection && 
                    <div className=' flex mb-5'>
                      <div>
                        <div className=' input-container input-container-width'>
                          <p className=' input-text poppins-regular'>Projection above or below the level of walkway</p>
                          <input
                            type="number"
                            name="WIDTH"
                            className="input-field"
                            value={projection}
                            onChange={(e) => setProjection(e.target.value)}
                          />
                        </div>
                        <div className=' input-text text-end'>
                          <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.PROJECTION.unit})`}</p>
                        </div>
                      </div>
                      {
                              buttonDefault ?
                              <div 
                                onClick={searchProjection}
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
                  showInterruption && 
                    <div className=' flex mb-5'>
                      <div>
                        <div className=' input-container input-container-width'>
                          <p className=' input-text poppins-regular'>Interruption by cracks or break</p>
                          <input
                            type="number"
                            name="WIDTH"
                            className="input-field"
                            value={interruption}
                            onChange={(e) => setInterruption(e.target.value)}
                          />
                        </div>
                        <div className=' input-text text-end'>
                          <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.INTERRUPTION.unit})`}</p>
                        </div>
                      </div>
                      {
                              buttonDefault ?
                              <div 
                                onClick={searchInterruption}
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
                  showSpacesLengthBusyWalkWays && 
                    <div className=' flex mb-5'>
                      <div>
                        <p className='pl-5 signage_title'> Spaces in lengthy or busy walkways</p>
                        <div className=' input-container-box '>
                          {
                            showSpaceDimention && 
                              <div className=' w-full flex flex-row'>
                                < div className='asdasda flex-col'>
                                  <div className='input-container input-container-width'>
                                    <p className=' input-text poppins-regular'>Dimensions</p>
                                    <input
                                      type="number"
                                      name="spaceDimension"
                                      className="input-field "
                                      value={spaceDimension}
                                      onChange={(e) => setSpaceDimension(e.target.value)}
                                    />
                                  </div>
                                  <div className=' input-text w-full text-end'>
                                    <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.INTERRUPTION.unit})`}</p>
                                  </div>
                                </div>
                                  <div className='qweqwe'>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchSpaceDimention}
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
                                
                              </div>
                          }

                          {
                            showSpaceDistance &&
                              <div className=' w-full flex flex-row'>
                                <div className='asdasda flex-col'>
                                  <div className='input-container input-container-width'>
                                    <p className=' input-text poppins-regular'>Distance between stops</p>
                                    <input
                                      type="number"
                                      name="spaceDistance"
                                      className="input-field"
                                      value={spaceDistance}
                                      onChange={(e) => setSpaceDistance(e.target.value)}
                                    />
                                  </div>

                                  <div className=' input-text w-full text-end'>
                                    <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.INTERRUPTION.unit})`}</p>
                                  </div>


                                </div>
                                <div className='qweqwe '>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchSpaceDistance}
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
                              </div>
                          }
                        </div>
                      </div>
                     
                      
                    </div>
                }

                {
                  showAngle && 
                    <div className=' flex mb-5'>
                      <div>
                        <div className=' input-container input-container-width'>
                          <p className=' input-text poppins-regular'>Angle of turns</p>
                          <input
                            type="number"
                            name="angle"
                            className="input-field "
                            value={angle}
                            onChange={(e) => setAngle(e.target.value)}
                          />
                        </div>
                        <div className=' input-text text-end'>
                          <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.ANGLE.unit})`}</p>
                        </div>
                      </div>
                      {
                        buttonDefault ?
                        <div 
                          onClick={searchAngle}
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
                  showDimention && 
                    <div className=' flex mb-5'>
                      <div>
                        <div className=' input-container input-container-width'>
                          <p className=' input-text poppins-regular'>Dimension of headroom</p>
                          <input
                            type="number"
                            name="WIDTH"
                            className="input-field"
                            value={dimension}
                            onChange={(e) => setDimension(e.target.value)}
                          />
                        </div>
                        <div className=' input-text text-end'>
                          <p className='unit'>{`(${WALKWAYS_AND_PASSAGEWAYS.DIMENSION.unit})`}</p>
                        </div>
                      </div>
                      {
                        buttonDefault ?
                        <div 
                          onClick={searchDimention}
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
