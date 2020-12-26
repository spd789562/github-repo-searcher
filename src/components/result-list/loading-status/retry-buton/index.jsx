import React, { useState, useEffect } from 'react'

/* store */
import { useStore } from '@store'

/* components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRedoAlt
} from '@fortawesome/free-solid-svg-icons'

/* hooks */
import { useReciprocal, useRefresh } from './handler'

import './retry-button.css'

const Button = () => {
  const handleRefresh = useRefresh()
  return (
    <div className="retry-button" onClick={handleRefresh}>
      <FontAwesomeIcon icon={faRedoAlt} />
      &nbsp;重試
    </div>
  )
}

const RetryButton = () => {
  const [unlockTime] = useStore('limit.time')
  const second = useReciprocal(unlockTime)
  return unlockTime === Infinity ? (
    '，請稍候再試'
  ) : second === 0 ? (
    <Button />
  ) : (
    <div>，{second} 秒後重試</div>
  )
}

export default RetryButton
