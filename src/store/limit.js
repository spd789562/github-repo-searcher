import { reducerCreator } from './_helper'

import { assoc } from 'ramda'

export const UPDATE_LIMIT_TIME = 'UPDATE_LIMIT_TIME'
export const UPDATE_LIMIT_COUNT = 'UPDATE_LIMIT_COUNT'

const initialState = {
  time: 0,
  count: 0,
}

const reducer = reducerCreator(initialState, {
  [UPDATE_LIMIT_TIME]: (state, time) => assoc('time', time, state),
  [UPDATE_LIMIT_COUNT]: (state, count) => assoc('count', count, state),
})

export default {
  initialState,
  reducer,
}
