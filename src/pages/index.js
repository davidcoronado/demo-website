import React from 'react'

const IndexPage = () => (
  <div>
    <div className="Intro">
      <div className="Title">
        <p>
          Hi 👋, I'm David Coronado, <br />
          a Sales Engineer, Husband, Father,<br />
          Latino and a Porsche enthusiast <br />based in San Francisco.
        </p>
      </div>
    </div>
    <div className="PhotoGallery">
      <img src={require('../assets/images/caymanGT4.jpg')} width="33%" />
      <img src={require('../assets/images/tortillaBarTacos.jpg')} width="33%" />
      <img src={require('../assets/images/twinBoys.jpg')} width="33%" />
    </div>
  </div>
)

export default IndexPage
