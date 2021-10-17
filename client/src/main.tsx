import React from 'react'
import ReactDOM from 'react-dom'
import { Web3Provider } from './context/web3.context';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
