import React from 'react'
import './Footer.css'

const Header = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterGroup">
      <a href="https://dribbble.com/davidcoronado">
        <img src={require('../assets/svg/dribbble.svg')} width="30" />
      </a>
      <a href="https://www.instagram.com/davidjcoronado">
        <img src={require('../assets/svg/instagram.svg')} width="30" />
      </a>
      <a href="https://www.linkedin.com/in/davidcoronado1">
        <img src={require('../assets/svg/linkedin.svg')} width="30" />
      </a>
      <a href="https://twitter.com/davidxcoronado">
        <img src={require('../assets/svg/twitter.svg')} width="30" />
      </a>
      <a href="https://github.com/davidcoronado">
        <img src={require('../assets/svg/github.svg')} width="30" />
      </a>
    </div>
  </div>
)

export default Header
