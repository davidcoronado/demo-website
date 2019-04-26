import React from 'react'

const IndexPage = () => (
  <div>
    <div className="Intro">
      <div className="Title">
        <p>
          Hi 👋, I'm David Coronado. <br />
          I'm a Sales Engineer, Husband, Father,<br />
          Latino and a Taco enthusiast <br />based in San Francisco.
        </p>
      </div>
    </div>
    <div className="PhotoGallery">
      <img src={require('../assets/images/twinBoys.jpg')} width="33.2%" />
      <img src={require('../assets/images/couple.jpg')} width="28.6%" />
      <img
        src={require('../assets/images/tortillaBarTacos.jpg')}
        width="38.2%"
      />
    </div>
  </div>
)

export default IndexPage
