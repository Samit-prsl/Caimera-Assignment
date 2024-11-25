import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SecureReqProvider } from './contexts/Requests.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SecureReqProvider><App /></SecureReqProvider>
  </StrictMode>,
)
