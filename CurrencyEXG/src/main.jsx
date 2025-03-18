import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Currency from './Currency'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Currency />
  </StrictMode>,
)
