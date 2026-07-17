import { useState, useEffect } from 'react'
import { HiSearch } from 'react-icons/hi'

function SearchBar({ value, onSearch }) {
  const [inputValue, setInputValue] = useState(value)

  // Debounce: chỉ gọi onSearch sau khi người dùng ngừng gõ 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== value) {
        onSearch(inputValue)
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [inputValue])

  return (
    <div className="relative flex-1">
      <HiSearch
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40"
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tìm theo hãng xe, mẫu xe..."
        className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
      />
    </div>
  )
}

export default SearchBar