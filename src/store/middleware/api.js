/* actions */
import { API_GET_REPO, API_GET_REPO_NEXT, API_GET_LIMIT } from './actions'
import { APPEND_REPO_LIST } from '@store/repo'
import { CHANGE_LOADING_STATUS } from '@store/loading-status'

/* utils */
import { emit, apiEmit } from '@utils/emit'

const PAGE_COUNT = 20

const apiMaps = (getState, dispatch) => ({
  [API_GET_REPO]: ({
    data: { items = [], total_count = 0 },
    err,
    reqData: { query = '', page = 1 },
  }) => {
    if (!err && query === getState().repo.query) {
      dispatch(
        emit(APPEND_REPO_LIST, {
          data: items,
          total: total_count,
          page,
          query,
        })
      )
      if (page === Math.floor(total_count / PAGE_COUNT) + 1) {
        dispatch(emit(CHANGE_LOADING_STATUS, 'end'))
      } else {
        dispatch(emit(CHANGE_LOADING_STATUS, 'init'))
      }
    } else {
      dispatch(emit(CHANGE_LOADING_STATUS, 'error'))
    }
  },
  [API_GET_REPO_NEXT]: () => {
    const {
      query,
      pagination: { page = 1, total = 0 },
    } = getState().repo
    const status = getState()['loading-status']
    const pageCount = Math.floor(total / PAGE_COUNT) + 1
    if (status !== 'end' && status !== 'loading' && page + 1 <= pageCount) {
      dispatch(emit(CHANGE_LOADING_STATUS, 'loading'))
      dispatch(
        apiEmit(API_GET_REPO, {
          query,
          page: page + 1,
        })
      )
    }
  },
  [API_GET_LIMIT]: (payload) => {},
})

export const apiMiddleware = (getState, dispatch) => ({ type, payload }) => {
  const actionMaps = apiMaps(getState, dispatch)
  actionMaps[type] && actionMaps[type](payload)
}

export default apiMiddleware
