import React from 'react'

import './video.css'

class Video extends React.Component {
  render () {
    return (
      <div className = 'video-cont'>
        <video className = 'video' controls> 
          <source src = '/videos/hego.mp4'/>
        </video>
      </div>
    )
  }
}

export default Video
