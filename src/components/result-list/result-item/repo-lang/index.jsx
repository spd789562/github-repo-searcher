import React, { memo } from 'react'

import ColorMapping from './mapping'

import './repo-lang.css'

const RepoLang = ({ children: lang }) => (
  <div className="repo-lang">
    <div
      className="repo-lang-color"
      style={{ backgroundColor: ColorMapping[lang] || '#999' }}
    />
    <div className="repo-lang-text">{lang}</div>
  </div>
)

export default memo(RepoLang)
