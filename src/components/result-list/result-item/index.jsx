import React, { memo } from 'react'

/* store */
import { useStore } from '@store'

/* components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import RepoTitle from './repo-title'
import RepoDesc from './repo-desc'
import RepoStar from './repo-star'
import RepoLang from './repo-lang'

/* hooks */
import { useInfiniteLoad } from './handler'

import './result-item.css'

const ResultItem = ({ index, style, isLast }) => {
  const [data] = useStore(`repo.data.${index}`)
  const { itemRef } = useInfiniteLoad(isLast)
  return (
    <div style={style} className="result-item" ref={itemRef}>
      <FontAwesomeIcon
        icon={faCodeBranch}
        style={{ color: '#6a737d', marginTop: 4 }}
      />
      <div className="result-item-content">
        <RepoTitle link={data.svn_url} placeholder={data.placeholder}>
          {data.name}
        </RepoTitle>
        {data.description && (
          <RepoDesc placeholder={data.placeholder}>{data.description}</RepoDesc>
        )}
        <div className="repo-meta">
          <RepoStar>{data.stargazers_count}</RepoStar>
          <RepoLang>{data.language}</RepoLang>
        </div>
      </div>
    </div>
  )
}

export default memo(ResultItem)
