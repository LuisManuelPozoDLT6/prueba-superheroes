import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/bootstrap.min.css'
import './assets/styles/styles.css'
import './assets/styles/all.min.css'
import { SuperHeroes } from './SuperHeroes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SuperHeroes></SuperHeroes>
  </React.StrictMode>,
)
