import { useRef, useEffect, useCallback } from 'react'

/* store */
import { useDispatch } from '@store'
import { API_GET_REPO_NEXT } from '@store/middleware/actions'

/* utils */
import { emit } from '@utils/emit'

const createDisplayObserver = (callback) =>
  new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio > 0) callback()
  })

export const useInfiniteLoad = (isLast) => {
  const itemRef = useRef(null)
  const dispatch = useDispatch()
  const triggerNext = useCallback(() => {
    dispatch(emit(API_GET_REPO_NEXT))
  }, [])
  useEffect(() => {
    let observer = null
    if (isLast && itemRef.current) {
      observer = createDisplayObserver(triggerNext)
      observer.observe(itemRef.current)
    }
    return () => {
      observer && observer.disconnect()
    }
  }, [])
  return { itemRef }
}
