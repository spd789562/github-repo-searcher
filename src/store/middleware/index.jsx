import { useCallback } from 'react'
import apiMiddleware from './api'
import apiEmitMiddleware from './api-emit'

const applyMiddleware = (middlewares) => ([dispatch, getState]) => {
  const _dispatch = useCallback(
    (action) => {
      if (action.type) {
        dispatch(action)
        middlewares.forEach((middleware) =>
          middleware(getState, _dispatch)(action)
        )
      }
    },
    [getState, dispatch]
  )
  return [_dispatch]
}

export default applyMiddleware([apiEmitMiddleware, apiMiddleware])