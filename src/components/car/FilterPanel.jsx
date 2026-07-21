import { BRANDS } from '../../constants/brands'

const FUEL_TYPES = ['Xăng', 'Dầu', 'Điện', 'Hybrid']

function FilterPanel({ filters, onChange, onClear }) {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-text">Bộ lọc</h3>
        <button
          onClick={onClear}
          className="text-sm text-primary hover:underline"
        >
          Xóa tất cả
        </button>
      </div>

      <div>
        <p className="text-sm font-medium text-text mb-2">Hãng xe</p>
        <div className="flex flex-col gap-2">
          {BRANDS.map((brand) => (
            <label key={brand.id} className="flex items-center gap-2 text-sm text-text/70 cursor-pointer">
              <input
                type="radio"
                name="brand"
                checked={filters.brand === brand.name}
                onChange={() => onChange({ brand: brand.name })}
                className="accent-primary"
              />
              {brand.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-text mb-2">Nhiên liệu</p>
        <div className="flex flex-col gap-2">
          {FUEL_TYPES.map((fuel) => (
            <label key={fuel} className="flex items-center gap-2 text-sm text-text/70 cursor-pointer">
              <input
                type="radio"
                name="fuelType"
                checked={filters.fuelType === fuel}
                onChange={() => onChange({ fuelType: fuel })}
                className="accent-primary"
              />
              {fuel}
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel