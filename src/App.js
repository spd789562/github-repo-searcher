import React, { useEffect } from 'react'
import './App.css'
import { APIGetRepository, APIGetRateLimit } from '@api'

function App() {
  useEffect(() => {
    APIGetRepository().then(console.log)
    APIGetRateLimit().then(console.log)
  })
  return <div className="App"></div>
}

export default App
