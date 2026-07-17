import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'okars_cart'

export function CartProvider({ children }) {
  const [cartIds, setCartIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartIds))
  }, [cartIds])

  function addToCart(carId) {
    setCartIds((prev) => (prev.includes(carId) ? prev : [...prev, carId]))
  }

  function removeFromCart(carId) {
    setCartIds((prev) => prev.filter((id) => id !== carId))
  }

  function isInCart(carId) {
    return cartIds.includes(carId)
  }

  function clearCart() {
    setCartIds([])
  }

  const value = { cartIds, addToCart, removeFromCart, isInCart, clearCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart phải được dùng bên trong CartProvider')
  }
  return context
}