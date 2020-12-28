import React from 'react'

/* store */
import { useStore } from '@store'

/* components */
import RetryButton from './retry-buton'

/* mapping */
import { TextMapping, IconMapping } from './mapping'

import './loading-status.css'

const LoadingStatus = ({ style }) => {
  const [status] = useStore('loading-status')
  return (
    <div style={style} className="loading-status">
      {IconMapping[status]}
      <div className="loading-status-text">{TextMapping[status]}</div>
      {status.includes('error_limit') && <RetryButton />}
    </div>
  )
}

export default LoadingStatus
