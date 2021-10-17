import React from 'react'
import ReactDOM from 'react-dom'
import { LvesProvider } from './context/lves.context';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <LvesProvider>
      <App />
    </LvesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
