import { reducerCreator } from './_helper'

export const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS'

const initialState = 'init'

const reducer = reducerCreator(initialState, {
  [CHANGE_LOADING_STATUS]: (__, status) => status,
})

export default {
  initialState,
  reducer,
}
