import { useReducer, useRef, useCallback } from 'react'

import { createContext, useContextSelector } from 'use-context-selector'

import { combineReducer } from './_helper'
import applyMiddleware from './middleware'
import repoReducer from './repo'
import limitReducer from './limit'

import { prop, path, pipe } from 'ramda'

const GlobalStore = createContext({})

const [combinedReducers, initialState] = combineReducer({
  repo: repoReducer,
  limit: limitReducer,
})

export const Provider = ({ children }) => {
  const stateRef = useRef(initialState)
  const getState = useCallback(() => stateRef.current, [])
  const [state, reducerDispatch] = useReducer(
    (state, action) => (stateRef.current = combinedReducers(state, action)),
    initialState
  )
  const [dispatch] = applyMiddleware([reducerDispatch, getState])
  return (
    <GlobalStore.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalStore.Provider>
  )
}

// export const useDispatch = () => useContext(GlobalStore).dispatch
export const useDispatch = () =>
  useContextSelector(GlobalStore, prop('dispatch'))

export const useStroeSelector = (field, selector) =>
  useContextSelector(GlobalStore, pipe(prop(field), selector))

export const useStore = (keyPath, initialValue = null) => {
  const dispatch = useDispatch()
  let keys = []
  if (keyPath.indexOf('.') !== 1) {
    keys = keyPath.split('.')
  } else if (Array.isArray(keyPath)) {
    keys = keyPath
  } else {
    keys = [keyPath]
  }
  let result = useContextSelector(GlobalStore, path(keys))
  if (
    initialValue !== null &&
    result.constructor === Object &&
    Object.keys(result).length === 0
  ) {
    result = initialValue
  }

  return [result, dispatch]
}
