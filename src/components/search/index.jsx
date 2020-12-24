import React, { useCallback } from 'react'

/* store */
import { useDispatch } from '@store'
import { API_GET_REPO } from '@store/middleware/actions'
import { UPDATE_REPO_SEARCH_QUERY, CLEAR_REPO_LIST } from '@store/repo'
import { CHANGE_LOADING_STATUS } from '@store/loading-status'

/* components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/* utils */
import { debounce } from 'throttle-debounce'
import { emit, apiEmit } from '@utils/emit'

import './search.css'

const Search = () => {
  const dispatch = useDispatch()
  const handleSearch = useCallback(
    debounce(300, ({ target: { value } }) => {
      if(value) {
        dispatch(emit(CHANGE_LOADING_STATUS, 'loading'))
      }
      dispatch(emit(CLEAR_REPO_LIST))
      dispatch(emit(UPDATE_REPO_SEARCH_QUERY, value))
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
