import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PUBLIC_TELEPHONES } from '../preDatasets/InsideBuildingsAndStructures';
export default function PublicTelephone() {
    const navigate = useNavigate(); 

    const [desc, setDesc] = useState(false)
  const [error, setError] = useState(false)
  const [buttonDefault, setButtonDefault] = useState(true)

  const [showSpaceInfront, setShowSpaceInfront] = useState(true)
  const [showTelephone, setShowTelephone] = useState(true)
  const [showCoins, setShowCoins] = useState(true)

  const [spaceInfrontNumerator, setSpaceInfrontNumerator] = useState(0)
  const [spaceInfrontDenominator, setSpaceInfrontDenominator] = useState(0)
  const [telephone, setTelephone] = useState(0)
  const [coins, setCoins] = useState(0)

  const searchSpaceInfront  = () => {
    if (Number(spaceInfrontNumerator) == PUBLIC_TELEPHONES.SPACE_INFRONT.range.value && 
        Number(spaceInfrontDenominator) == PUBLIC_TELEPHONES.SPACE_INFRONT.range.value) {
        console.log("success");
        setDesc(''); // Clear description on success
        setButtonDefault(false)
        // setShowSpaceInfront(false)
        setShowTelephone(false)
        setShowCoins(false)
      } else {
        setDesc(PUBLIC_TELEPHONES.SPACE_INFRONT.desc);
        setError(true);
        setButtonDefault(false)
        // setShowSpaceInfront(false)
        setShowTelephone(false)
        setShowCoins(false)
      }
  }

  const searchTelephone = () => {
    if (Number(telephone) >= PUBLIC_TELEPHONES.TELEPHONE.range.value) {
        console.log("success");
        setDesc(''); // Clear description on success
        setButtonDefault(false)
        // setShowTelephone(false)
        setShowSpaceInfront(false)
        setShowCoins(false)
      } else {
        setDesc(PUBLIC_TELEPHONES.TELEPHONE.desc);
        setError(true);
        setButtonDefault(false)
        // setShowTelephone(false)
        setShowSpaceInfront(false)
        setShowCoins(false)
      }
  }

  const searchCoin = () => {
    if (Number(coins) <= PUBLIC_TELEPHONES.COINS_SLOT.range.value) {
        console.log("success");
        setDesc(''); // Clear description on success
        setButtonDefault(false)
        setShowTelephone(false)
        setShowSpaceInfront(false)
        // setShowCoins(false)
      } else {
        setDesc(PUBLIC_TELEPHONES.COINS_SLOT.desc);
        setError(true);
        setButtonDefault(false)
        setShowTelephone(false)
        setShowSpaceInfront(false)
        // setShowCoins(false)
      }
  }

  const backButton = () => {
    if (!buttonDefault) {
      setDesc(false)
      setError(false);
      setButtonDefault(true)
      setShowSpaceInfront(true)
      setShowTelephone(true)
      setShowCoins(true)     
    } else {
      navigate("/Profile");
    }
  }
  return (
    <div className='container poppins-regular'>
        <div className='container-body '>
        
        
        {
              showSpaceInfront &&
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Space in front of telephones</p>
                      <input
                        type="number"
                        name="spaceInfrontNumerator"
                        className="input-field"
                        value={spaceInfrontNumerator}
                        onChange={(e) => setSpaceInfrontNumerator(e.target.value)}
                      />
                      <p className=' input-border poppins-regular'>x</p>
                      <input
                        type="number"
                        name="handRailDenominator"
                        className="input-field"
                        value={spaceInfrontDenominator}
                        onChange={(e) => setSpaceInfrontDenominator(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PUBLIC_TELEPHONES.SPACE_INFRONT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchSpaceInfront}
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
              showTelephone && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Telephone boot door Width</p>
                      <input
                        type="number"
                        name="telephone"
                        className="input-field"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PUBLIC_TELEPHONES.SPACE_INFRONT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchTelephone}
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
              showCoins && 
                <div className=' flex mb-5'>
                  <div>
                    <div className=' input-container input-container-width'>
                      <p className=' input-text poppins-regular'>Coins slot, dialing controls etc.</p>
                      <input
                        type="number"
                        name="max"
                        className="input-field"
                        value={coins}
                        onChange={(e) => setCoins(e.target.value)}
                      />
                    </div>
                    <div className=' input-text text-end'>
                      <p className='unit'>{`(${PUBLIC_TELEPHONES.COINS_SLOT.unit})`}</p>
                    </div>
                  </div>
                  {
                    buttonDefault ?
                    <div 
                      onClick={searchCoin}
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
