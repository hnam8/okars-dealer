import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiSearch } from 'react-icons/hi'
import { BRANDS } from '../../constants/brands'
import { CATEGORIES } from '../../constants/categories'

function QuickSearchCard() {
  const navigate = useNavigate()
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (brand) params.set('brand', brand)
    if (category) params.set('category', category)
    navigate(`/cars${params.toString() ? `?${params}` : ''}`)
  }

  return (
    <div className="bg-primary-dark text-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-sm">
      <h1 className="text-2xl md:text-3xl font-bold leading-tight">
        Tìm chiếc xe phù hợp với bạn
      </h1>

      <form onSubmit={handleSearch} className="mt-6 space-y-3">
        <div>
          <label className="block text-xs font-medium text-white/70 mb-1">
            Hãng xe
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-text"
          >
            <option value="">Tất cả hãng xe</option>
            {BRANDS.map((b) => (
              <option key={b.id} value={b.name}>{b.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-white/70 mb-1">
            Dòng xe
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-text"
          >
            <option value="">Tất cả dòng xe</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          <HiSearch size={18} />
          Tìm kiếm
        </button>
      </form>
    </div>
  )
}

export default QuickSearchCard