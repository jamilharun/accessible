import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SIGNAGES } from '../preDatasets/OutsideAndAroundBuilding';

export default function Signages() {
    const navigate = useNavigate();

    const [showInternational, setShowInternational] = useState(true)
    const [showDimention, setShowDimension] = useState(true)
    const [showHeight1, setShowHeight1] = useState(true)
    const [showHeight2, setShowHeight2] = useState(true)
    const [showHeightSignage, setShowHeightSignage] = useState(true)

    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)
    const [showC, setShowC] = useState(true)
    const [showD, setShowD] = useState(true)
    const [showE, setShowE] = useState(true)
    const [showF, setShowF] = useState(true)

    const [a, setA] = useState(0)
    const [a1, setA1] = useState(0)
    const [b, setB] = useState(0)
    const [b1, setB1] = useState(0)
    const [c, setC] = useState(0)
    const [c1, setC1] = useState(0)
    const [d, setD] = useState(0)
    const [d1, setD1] = useState(0)
    const [e, setE] = useState(0)
    const [e1, setE1] = useState(0)
    const [f, setF] = useState(0)
    const [f1, setF1] = useState(0)

    const [dimension, setDimension] = useState(0)
    const [height1, setHeight1] = useState(0)
    const [height2, setHeight2] = useState(0)
    const [heightSignage, setHeightSignage] = useState(0)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)

    
     
    const searchA = () => {
        if (Number(a) == SIGNAGES.INTERNATIONAL.a.range.value &&
            Number(a1) == SIGNAGES.INTERNATIONAL.a.range.value) {
            console.log("success");
            setDesc('');
            
          setButtonDefault(false)
          // setShowA(false)
          setShowB(false)
          setShowC(false)
          setShowD(false)
          setShowE(false)
          setShowF(false)
          setShowDimension(false)
          setShowHeight1(false)
          setShowHeight2(false)
          setShowHeightSignage(false)
        } else {
            setDesc(SIGNAGES.INTERNATIONAL.desc);
        setError(true);
          setButtonDefault(false)
          // setShowA(false)
          setShowB(false)
          setShowC(false)
          setShowD(false)
          setShowE(false)
          setShowF(false)
          setShowDimension(false)
          setShowHeight1(false)
          setShowHeight2(false)
          setShowHeightSignage(false)
        }
    }

    const searchB = () => {
        if (Number(b) == SIGNAGES.INTERNATIONAL.b.range.value &&
            Number(b1) == SIGNAGES.INTERNATIONAL.b.range.value) {
            console.log("success");
            setDesc('');
            
          setButtonDefault(false)
          setShowA(false)
          // setShowB(false)
          setShowC(false)
          setShowD(false)
          setShowE(false)
          setShowF(false)
          setShowDimension(false)
          setShowHeight1(false)
          setShowHeight2(false)
          setShowHeightSignage(false)
        } else {
            setDesc(SIGNAGES.INTERNATIONAL.desc);
        setError(true);
        
        setButtonDefault(false)
        setShowA(false)
        // setShowB(false)
        setShowC(false)
        setShowD(false)
        setShowE(false)
        setShowF(false)
        setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)
        }
    }

    const searchC = () => {
        if (Number(c) == SIGNAGES.INTERNATIONAL.c.range.value &&
            Number(c1) == SIGNAGES.INTERNATIONAL.c.range.value) {
            console.log("success");
            setDesc('');
            
          setButtonDefault(false)
          setShowA(false)
          setShowB(false)
          // setShowC(false)
          setShowD(false)
          setShowE(false)
          setShowF(false)
          setShowDimension(false)
          setShowHeight1(false)
          setShowHeight2(false)
          setShowHeightSignage(false)
        } else {
            setDesc(SIGNAGES.INTERNATIONAL.desc);
        setError(true);
        
        setButtonDefault(false)
        setShowA(false)
        setShowB(false)
        // setShowC(false)
        setShowD(false)
        setShowE(false)
        setShowF(false)
        setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)
        }
    }

    const searchD = () => {
        if (Number(d) == SIGNAGES.INTERNATIONAL.d.range.value &&
            Number(d1) == SIGNAGES.INTERNATIONAL.d.range.value) {
            console.log("success");
            setDesc('');
          
            setButtonDefault(false)
            setShowA(false)
            setShowB(false)
            setShowC(false)
            // setShowD(false)
            setShowE(false)
            setShowF(false)
            setShowDimension(false)
            setShowHeight1(false)
            setShowHeight2(false)
            setShowHeightSignage(false)
        } else {
            setDesc(SIGNAGES.INTERNATIONAL.desc);
        setError(true);
        
        setButtonDefault(false)
        setShowA(false)
        setShowB(false)
        setShowC(false)
        // setShowD(false)
        setShowE(false)
        setShowF(false)
        setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)
        }
    }

    const searchE = () => {
        if (Number(e) == SIGNAGES.INTERNATIONAL.e.range.value && 
        Number(e1) == SIGNAGES.INTERNATIONAL.e.range.value) {
            console.log("success");
            setDesc('');
            
          setButtonDefault(false)
          setShowA(false)
          setShowB(false)
          setShowC(false)
          setShowD(false)
          // setShowE(false)
          setShowF(false)
          setShowDimension(false)
          setShowHeight1(false)
          setShowHeight2(false)
          setShowHeightSignage(false)
        } else {
            setDesc(SIGNAGES.INTERNATIONAL.desc);
        setError(true);
        
        setButtonDefault(false)
        setShowA(false)
        setShowB(false)
        setShowC(false)
        setShowD(false)
        // setShowE(false)
        setShowF(false)
        setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)
        }
    }

    const searchF = () => {
        if (Number(f) == SIGNAGES.INTERNATIONAL.f.range.numerator && 
            Number(f1) == SIGNAGES.INTERNATIONAL.f.range.denominator) {
            console.log("success");
            setDesc('');
          
            setButtonDefault(false)
            setShowA(false)
            setShowB(false)
            setShowC(false)
            setShowD(false)
            setShowE(false)
            // setShowF(false)
            setShowDimension(false)
            setShowHeight1(false)
            setShowHeight2(false)
            setShowHeightSignage(false)
        } else {
            setDesc(SIGNAGES.INTERNATIONAL.desc);
        setError(true);
        
        setButtonDefault(false)
        setShowA(false)
        setShowB(false)
        setShowC(false)
        setShowD(false)
        setShowE(false)
        // setShowF(false)
        setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)
        }
    }

    const searchDimension = () => {
        if (Number(dimension) >= SIGNAGES.DIMENSION.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setShowInternational(false)
        setButtonDefault(false)
        // setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)
          } else {
            setDesc(SIGNAGES.DIMENSION.desc);
        setError(true);

        setShowInternational(false)
        setButtonDefault(false)
        // setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)

          }
    }

    const searchHeight1 = () => {
        if (Number(height1) <= SIGNAGES.HEIGHT1.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setShowInternational(false)
            setButtonDefault(false)
            setShowDimension(false)
            // setShowHeight1(false)
            setShowHeight2(false)
            setShowHeightSignage(false)
          } else {
            setDesc(SIGNAGES.HEIGHT1.desc);
        setError(true);
        setShowInternational(false)
        setButtonDefault(false)
        setShowDimension(false)
        // setShowHeight1(false)
        setShowHeight2(false)
        setShowHeightSignage(false)

          }
    }

    const searchHeight2 = () => {
        if (Number(height2) >= SIGNAGES.HEIGHT2.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setShowInternational(false)
            setButtonDefault(false)
            setShowDimension(false)
            setShowHeight1(false)
            // setShowHeight2(false)
            setShowHeightSignage(false)
          } else {
            setDesc(SIGNAGES.HEIGHT2.desc);
        setError(true);
        setShowInternational(false)
        setButtonDefault(false)
        setShowDimension(false)
        setShowHeight1(false)
        // setShowHeight2(false)
        setShowHeightSignage(false)
          }
    }

    const searchHeightSignage = () => {
        if (Number(heightSignage) >= SIGNAGES.HEIGHT_SIGNAGES_SYMBOLS_LETTERS_NUMBERS.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setShowInternational(false)
            setButtonDefault(false)
            setShowDimension(false)
            setShowHeight1(false)
            setShowHeight2(false)
            // setShowHeightSignage(false)
          } else {
            setDesc(SIGNAGES.HEIGHT_SIGNAGES_SYMBOLS_LETTERS_NUMBERS.desc);
        setError(true);
        setShowInternational(false)
        setButtonDefault(false)
        setShowDimension(false)
        setShowHeight1(false)
        setShowHeight2(false)
        // setShowHeightSignage(false)
          }
    }

    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setButtonDefault(true)
          setShowInternational(true)
          setShowA(true)
          setShowB(true)
          setShowC(true)
          setShowD(true)
          setShowE(true)
          setShowF(true)
          setShowDimension(true)
          setShowHeight1(true)
          setShowHeight2(true)
          setShowHeightSignage(true)
          
        } else {
          navigate("/Profile");
        }
    }
  return (
    <div className='container-moreheight poppins-regular'>
        <div className='container-body '>

                {
                  showInternational && 
                    <div className=' flex mb-5'>
                      <div>
                        <div>
                          <p className='signage_title'><span className='signage_title_highlight'> International symbol for Access </span> (in centimeters)
                            <p> A. Access Symbol; B. Phone; C. Elevator; D. Parking; E. Ramp</p>
                          </p>
                        </div>
                        <div className=' input-container-box input-container-width'>
                          {
                            showA && 
                              <div className=' w-full'>
                                <div className='asdasda'>
                                  <p className='w-full input-text poppins-regular'>A</p>
                                  <div className='input-field-signage'>
                                    <input
                                      type="number"
                                      name="a"
                                      className="input-field w-full"
                                      value={a}
                                      onChange={(e) => setA(e.target.value)}
                                    />
                                  </div>
                                  <p className='input-border operator'> x </p>
                                  <div className='input-field-signage'>
                                    <input
                                      type="number"
                                      name="a"
                                      className="input-field w-full"
                                      value={a1}
                                      onChange={(e) => setA1(e.target.value)}
                                    />
                                  </div>
                                  {
                                        buttonDefault ?
                                        <div 
                                          onClick={searchA}
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
                            showB &&
                              <div className=' w-full'>
                                <div className='asdasda'>
                                  <p className='w-full input-text poppins-regular'>A, B, C, D</p>
                                  
                                  <div className='input-field-signage'>
                                    <input
                                      type="number"
                                      name="b"
                                      className="input-field w-full"
                                      value={b}
                                      onChange={(e) => setB(e.target.value)}
                                    />
                                  </div>
                                  
                                  <p className='input-border operator'> x </p>

                                  <div className='input-field-signage'>
                                    <input
                                      type="number"
                                      name="b"
                                      className="input-field w-full"
                                      value={b1}
                                      onChange={(e) => setB1(e.target.value)}
                                    />
                                  </div>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchB}
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
                            showC &&
                              <div className=' w-full'>
                                <div className='asdasda'>
                                  <p className='w-full input-text poppins-regular'>A, B, C</p>
                                  
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="c"
                                    className="input-field w-full"
                                    value={c}
                                    onChange={(e) => setC(e.target.value)}
                                  />
                                  </div>
                                  
                                  
                                  <p className='input-border operator'> x </p>
                                  
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="c"
                                    className="input-field w-full"
                                    value={c1}
                                    onChange={(e) => setC1(e.target.value)}
                                  />
                                  </div>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchC}
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
                            showD &&
                              <div className=' w-full'>
                                <div className='asdasda'>
                                  <p className='w-full input-text poppins-regular'>A, B, C, D, E</p>
                                  
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="d"
                                    className="input-field w-full"
                                    value={d}
                                    onChange={(e) => setD(e.target.value)}
                                  />
                                  </div>
                                  
                                  
                                  <p className='input-border operator'> x </p>
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="d"
                                    className="input-field w-full"
                                    value={d1}
                                    onChange={(e) => setD1(e.target.value)}
                                  />
                                  </div>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchD}
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
                            showE &&
                              <div className=' w-full'>
                                <div className='asdasda'>
                                  <p className='w-full input-text poppins-regular'>A, B, C, D, E</p>
                                  
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="e"
                                    className="input-field w-full"
                                    value={e}
                                    onChange={(e) => setE(e.target.value)}
                                  />
                                  </div>
                                  
                                  
                                  <p className='input-border operator'> x </p>
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="e"
                                    className="input-field w-full"
                                    value={e1}
                                    onChange={(e) => setE1(e.target.value)}
                                  />
                                  </div>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchE}
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
                            showF &&
                              <div className=' w-full'>
                                <div className='asdasda'>
                                  <p className='w-full input-text poppins-regular'>F</p>
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="f"
                                    className="input-field w-full"
                                    value={f}
                                    onChange={(e) => setF(e.target.value)}
                                  />
                                  </div>

                                  <p className='input-border operator'> x </p>
                                  <div className='input-field-signage'>
                                  <input
                                    type="number"
                                    name="f"
                                    className="input-field w-full"
                                    value={f1}
                                    onChange={(e) => setF1(e.target.value)}
                                  />
                                  </div>
                                  {
                                    buttonDefault ?
                                    <div 
                                      onClick={searchF}
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
              showDimention && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Dimension of headroom</p>
                      <input
                        type="number"
                        name="dimension"
                        className="input-field"
                        value={dimension}
                        onChange={(e) => setDimension(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SIGNAGES.DIMENSION.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchDimension}
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
              showHeight1 && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Height of signs on walls and doors (maximum)</p>
                      <input
                        type="number"
                        name="height1"
                        className="input-field"
                        value={height1}
                        onChange={(e) => setHeight1(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SIGNAGES.HEIGHT1.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchHeight1}
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
              showHeight2 && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Height of signs on walls and doors (minimum)</p>
                      <input
                        type="number"
                        name="height2"
                        className="input-field"
                        value={height2}
                        onChange={(e) => setHeight2(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SIGNAGES.HEIGHT2.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchHeight2}
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
              showHeightSignage && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width h-16'>
                      <p className=' input-text poppins-regular'>Height of Signages should have raised symbols, letters, or numbers</p>
                      <input
                        type="number"
                        name="heightSignage"
                        className="input-field"
                        value={heightSignage}
                        onChange={(e) => setHeightSignage(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${SIGNAGES.HEIGHT_SIGNAGES_SYMBOLS_LETTERS_NUMBERS.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchHeightSignage}
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
