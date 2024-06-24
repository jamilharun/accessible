import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { WASHROOMS_TOILETS } from '../preDatasets/InsideBuildingsAndStructures';

export default function WashRooms() {
    const navigate = useNavigate();
    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    const [showWaterClosetArea, setShowWaterClosetArea] = useState(true)
    const [showTurningSpaceArea, setShowTurningSpaceArea] = useState(true)
    const [showTurningSpaceDimention, setShowTurningSpaceDimention] = useState(true)
    const [showSignageThickness, setShowSignageThickness] = useState(true)
    const [showWaterClosetHeight, setShowWaterClosetHeight] = useState(true)
    const [showFlushControl, setShowFlushControl] = useState(true)
    const [showLavatories, setShowLavatories] = useState(true)
    const [showKneeRecess, setShowKneeRecess] = useState(true)
    const [showVerticalClearance, setShowVerticalClearance] = useState(true)
    const [showUrinalHeightLip, setShowUrinalHeightLip] = useState(true)

    const [waterClosetAreaNumerator, setWaterClosetAreaNumerator] = useState(0)
    const [waterClosetAreaDenominator, setWaterClosetAreaDenominator] = useState(0)
    const [turningSpaceArea, setTurningSpaceArea] = useState(0)
    const [turningSpaceDimention, setTurningSpaceDimention] = useState(0)
    const [signageThick, setSignageThick] = useState(0)
    const [waterClosetHeight, setWaterClosetHeight] = useState(0)
    const [flushControlHeight, setFlushControlHeight] = useState(0)
    const [lavatoriesHeight, setLavatoriesHeight] = useState(0)
    const [kneeRecess, setKneeRecess] = useState(0)
    const [verticalClearance, setVerticalClearance] = useState(0)
    const [urinalHeightLip, setUrinalHeightLip] = useState(0)

    // setShowWaterClosetArea(false)
    // setShowTurningSpaceArea(false)
    // setShowTurningSpaceDimention(false)
    // setShowSignageThickness(false)
    // setShowWaterClosetHeight(false)
    // setShowFlushControl(false)
    // setShowLavatories(false)
    // setShowKneeRecess(false)
    // setShowVerticalClearance(false)
    // setShowUrinalHeightLip(false)

    const searchWaterClosetArea = () => {
        const parsedNumerator = parseFloat(waterClosetAreaNumerator);
        const parsedDenominator = parseFloat(waterClosetAreaDenominator);
        if (parsedNumerator >= WASHROOMS_TOILETS.WATER_CLOSET_AREA.range.numerator && 
            parsedDenominator >= WASHROOMS_TOILETS.WATER_CLOSET_AREA.range.denominator) {
          setError(false);
          // Add any search logic here if needed
          console.log('Values are within the range.');
          setButtonDefault(false)
            setShowTurningSpaceArea(false)
            setShowTurningSpaceDimention(false)
            setShowSignageThickness(false)
            setShowWaterClosetHeight(false)
            setShowFlushControl(false)
            setShowLavatories(false)
            setShowKneeRecess(false)
            setShowVerticalClearance(false)
            setShowUrinalHeightLip(false)
        } else {
          setDesc(WASHROOMS_TOILETS.WATER_CLOSET_AREA.desc);
          setError(true);
          setButtonDefault(false)
            setShowTurningSpaceArea(false)
            setShowTurningSpaceDimention(false)
            setShowSignageThickness(false)
            setShowWaterClosetHeight(false)
            setShowFlushControl(false)
            setShowLavatories(false)
            setShowKneeRecess(false)
            setShowVerticalClearance(false)
            setShowUrinalHeightLip(false)
        }
    }

    const searchTurningSpaceArea = () => {
        if (Number(turningSpaceArea) == WASHROOMS_TOILETS.TURNING_SPACE_AREA.range) {
          console.log("success");
          setDesc(''); // Clear description on success
          setButtonDefault(false)
          setShowWaterClosetArea(false)
            setShowTurningSpaceDimention(false)
            setShowSignageThickness(false)
            setShowWaterClosetHeight(false)
            setShowFlushControl(false)
            setShowLavatories(false)
            setShowKneeRecess(false)
            setShowVerticalClearance(false)
            setShowUrinalHeightLip(false)
        } else {
          setDesc(WASHROOMS_TOILETS.TURNING_SPACE_AREA.desc);
          setError(true);
          setButtonDefault(false)
          setShowWaterClosetArea(false)
            setShowTurningSpaceDimention(false)
            setShowSignageThickness(false)
            setShowWaterClosetHeight(false)
            setShowFlushControl(false)
            setShowLavatories(false)
            setShowKneeRecess(false)
            setShowVerticalClearance(false)
            setShowUrinalHeightLip(false)
        }
      };

    const searchTurningSpaceDimension = () => {
        if (Number(turningSpaceDimention) >= WASHROOMS_TOILETS.TURNING_SPACE_DIMENSION.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false)
          } else {
            setDesc(WASHROOMS_TOILETS.TURNING_SPACE_DIMENSION.desc);
            setError(true);
            setButtonDefault(false)
            setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false)
          }
    }

    const searchSignageThickness = () => {
        if (Number(signageThick) >= WASHROOMS_TOILETS.SIGNAGE_THICK.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false)
          } else {
            setDesc(WASHROOMS_TOILETS.SIGNAGE_THICK.desc);
            setError(true);
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false)
            
          }
    }

    const searchWaterClosetHeight = () => {
        if (Number(waterClosetHeight) <= WASHROOMS_TOILETS.WATER_CLOSET_HEIGHT.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowSignageThickness(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    // setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false)
          } else {
            setDesc(WASHROOMS_TOILETS.WATER_CLOSET_HEIGHT.desc);
            setError(true);
            setButtonDefault(false)
            setShowSignageThickness(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    // setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false)
            
          }
    }


    const searchFlushControl = () => {
        if (Number(flushControlHeight) <= WASHROOMS_TOILETS.FLUSH_CONTROL_HEIGHT.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    // setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false) 
          } else {
            setDesc(WASHROOMS_TOILETS.FLUSH_CONTROL_HEIGHT.desc);
            setError(true);
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    // setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false) 
          }
    }

    const searchLavatories = () => {
      console.log(parseFloat(lavatoriesHeight));
      const height = parseFloat(lavatoriesHeight);
        if (height <= WASHROOMS_TOILETS.LAVATORIES_HEIGHT.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    // setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false) 
          } else {
            setDesc(WASHROOMS_TOILETS.LAVATORIES_HEIGHT.desc);
            setError(true);
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    // setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    setShowUrinalHeightLip(false) 
          }
    }

    const searchKneeRecess = () => {
      console.log('qweqweqwe');
        const parsedDenominator = parseFloat(kneeRecess);
        if (parsedDenominator >= WASHROOMS_TOILETS.KNEE_RECESS.range.numerator && 
            parsedDenominator <= WASHROOMS_TOILETS.KNEE_RECESS.range.denominator) {
          setError(false);
          // Add any search logic here if needed
          console.log('Values are within the range.');
          setButtonDefault(false)
          setShowWaterClosetArea(false)
          setShowTurningSpaceArea(false)
          setShowTurningSpaceDimention(false)
          setShowSignageThickness(false)
          setShowWaterClosetHeight(false)
          setShowFlushControl(false)
          setShowLavatories(false)
        //   setShowKneeRecess(false)
          setShowVerticalClearance(false)
          setShowUrinalHeightLip(false) 
        } else {
          console.log('asdasdasd');
          setDesc(WASHROOMS_TOILETS.KNEE_RECESS.desc);
          setError(true);
          setButtonDefault(false)
          setShowWaterClosetArea(false)
          setShowTurningSpaceArea(false)
          setShowTurningSpaceDimention(false)
          setShowSignageThickness(false)
          setShowWaterClosetHeight(false)
          setShowFlushControl(false)
          setShowLavatories(false)
        //   setShowKneeRecess(false)
          setShowVerticalClearance(false)
          setShowUrinalHeightLip(false) 
        }
    }

    const searchVerticalClearance = () => {
        if (Number(verticalClearance) <= WASHROOMS_TOILETS.VERTICAL_CLEARANCE.range) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    // setShowVerticalClearance(false)
    setShowUrinalHeightLip(false) 
          } else {
            setDesc(WASHROOMS_TOILETS.VERTICAL_CLEARANCE.desc);
            setError(true);
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    // setShowVerticalClearance(false)
    setShowUrinalHeightLip(false) 
          }
    }

    const searchUrinalHightLip = () => {
        if (parseFloat(urinalHeightLip) <= WASHROOMS_TOILETS.URINAL_HEIGHT_LIP.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    // setShowUrinalHeightLip(false) 
          } else {
            setDesc(WASHROOMS_TOILETS.URINAL_HEIGHT_LIP.desc);
            setError(true);
            setButtonDefault(false)
    setShowWaterClosetArea(false)
    setShowTurningSpaceArea(false)
    setShowTurningSpaceDimention(false)
    setShowSignageThickness(false)
    setShowWaterClosetHeight(false)
    setShowFlushControl(false)
    setShowLavatories(false)
    setShowKneeRecess(false)
    setShowVerticalClearance(false)
    // setShowUrinalHeightLip(false) 
          }
    }

    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowWaterClosetArea(true)
          setShowTurningSpaceArea(true)
          setShowTurningSpaceDimention(true)
          setShowSignageThickness(true)
          setShowWaterClosetHeight(true)
          setShowFlushControl(true)
          setShowLavatories(true)
          setShowKneeRecess(true)
          setShowVerticalClearance(true)
          setShowUrinalHeightLip(true)
        } else {
          navigate("/Profile");
        }
      }

  return (
    <div className='container-moreheight poppins-regular'>
            <div className='container-body '>
            
            {
              showWaterClosetArea &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Water closet area</p>
                      <input
                        type="number"
                        name="waterClosetAreaNumerator"
                        className="input-field"
                        value={waterClosetAreaNumerator}
                        onChange={(e) => setWaterClosetAreaNumerator(e.target.value)}
                      />
                      <p className=' input-border poppins-regular'>x</p>
                      <input
                        type="number"
                        name="waterClosetAreaDenominator"
                        className="input-field"
                        value={waterClosetAreaDenominator}
                        onChange={(e) => setWaterClosetAreaDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.WATER_CLOSET_AREA.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchWaterClosetArea}
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
              showTurningSpaceArea && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Turning space area</p>
                      <input
                        type="number"
                        name="turningSpaceArea"
                        className="input-field"
                        value={turningSpaceArea}
                        onChange={(e) => setTurningSpaceArea(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.TURNING_SPACE_AREA.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchTurningSpaceArea}
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
              showTurningSpaceDimention && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Turning space dimension</p>
                      <input
                        type="number"
                        name="turningSpaceDimention"
                        className="input-field"
                        value={turningSpaceDimention}
                        onChange={(e) => setTurningSpaceDimention(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.TURNING_SPACE_DIMENSION.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchTurningSpaceDimension}
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
              showSignageThickness && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Signage thickness</p>
                      <input
                        type="number"
                        name="signageThick"
                        className="input-field"
                        value={signageThick}
                        onChange={(e) => setSignageThick(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.SIGNAGE_THICK.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchSignageThickness}
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
              showWaterClosetHeight && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Water closet height</p>
                      <input
                        type="number"
                        name="signageThick"
                        className="input-field"
                        value={waterClosetHeight}
                        onChange={(e) => setWaterClosetHeight(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.WATER_CLOSET_HEIGHT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchWaterClosetHeight}
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
              showFlushControl && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Flush control height</p>
                      <input
                        type="number"
                        name="flushControlHeight"
                        className="input-field"
                        value={flushControlHeight}
                        onChange={(e) => setFlushControlHeight(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.FLUSH_CONTROL_HEIGHT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchFlushControl}
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
              showLavatories && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Lavatories height</p>
                      <input
                        type="number"
                        name="lavatoriesHeight"
                        className="input-field"
                        value={lavatoriesHeight}
                        onChange={(e) => setLavatoriesHeight(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.LAVATORIES_HEIGHT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLavatories}
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
              showKneeRecess && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Knee recess</p>
                      <input
                        type="number"
                        name="kneeRecess"
                        className="input-field "
                        value={kneeRecess}
                        onChange={(e) => setKneeRecess(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.KNEE_RECESS.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchKneeRecess}
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
              showVerticalClearance && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Vertical clearance</p>
                      <input
                        type="number"
                        name="kneeRecess"
                        className="input-field"
                        value={verticalClearance}
                        onChange={(e) => setVerticalClearance(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.VERTICAL_CLEARANCE.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchVerticalClearance}
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
              showUrinalHeightLip && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Urical height of the lip</p>
                      <input
                        type="number"
                        name="urinalHeightLip"
                        className="input-field"
                        value={urinalHeightLip}
                        onChange={(e) => setUrinalHeightLip(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${WASHROOMS_TOILETS.URINAL_HEIGHT_LIP.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchUrinalHightLip}
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
