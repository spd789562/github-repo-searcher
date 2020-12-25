import React from 'react'

/* store */
import { useStore } from '@store'

/* mapping */
import { TextMapping, IconMapping } from './mapping'

import './loading-status.css'

const LoadingStatus = ({ style }) => {
  const [status] = useStore('loading-status')
  return (
    <div style={style} className="loading-status">
      {IconMapping[status]}
      <div className="loading-status-text">{TextMapping[status]}</div>
    </div>
  )
}

export default LoadingStatus
