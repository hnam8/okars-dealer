import { createContext, useContext, useState } from 'react'

const CompareContext = createContext(null)

const MAX_COMPARE = 3

export function CompareProvider({ children }) {
  const [compareIds, setCompareIds] = useState([])

  function toggleCompare(carId) {
    setCompareIds((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId)
      }
      if (prev.length >= MAX_COMPARE) {
        alert(`Chỉ có thể so sánh tối đa ${MAX_COMPARE} xe cùng lúc.`)
        return prev
      }
      return [...prev, carId]
    })
  }

  function isInCompare(carId) {
    return compareIds.includes(carId)
  }

  function clearCompare() {
    setCompareIds([])
  }

  const value = { compareIds, toggleCompare, isInCompare, clearCompare, maxCompare: MAX_COMPARE }

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  const context = useContext(CompareContext)
  if (!context) {
    throw new Error('useCompare phải được dùng bên trong CompareProvider')
  }
  return context
}