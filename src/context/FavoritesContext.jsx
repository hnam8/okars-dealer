import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext(null)

const STORAGE_KEY = 'okars_favorites'

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Tự động lưu vào localStorage mỗi khi danh sách thay đổi
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  function toggleFavorite(carId) {
    setFavoriteIds((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    )
  }

  function isFavorite(carId) {
    return favoriteIds.includes(carId)
  }

  const value = { favoriteIds, toggleFavorite, isFavorite }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites phải được dùng bên trong FavoritesProvider')
  }
  return context
}