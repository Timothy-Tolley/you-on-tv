import React from 'react'

import Image from './Image/Image'
import Video from './Video/Video'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Image />
        <Video />
      </div>
    )
  }
}

export default App
