/* actions */
import {
  API_GET_REPO,
  API_GET_REPO_NEXT,
  API_GET_LIMIT,
  API_GET_REPO_RETRY,
} from './actions'
import { APPEND_REPO_LIST, UPDATE_REPO_PAGE } from '@store/repo'
import { UPDATE_LIMIT_TIME } from '@store/limit'
import { CHANGE_LOADING_STATUS } from '@store/loading-status'

/* utils */
import { emit, apiEmit } from '@utils/emit'
import { includes } from 'ramda'

const PAGE_COUNT = 20

const apiMaps = (getState, dispatch) => ({
  [API_GET_REPO]: ({
    data: { items = [], total_count = 0 },
    err,
    reqData: { query = '', page = 1 },
  }) => {
    if (query !== getState().repo.query) return
    if (!err) {
      dispatch(
        emit(APPEND_REPO_LIST, {
          data: items,
          total: total_count,
          page,
          query,
        })
      )
      if (page === Math.floor(total_count / PAGE_COUNT) + 1) {
        if (!items.length && page === 1) {
          dispatch(emit(CHANGE_LOADING_STATUS, 'empty'))
        } else {
          dispatch(emit(CHANGE_LOADING_STATUS, 'end'))
        }
      } else {
        dispatch(emit(CHANGE_LOADING_STATUS, 'init'))
      }
    } else {
      if (err.toString().includes('API rate limit exceeded')) {
        dispatch(emit(UPDATE_LIMIT_TIME, Infinity))
        dispatch(emit(CHANGE_LOADING_STATUS, 'error_limit'))
        dispatch(emit(UPDATE_REPO_PAGE, page))
        dispatch(apiEmit(API_GET_LIMIT))
      } else {
        dispatch(emit(CHANGE_LOADING_STATUS, 'error_unknow'))
      }
    }
  },
  [API_GET_LIMIT]: ({ data, err }) => {
    if (!err) {
      dispatch(emit(UPDATE_LIMIT_TIME, data.resources.search.reset))
    }
  },
  [API_GET_REPO_NEXT]: () => {
    const {
      query,
      pagination: { page = 1, total = 0 },
    } = getState().repo
    const status = getState()['loading-status']
    const pageCount = Math.floor(total / PAGE_COUNT) + 1
    if (
      includes(status, ['init', 'error_limit_pending']) &&
      page + 1 <= pageCount
    ) {
      dispatch(emit(CHANGE_LOADING_STATUS, 'loading'))
      dispatch(
        apiEmit(API_GET_REPO, {
          query,
          page: page + 1,
        })
      )
    }
  },
  [API_GET_REPO_RETRY]: () => {
    const {
      query,
      pagination: { page = 1 },
    } = getState().repo
    dispatch(emit(CHANGE_LOADING_STATUS, 'loading'))
    dispatch(apiEmit(API_GET_REPO, { query, page }))
  },
})

export const apiMiddleware = (getState, dispatch) => ({ type, payload }) => {
  const actionMaps = apiMaps(getState, dispatch)
  actionMaps[type] && actionMaps[type](payload)
}

export default apiMiddleware
