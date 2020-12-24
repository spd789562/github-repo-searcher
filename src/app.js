import React from 'react'

/* components */
import Search from '@components/search'
import ResultList from '@components/result-list'

import './app.css'

function App() {
  return (
    <div className="app">
      <div className="app-search">
        <Search />
      </div>
      <ResultList />
    </div>
  )
}

export default App
