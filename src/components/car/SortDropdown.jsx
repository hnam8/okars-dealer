const SORT_OPTIONS = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'price-asc', label: 'Giá: thấp đến cao' },
  { value: 'price-desc', label: 'Giá: cao đến thấp' },
  { value: 'year-desc', label: 'Năm sản xuất mới nhất' },
]

function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-border rounded-lg px-4 py-2.5 text-sm text-text bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
    >
      {SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SortDropdown