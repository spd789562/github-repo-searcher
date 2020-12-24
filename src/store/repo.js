import { reducerCreator } from './_helper'

import { assoc, concat } from 'ramda'

export const APPEND_REPO_LIST = 'APPEND_REPO_LIST'
export const CLEAR_REPO_LIST = 'CLEAR_REPO_LIST'

const initialState = {
  pagination: {
    total: 0,
    page: 1,
  },
  data: [],
}

const reducer = reducerCreator(initialState, {
  [APPEND_REPO_LIST]: (
    { data: originRepo },
    { total = 0, page = 1, data = [] }
  ) => ({
    pagination: {
      total,
      page,
    },
    data: concat(originRepo, data),
  }),
  [CLEAR_REPO_LIST]: () => initialState,
})

export default {
  initialState,
  reducer,
}
