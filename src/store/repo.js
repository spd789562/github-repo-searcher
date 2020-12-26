import { reducerCreator } from './_helper'

import { assoc, concat, assocPath } from 'ramda'

export const APPEND_REPO_LIST = 'APPEND_REPO_LIST'
export const UPDATE_REPO_SEARCH_QUERY = 'UPDATE_REPO_SEARCH_QUERY'
export const UPDATE_REPO_PAGE = 'UPDATE_REPO_PAGE'
export const CLEAR_REPO_LIST = 'CLEAR_REPO_LIST'

const initialState = {
  pagination: {
    total: 0,
    page: 1,
  },
  query: '',
  data: [],
}

const reducer = reducerCreator(initialState, {
  [APPEND_REPO_LIST]: (
    { data: originRepo },
    { total = 0, page = 1, data = [], query = '' }
  ) => ({
    query,
    pagination: {
      total,
      page,
    },
    data: concat(originRepo, data),
  }),
  [UPDATE_REPO_SEARCH_QUERY]: (state, query) => assoc('query', query, state),
  [UPDATE_REPO_PAGE]: (state, page) =>
    assocPath(['pagination', 'page'], page, state),
  [CLEAR_REPO_LIST]: (state) => ({
    pagination: {
      total: 0,
      page: 1,
    },
    query: state.query,
    data: [],
  }),
})

export default {
  initialState,
  reducer,
}
