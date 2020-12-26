import { useState, useEffect, useCallback } from 'react'

/* store */
import { useDispatch } from '@store'
import { API_GET_REPO_RETRY } from '@store/middleware/actions'

/* utils */
import { emit } from '@utils/emit'

export const useReciprocal = (unlockTime) => {
  const [second, setSecond] = useState(0)
  let timer
  useEffect(() => {
    const remainSecond = Math.ceil(
      (unlockTime * 1000 - new Date().getTime()) / 1000
    )
    if (remainSecond >= 0) {
      setSecond(remainSecond)
      timer = setInterval(() => {
        setSecond((second) => {
          const remain = second - 1
          if (second <= 0) {
            clearTimeout(timer)
            return 0
          } else {
            return remain
          }
        })
      }, 1000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [unlockTime])
  return second
}

export const useRefresh = () => {
  const dispatch = useDispatch()
  const handleRefresh = useCallback(() => {
    dispatch(emit(API_GET_REPO_RETRY))
  }, [])
  return handleRefresh
}
