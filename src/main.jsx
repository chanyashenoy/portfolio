import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css' // <-- This exact line MUST be present to link your styles!

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)