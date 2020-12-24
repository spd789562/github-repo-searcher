/* actions */
import {
  API_EMIT,
  API_GET_REPO,
  API_GET_REPO_NEXT,
  API_GET_LIMIT,
} from './actions'
import { APPEND_REPO_LIST } from '@store/repo'

/* utils */
import { emit, apiEmit } from '@utils/emit'

const apiMaps = (getState, dispatch) => ({
  [API_GET_REPO]: ({
    data: { items = [], total_count = 0 },
    err,
    reqData: { page = 1 },
  }) => {
    if (!err) {
      dispatch(
        emit(APPEND_REPO_LIST, {
          data: items,
          total: total_count,
          page,
        })
      )
    } else {
    }
  },
  [API_GET_REPO_NEXT]: (payload) => {},
  [API_GET_LIMIT]: (payload) => {},
})

export const apiMiddleware = (getState, dispatch) => ({ type, payload }) => {
  const actionMaps = apiMaps(getState, dispatch)
  actionMaps[type] && actionMaps[type](payload)
}

export default apiMiddleware
