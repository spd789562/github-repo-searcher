import React from 'react'
/* store */
import { useStore } from '@store'

const LoadingStatus = ({style}) => {
  const [status] = useStore('loading-status')
  return <div style={style}>{status}</div>
}

export default LoadingStatus