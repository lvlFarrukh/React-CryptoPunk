import React from 'react'
import './PunkCard.css'
import {WETH} from '../../constant/images'

const PunkCard = ({id, name, traits, image, setSelectedPunk, punk}) => {
  const onSelectPunk = () => {
    setSelectedPunk(punk)
  }
  return (
    <div className="punkList-container" onClick={onSelectPunk}>
      <img src={image} alt={name} />
      <div className="punkList-details">
          <p className="punk-name">{name}</p>
          <p className="punk-id">.#{id}</p>
          <div className="punk-price">
              <img src={WETH}/>
              <p>{traits?.value ? traits?.value : '0'}</p>
          </div>
      </div>
    </div>
  )
}

export default PunkCard