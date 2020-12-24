/* actions */
import {
  API_EMIT,
  API_GET_REPO,
  API_GET_REPO_NEXT,
  API_GET_LIMIT,
} from './actions'

const apiMaps = (getState, dispatch) => ({
  [API_GET_REPO]: (payload) => {
    console.log(payload)
  },
  [API_GET_REPO_NEXT]: (payload) => {},
  [API_GET_LIMIT]: (payload) => {},
})

export const apiMiddleware = (getState, dispatch) => ({ type, payload }) => {
  const actionMaps = apiMaps(getState, dispatch)
  actionMaps[type] && actionMaps[type](payload)
}

export default apiMiddleware
