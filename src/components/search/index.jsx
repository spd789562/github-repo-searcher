import React, { useCallback } from 'react'

/* store */
import { useDispatch } from '@store'
import { API_GET_REPO } from '@store/middleware/actions'

/* components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/* utils */
import { debounce } from 'throttle-debounce'
import { apiEmit } from '@utils/emit'

import './search.css'

const Search = () => {
  const dispatch = useDispatch()
  const handleSearch = useCallback(
    debounce(300, ({ target: { value } }) => {
      dispatch(apiEmit(API_GET_REPO, { query: value }))
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
