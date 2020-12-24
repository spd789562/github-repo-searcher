import { APIGetRepository, APIGetRateLimit } from '@api'

/* actions */
import { API_EMIT, API_GET_REPO, API_GET_LIMIT } from './actions'

/* utils */
import emit from '@utils/emit'

const apiMapping = {
  [API_GET_REPO]: APIGetRepository,
  [API_GET_LIMIT]: APIGetRateLimit,
}

const apiEmitMiddleware = (getState, dispatch) => ({
  type,
  apiType,
  payload,
}) => {
  const useApi = apiMapping[apiType]
  if (type === API_EMIT && useApi) {
    const resData = {
      reqData: payload,
      err: false,
    }
    useApi(payload)
      .then(({ code, data }) => {
        resData.data = data
        dispatch(emit(apiType, resData))
      })
      .catch((error) => {
        resData.err = error
        dispatch(emit(apiType, resData))
      })
  }
}

export default apiEmitMiddleware
