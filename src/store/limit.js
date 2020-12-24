import { reducerCreator } from './_helper'

import { assoc } from 'ramda'

export const UPDATE_LIMIT_TIME = 'UPDATE_LIMIT_TIME'
export const UPDATE_LIMIT_COUNT = 'UPDATE_LIMIT_COUNT'

const initialState = {
  time: 0,
  count: 0,
}

const reducer = reducerCreator(initialState, {
  [UPDATE_LIMIT_TIME]: (state, time) => assoc(state, 'time', time),
  [UPDATE_LIMIT_COUNT]: (state, count) => assoc(state, 'count', count),
})

export default {
  initialState,
  reducer,
}
