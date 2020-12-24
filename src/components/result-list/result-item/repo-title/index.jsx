import React, { memo } from 'react'

import './repo-title.css'

const RepoTitle = ({ children = '', link, placeholder }) => (
  <h4 className={`repo-title ${placeholder ? 'repo-title__placeholder' : ''}`}>
    {children && (
      <a href={link} title={children}>
        {children}
      </a>
    )}
  </h4>
)

export default memo(RepoTitle)
