import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { COVERS } from '../preDatasets/Safety';

export default function Covers() {
    const navigate = useNavigate();

    const [showEffective, setShowEffective] = useState(true)
    const [showKickBoard, setShowKickBoard] = useState(true)

    const [effective, setEffective] = useState(0)
    const [kickBoard, setKickBoard] = useState(0)

    const [desc, setDesc] = useState(false)
    const [error, setError] = useState(false)
    const [buttonDefault, setButtonDefault] = useState(true)


    const searchEffective = () => {
        if (Number(effective) >= COVERS.EFFECTIVE.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowKickBoard(false);
          } else {
            setDesc(COVERS.EFFECTIVE.desc);
            setError(true);
            setButtonDefault(false)
            setShowKickBoard(false);
        }
    }

    const searchKickBoard = () => {
        if (Number(kickBoard) >= COVERS.KICKBOARD.range.value) {
            console.log("success");
            setDesc(''); // Clear description on success
            setButtonDefault(false)
            setShowEffective(false);
          } else {
            setDesc(COVERS.KICKBOARD.desc);
            setError(true);
            setButtonDefault(false)
            setShowEffective(false);
        }
    }

    const backButton = () => {
        if (!buttonDefault) {
          setDesc(false)
          setError(false);
          setShowEffective(true)
          setShowKickBoard(true)
          setButtonDefault(true)
        } else {
          navigate("/Profile");
        }
      }

  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
            
            {
              showEffective && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Effective width of footways</p>
                      <input
                        type="number"
                        name="effective"
                        className="input-field"
                        value={effective}
                        onChange={(e) => setEffective(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${COVERS.EFFECTIVE.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchEffective}
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
              showKickBoard && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Kickboard height</p>
                      <input
                        type="number"
                        name="kickBoard"
                        className="input-field"
                        value={kickBoard}
                        onChange={(e) => setKickBoard(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${COVERS.KICKBOARD.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchKickBoard}
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
