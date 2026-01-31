import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AudioProvider } from './context/AudioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AudioProvider>
      {/* Main Entry Point */}
      <App />
    </AudioProvider>
  </StrictMode>,
)
