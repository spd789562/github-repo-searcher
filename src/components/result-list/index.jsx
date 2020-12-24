import React from 'react'

/* store */
import { useStore } from '@store'

/* components */
import { FixedSizeList } from 'react-window'
import ResultItem from './result-item'

/* hooks */
import { useScrollHeight } from './handler'

const ResultList = () => {
  const [dataLength] = useStore('repo.data.length')
  const height = useScrollHeight()
  return (
    <FixedSizeList
      itemCount={dataLength}
      width="100%"
      height={height}
      itemSize={110}
    >
      {ResultItem}
    </FixedSizeList>
  )
}

export default ResultList
