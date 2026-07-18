import { useState, useMemo } from 'react'
import { HiSearch } from 'react-icons/hi'
import Modal from '../common/Modal'
import Badge from '../common/Badge'
import { formatPrice } from '../../utils/formatters'
import { MOCK_CARS } from '../../constants/mockCars'

const FUEL_TYPES = ['Xăng', 'Dầu', 'Điện', 'Hybrid']

function CompareCarPicker({ isOpen, onClose, excludeIds, onSelect }) {
  const [search, setSearch] = useState('')
  const [brandFilter, setBrandFilter] = useState('')
  const [fuelFilter, setFuelFilter] = useState('')

  // Danh sách hãng xe rút ra tự động từ chính data, tránh khai báo tay dễ lệch khi data đổi
  const availableBrands = useMemo(
    () => [...new Set(MOCK_CARS.map((car) => car.brand))].sort(),
    []
  )

  const filteredCars = useMemo(() => {
    return MOCK_CARS.filter((car) => {
      if (excludeIds.includes(car.id)) return false

      if (search) {
        const keyword = search.toLowerCase()
        const matchesKeyword =
          car.brand.toLowerCase().includes(keyword) ||
          car.model.toLowerCase().includes(keyword)
        if (!matchesKeyword) return false
      }

      if (brandFilter && car.brand !== brandFilter) return false
      if (fuelFilter && car.fuelType !== fuelFilter) return false

      return true
    })
  }, [excludeIds, search, brandFilter, fuelFilter])

  function handlePick(carId) {
    onSelect(carId)
    handleClose()
  }

  function handleClose() {
    // Reset bộ lọc mỗi khi đóng modal, để lần mở sau luôn bắt đầu sạch
    setSearch('')
    setBrandFilter('')
    setFuelFilter('')
    onClose()
  }

  const hasActiveFilters = search || brandFilter || fuelFilter

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Chọn xe để so sánh">
      {/* Thanh tìm kiếm + bộ lọc */}
      <div className="space-y-3 mb-5">
        <div className="relative">
          <HiSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm theo hãng xe, mẫu xe..."
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Tất cả hãng xe</option>
            {availableBrands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          <select
            value={fuelFilter}
            onChange={(e) => setFuelFilter(e.target.value)}
            className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Tất cả nhiên liệu</option>
            {FUEL_TYPES.map((fuel) => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={() => {
                setSearch('')
                setBrandFilter('')
                setFuelFilter('')
              }}
              className="text-sm text-primary hover:underline px-2"
            >
              Xóa lọc
            </button>
          )}
        </div>
      </div>

      {/* Kết quả */}
      {filteredCars.length === 0 ? (
        <p className="text-text/60 text-center py-8">
          {hasActiveFilters
            ? 'Không tìm thấy xe phù hợp với bộ lọc.'
            : 'Không còn xe nào khác để chọn.'}
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredCars.map((car) => (
            <button
              key={car.id}
              type="button"
              onClick={() => handlePick(car.id)}
              className="text-left bg-secondary/40 border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant={car.status === 'sold' ? 'sold' : 'available'}>
                    {car.status === 'sold' ? 'Đã bán' : 'Còn hàng'}
                  </Badge>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-text">
                  {car.brand} {car.model}
                </p>
                <p className="text-xs text-text/60 mt-1">
                  {formatPrice(car.price)}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </Modal>
  )
}

export default CompareCarPicker