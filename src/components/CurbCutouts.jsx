import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import { Curb_CutOuts } from '../preDatasets/OutsideAndAroundBuilding';

export default function CurbCutouts() {
    const navigate = useNavigate();
    const [showWidth, setShowWidth] = useState(true)
    const [showGradient, setShowGradient] = useState(true)

    const [width, setWidth] = useState(1)
    const [gradientNumerator, setGradientNumerator] = useState(1)
    const [gradientDenominator, setGradientDenominator] = useState(1)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)

    const searchWidth = () => {
        if (Number(width) >= Curb_CutOuts.WIDTH.range.value) {
          console.log("success");
          setDesc(''); // Clear description on success
        } else {
          setDesc(Curb_CutOuts.WIDTH.desc);
          setError(true);
          setShowGradient(false);
          setShowMaximum(false);
          setShowLowest(false);
        }
    };
    
    const searchGradient = () => {
        const parsedNumerator = Number(gradientNumerator);
        const parsedDenominator = Number(gradientDenominator);
      
        if (parsedNumerator / parsedDenominator <= Curb_CutOuts.GRADIENT.parsedRange.numerator / Curb_CutOuts.GRADIENT.parsedRange.denominator) {
          console.log("success");
          setDesc(''); // Clear description on success
        } else {
          setDesc(Curb_CutOuts.GRADIENT.desc);
          setError(true);
          setShowWidth(false);
          setShowMaximum(false);
          setShowLowest(false);
        }
    };

    const backButton = () => {
        if (desc, error) {
          setDesc(false)
          setError(false);
          setShowWidth(true);
          setShowGradient(true);  
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
                          <p className='unit'>{`(${Curb_CutOuts.WIDTH.unit})`}</p>
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
                          <p className=' input-text poppins-regular'>:</p>
                          <input
                            type="number"
                            name="gradientDenuminator"
                            className="input-field"
                            value={gradientDenominator}
                            onChange={(e) => setGradientDenominator(e.target.value)}
                          />
                        </div>
                        <div className=' input-text text-end'>
                        </div>
                      </div>
                      {
                        error ? <div>
                          <p className='inadequate'>INADEQUATE</p>
                        </div> :
                        <div 
                          onClick={searchGradient}
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
