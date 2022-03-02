import React from 'react'
import './SelectedPunk.css'
import {MORE_ICON,INSTAGRAM_ICON,TWITTER_ICON} from '../../constant/images'

const SelectedPunk = ({selectedPunk}) => {
    console.log(selectedPunk)
  return (
    <div className='selectedPunk'>
        <div className='punkImage'>
            <img src={selectedPunk?.image_url} alt="" />
        </div>

        <div className='punkDetail'>
            <div className='punkname'>
                <p>
                    {selectedPunk?.name} 
                    <span>
                        {".#" + selectedPunk?.token_id}
                    </span>
                
                </p>
            </div>

            <div className='punkid'>
                <div className='punkIdcircle'></div>
                <div className='punkid-ids'>
                    <p>{selectedPunk?.asset_contract?.address}</p>
                    <p className='myid'>@farrukha303</p>
                </div>
            </div>
        </div>

        <div className='socialMediaIcons'>
            <img src={INSTAGRAM_ICON} alt="" />
            <img src={TWITTER_ICON} alt="" />
            <img src={MORE_ICON} alt="" />
        </div>

    </div>
  )
}

export default SelectedPunk