import { API_EMIT } from '@store/middleware/actions'

export const emit = (type, payload = {}) => ({
  type,
  payload,
})

export const apiEmit = (type, payload = {}) => ({
  type: API_EMIT,
  apiType: type,
})

export default emit
