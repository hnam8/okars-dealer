import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { CompareProvider } from './context/CompareContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <CompareProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CompareProvider>
    </FavoritesProvider>
  </StrictMode>,
)