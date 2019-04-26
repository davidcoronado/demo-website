import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = () => (
  <div>
    <div className="Intro">
      <div className="Title">
        <p>
          Hi 👋, I'm David Coronado, <br /> a Developer, Designer, Husband,
          Father, Latino and a Porsche enthusiast.
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
