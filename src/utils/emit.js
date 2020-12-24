<<<<<<< HEAD
import { API_EMIT } from '@store/middleware/actions'

export const emit = (type, payload = {}) => ({
=======
const emit = (type, payload = {}) => ({
>>>>>>> 6800d3f... [add] emit funciton
  type,
  payload,
})

<<<<<<< HEAD
export const apiEmit = (type, payload = {}) => ({
  type: API_EMIT,
  apiType: type,
  payload,
})

=======
>>>>>>> 6800d3f... [add] emit funciton
export default emit
