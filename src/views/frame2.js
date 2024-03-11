import React from 'react'

import { Helmet } from 'react-helmet'

import './frame2.css'

const Frame2 = (props) => {
  return (
    <div className="frame2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame2-frame2">
        <div className="frame2-frame1">
          <span className="frame2-text">
            <span>BUY NOW!!8!</span>
          </span>
        </div>
        <span className="frame2-text2">
          <span>This capybara is so cute it makes you bilioner!! :D</span>
        </span>
      </div>
    </div>
  )
}

export default Frame2
