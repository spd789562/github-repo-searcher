import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import { Provider } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
