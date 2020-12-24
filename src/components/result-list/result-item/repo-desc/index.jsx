import React, { memo } from 'react'

import './repo-desc.css'

const RepoDesc = ({ children = '', placeholder }) => (
  <div
    className={`repo-desc ${placeholder ? 'repo-desc__placeholder' : ''}`}
    title={children}
  >
    {children}
  </div>
)

export default memo(RepoDesc)
