import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/page-2/">
        <img src={require('../assets/svg/dribbble.svg')} width="30" />
      </Link>
    </div>
  </div>
)

export default Header
