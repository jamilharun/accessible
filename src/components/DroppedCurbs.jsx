import React, { useEffect, useState } from 'react'
import '../App.css'
import { Dropped_Curbs } from '../preDatasets/OutsideAndAroundBuilding'
import { useNavigate } from "react-router-dom";

export default function DroppedCurbs() {
  const navigate = useNavigate();

  const [showWidth, setShowWidth] = useState(true)
  const [showGradient, setShowGradient] = useState(true)
  const [showMaximum, setShowMaximum] = useState(true)
  const [showLowest, setShowLowest] = useState(true)

  const [width, setWidth] = useState(0)
  const [gradientNumerator, setGradientNumerator] = useState(0)
  const [gradientDenominator, setGradientDenominator] = useState(0)
  const [maximumNumerator, setMaximumNumerator] = useState(0)
  const [maximumDenominator, setMaximumDenominator] = useState(0)
  const [lowest, setLowest] = useState(0)

  const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)
  const [buttonDefault, setButtonDefault] = useState(true)

  useEffect(() => {
    console.log(width)
  }, [width])

  const searchWidth = () => {
    if (Number(width) >= Dropped_Curbs.WIDTH.range.value) {
      console.log("success");
      setDesc(''); // Clear description on success
      setButtonDefault(false)
      setShowGradient(false);
      setShowMaximum(false);
      setShowLowest(false);
    } else {
      setDesc(Dropped_Curbs.WIDTH.desc);
      setError(true);
      setButtonDefault(false)
      setShowGradient(false);
      setShowMaximum(false);
      setShowLowest(false);
    }
  };

  const searchGradient = () => {
    const parsedNumerator = Number(gradientNumerator);
    const parsedDenominator = Number(gradientDenominator);
  
    if (parsedNumerator <= Dropped_Curbs.GRADIENT.parsedRange.numerator  &&
        parsedDenominator <= Dropped_Curbs.GRADIENT.parsedRange.denominator) {
      console.log("success");
      setDesc(''); // Clear description on success
      setButtonDefault(false)
      setShowWidth(false);
      setShowMaximum(false);
      setShowLowest(false);
    } else {
      setDesc(Dropped_Curbs.GRADIENT.desc);
      setError(true);
      setButtonDefault(false)
      setShowWidth(false);
      setShowMaximum(false);
      setShowLowest(false);
    }
  };

  const searchMaximum = () => {
    const parsedNumerator = Number(maximumNumerator);
    const parsedDenominator = Number(maximumDenominator);

    if (parsedNumerator <= Dropped_Curbs.MAXIMUM.parsedRange.numerator && 
        parsedDenominator <= Dropped_Curbs.MAXIMUM.parsedRange.denominator) {
      console.log("success");
      setDesc(''); // Clear description on success
      setButtonDefault(false)
      setShowWidth(false);
      setShowGradient(false);
      setShowLowest(false);
    } else {
      setDesc(Dropped_Curbs.MAXIMUM.desc);
      setError(true);
      setButtonDefault(false)
      setShowWidth(false);
      setShowGradient(false);
      setShowLowest(false);
    }
  };

  const searchLowest = () => {
    if (Number(lowest) >= Dropped_Curbs.LOWEST.range.value) {
      console.log("success");
      setDesc(''); // Clear description on success
      setButtonDefault(false)
      setShowWidth(false);
      setShowGradient(false);
      setShowMaximum(false);
    } else {
      setDesc(Dropped_Curbs.LOWEST.desc);
      setError(true);
      setButtonDefault(false)
      setShowWidth(false);
      setShowGradient(false);
      setShowMaximum(false);
    }
  };

  const backButton = () => {
    if (!buttonDefault) {
      setDesc(false)
      setError(false);
      setButtonDefault(true);
      setShowWidth(true);
      setShowGradient(true);
      setShowMaximum(true);
      setShowLowest(true);      
    } else {
      navigate("/Profile");
    }
  } 
  
  return (
    <div className='container poppins-regular'>
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
                        className="input-field"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${Dropped_Curbs.WIDTH.unit})`}</p>
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
              showGradient &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Gradient (towards adjoining curbs)</p>
                      <input
                        type="number"
                        name="gradientNumerator"
                        className="input-field"
                        value={gradientNumerator}
                        onChange={(e) => setGradientNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular '>:</p>
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
              showMaximum &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Maximum cross gradient (Sloped towards road)</p>
                      <input
                        type="number"
                        name="gradientNumerator"
                        className="input-field"
                        value={maximumNumerator}
                        onChange={(e) => setMaximumNumerator(e.target.value)}
                      />
                      <p className=' input-text poppins-regular'>:</p>
                      <input
                        type="number"
                        name="gradientDenuminator"
                        className="input-field"
                        value={maximumDenominator}
                        onChange={(e) => setMaximumDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      {/* <p className='unit'>{`(${Dropped_Curbs.GRADIENT.unit})`}</p> */}
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchMaximum}
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
              showLowest && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Lowest point of height above the road or gutter</p>
                      <input
                        type="number"
                        name="WIDTH"
                        className="input-field"
                        value={lowest}
                        onChange={(e) => setLowest(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${Dropped_Curbs.LOWEST.unit})`}</p>
                    </div>
                  </div>
                  {
                        buttonDefault ?
                        <div 
                          onClick={searchLowest}
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
