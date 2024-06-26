  import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ELEVATORS } from '../preDatasets/InsideBuildingsAndStructures';
export default function Elevator() {
    const navigate = useNavigate(); 

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)    
  const [buttonDefault, setButtonDefault] = useState(true)

    const [showLocationFromEntrance, setShowLocationFromEntrance] = useState(true)
    const [showElevatorDimension, setShowElevatorDimension] = useState(true)
    const [showControlPanel, setShowControlPanel] = useState(true)
    const [showDiameterElevator, setShowDiameterElevator] = useState(true)
    const [showDepthElevator, setShowDepthElevator] = useState(true)

    const [locationFromEntrance, setLocationFromEntrance] = useState(0)
    const [elevatorDimensionNumerator, setElevatorDimensionNumerator] = useState(0)
    const [elevatorDimensionDenominator, setElevatorDimensionDenominator] = useState(0)
    const [controlPanel, setControlPanel] = useState(0)
    const [diameterElevator, setDiameterElevator] = useState(0)
    const [depthElevator, setDepthElevator] = useState(0)

    const searchLocationFromEntrance = () => {
        if (Number(locationFromEntrance) <= ELEVATORS.LOCATION_FROM_ENTRANCE.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
                // setShowLocationFromEntrance(false)
    setShowElevatorDimension(false)
    setShowControlPanel(false)
    setShowDiameterElevator(false)
    setShowDepthElevator(false)
          } else {
            setDesc(ELEVATORS.LOCATION_FROM_ENTRANCE.desc);
            setError(true);
            setButtonDefault(false)
                // setShowLocationFromEntrance(false)
    setShowElevatorDimension(false)
    setShowControlPanel(false)
    setShowDiameterElevator(false)
    setShowDepthElevator(false)
          }
    }

    const searchElevatorDimension = () => {
        const parsedNumerator = parseFloat(elevatorDimensionNumerator);
        const parsedDenominator = parseFloat(elevatorDimensionDenominator);
        if (parsedNumerator >= ELEVATORS.ELEVATOR_DIMENSION.range.numerator && 
            parsedDenominator >= ELEVATORS.ELEVATOR_DIMENSION.range.denominator) {
          setError(false);
          // Add any search logic here if needed
          console.log('Values are within the range.');
          setButtonDefault(false)
            setShowLocationFromEntrance(false)
            // setShowElevatorDimension(false)
            setShowControlPanel(false)
            setShowDiameterElevator(false)
            setShowDepthElevator(false)
        } else {
          setDesc(ELEVATORS.ELEVATOR_DIMENSION.desc);
          setError(true);
          setButtonDefault(false)
            setShowLocationFromEntrance(false)
            // setShowElevatorDimension(false)
            setShowControlPanel(false)
            setShowDiameterElevator(false)
            setShowDepthElevator(false)
        }
    }

    const searchControlPanel = () => {
        const parsedNumerator = parseFloat(controlPanel);
        // const parsedDenominator = parseFloat(elevatorDimensionDenominator);
        if (parsedNumerator >= ELEVATORS.CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR.range.numerator && 
            parsedNumerator <= ELEVATORS.CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR.range.denominator) {
          setError(false);
          // Add any search logic here if needed
          console.log('Values are within the range.');
          setButtonDefault(false)
            setShowLocationFromEntrance(false)
            setShowElevatorDimension(false)
            // setShowControlPanel(false)
            setShowDiameterElevator(false)
            setShowDepthElevator(false)
        } else {
          setDesc(ELEVATORS.CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR.desc);
          console.log(`${parsedNumerator} >= ${ELEVATORS.CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR.range.numerator}`);
          console.log(`${parsedNumerator} <= ${ELEVATORS.CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR.range.denominator}`);
          setError(true);
          setButtonDefault(false)
            setShowLocationFromEntrance(false)
            setShowElevatorDimension(false)
            // setShowControlPanel(false)
            setShowDiameterElevator(false)
            setShowDepthElevator(false)
        }
    }   

    const searchDiameterElevator = () => {
        if (Number(diameterElevator) >= ELEVATORS.DIAMETER_ELEVATOR_BUTTONS.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowLocationFromEntrance(false)
            setShowElevatorDimension(false)
            setShowControlPanel(false)
            // setShowDiameterElevator(false)
            setShowDepthElevator(false)
          } else {
            setDesc(ELEVATORS.DIAMETER_ELEVATOR_BUTTONS.desc);
            setError(true);
            setButtonDefault(false)
            setShowLocationFromEntrance(false)
            setShowElevatorDimension(false)
            setShowControlPanel(false)
            // setShowDiameterElevator(false)
            setShowDepthElevator(false)
          }
    }

    const searchDepthElevator = () => {
        if (Number(depthElevator) <= ELEVATORS.DEPTH_ELEVATOR_BUTTONS.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowLocationFromEntrance(false)
            setShowElevatorDimension(false)
            setShowControlPanel(false)
            setShowDiameterElevator(false)
            // setShowDepthElevator(false)
          } else {
            setDesc(ELEVATORS.DEPTH_ELEVATOR_BUTTONS.desc);
            setError(true);
            setButtonDefault(false)
            setShowLocationFromEntrance(false)
            setShowElevatorDimension(false)
            setShowControlPanel(false)
            setShowDiameterElevator(false)
            // setShowDepthElevator(false)
          }
    }

            // setShowLocationFromEntrance(false)
            // setShowElevatorDimension(false)
            // setShowControlPanel(false)
            // setShowDiameterElevator(false)
            // setShowDepthElevator(false)
    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowLocationFromEntrance(true)
          setShowElevatorDimension(true)
          setShowControlPanel(true)
          setShowDiameterElevator(true)
          setShowDepthElevator(true)
        } else {
          navigate("/");
        }
      }
  
    return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showLocationFromEntrance && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Location from entrance</p>
                      <input
                        type="number"
                        name="locationFromEntrance"
                        className="input-field"
                        value={locationFromEntrance}
                        onChange={(e) => setLocationFromEntrance(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ELEVATORS.LOCATION_FROM_ENTRANCE.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchLocationFromEntrance}
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
              showElevatorDimension &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Elevator dimension</p>
                      <input
                        type="number"
                        name="elevatorDimensionNumerator"
                        className="input-field"
                        value={elevatorDimensionNumerator}
                        onChange={(e) => setElevatorDimensionNumerator(e.target.value)}
                      />
                      <p className=' input-border poppins-regular'>x</p>
                      <input
                        type="number"
                        name="waterClosetAreaDenominator"
                        className="input-field"
                        value={elevatorDimensionDenominator}
                        onChange={(e) => setElevatorDimensionDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ELEVATORS.ELEVATOR_DIMENSION.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchElevatorDimension}
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
              showControlPanel && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width h-16'>
                      <p className=' input-text poppins-regular'>Control panel/emergency system location from floor</p>
                      <input
                        type="number"
                        name="locationFromEntrance"
                        className="input-field"
                        value={controlPanel}
                        onChange={(e) => setControlPanel(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ELEVATORS.CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchControlPanel}
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
              showDiameterElevator && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Diameter of elevator buttons</p>
                      <input
                        type="number"
                        name="locationFromEntrance"
                        className="input-field"
                        value={diameterElevator}
                        onChange={(e) => setDiameterElevator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ELEVATORS.DIAMETER_ELEVATOR_BUTTONS.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchDiameterElevator}
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
              showDepthElevator && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Depth of elevator buttons</p>
                      <input
                        type="number"
                        name="locationFromEntrance"
                        className="input-field"
                        value={depthElevator}
                        onChange={(e) => setDepthElevator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${ELEVATORS.DEPTH_ELEVATOR_BUTTONS.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchDepthElevator}
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
