import React, { useCallback } from 'react'

/* store */
import { useDispatch } from '@store'
<<<<<<< HEAD
import { API_GET_REPO } from '@store/middleware/actions'
import { CLEAR_REPO_LIST } from '@store/repo'
=======
import { API_GET_REPO } from '@store/middleware/api'
>>>>>>> 828530c... [add] search component

/* components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/* utils */
import { debounce } from 'throttle-debounce'
<<<<<<< HEAD
import { emit, apiEmit } from '@utils/emit'
=======
import emit from '@utils/emit'
>>>>>>> 828530c... [add] search component

import './search.css'

const Search = () => {
  const dispatch = useDispatch()
  const handleSearch = useCallback(
    debounce(300, ({ target: { value } }) => {
<<<<<<< HEAD
      dispatch(emit(CLEAR_REPO_LIST))
      dispatch(apiEmit(API_GET_REPO, { query: value }))
=======
      dispatch(emit(API_GET_REPO, { query: value }))
>>>>>>> 828530c... [add] search component
    }),
    []
  )
  return (
    <label className="search">
      <input className="search-input" type="text" onChange={handleSearch} />
      <FontAwesomeIcon icon={faSearch} style={{ color: '#666' }} />
    </label>
  )
}

export default Search
