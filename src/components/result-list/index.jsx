import React from 'react'

/* store */
import { useStore } from '@store'

/* components */
import { FixedSizeList } from 'react-window'
import ResultItem from './result-item'
import LoadingStatus from './loading-status'

/* hooks */
import { useScrollHeight } from './handler'

const ResultList = () => {
  const [dataLength] = useStore('repo.data.length')
  const height = useScrollHeight()
  return (
    <FixedSizeList
      itemCount={dataLength + 1}
      width="100%"
      height={height}
      itemSize={110}
    >
      {({ index, style }) =>
        index !== dataLength ? (
          <ResultItem
            style={style}
            index={index}
            isLast={index === dataLength - 1}
          />
        ) : (
          <LoadingStatus style={style} />
        )
      }
    </FixedSizeList>
  )
}

export default ResultList
