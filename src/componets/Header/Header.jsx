import React from 'react'
import { CRYPTOPUNT_LOGO, SEARCH_ICON, THEME_SWITCH } from '../../constant/images'
import './Header.css'

function Header() {
  return (
    <div className='HeaderContainer'>

      <div className='logoContainer'>
        <img className='logo' src={CRYPTOPUNT_LOGO} alt='logo' />
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img className='searchIcon' src={SEARCH_ICON} alt='searchIcon' />
        </div>

        <input className='searchInput' type='text' placeholder='Search' />
      </div>

      <div className='HeaderItem'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className='themeSwitchContainer'>
        <img className='themeSwitchLogo' src={THEME_SWITCH} alt="logo" />
      </div>

      <div className='loginButton'>
        GET IN
      </div>

    </div>
  )
}

export default Header