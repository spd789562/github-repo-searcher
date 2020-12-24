import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './repo-star.css'

const RepoStar = ({ children = 0 }) => (
  <div className="repo-star">
    <FontAwesomeIcon icon={faStar} style={{ color: '#ffd122' }} />
    <div className="repo-star-count">{children}</div>
  </div>
)

export default memo(RepoStar)
