import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Heroes from './Heroes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Heroes />
  </StrictMode>,
)
