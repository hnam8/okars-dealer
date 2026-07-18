import { useState } from 'react'
import { HiX, HiPlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import CompareCarPicker from '../components/car/CompareCarPicker'
import { MOCK_CARS } from '../constants/mockCars'
import { useCompare } from '../context/CompareContext'
import { formatPrice, formatMileage } from '../utils/formatters'
import { carDetailPath } from '../constants/routes'

const COMPARE_ROWS = [
  { label: 'Giá', getValue: (car) => formatPrice(car.price) },
  { label: 'Năm sản xuất', getValue: (car) => car.year },
  { label: 'Số km đã đi', getValue: (car) => formatMileage(car.mileage) },
  { label: 'Nhiên liệu', getValue: (car) => car.fuelType },
  { label: 'Hộp số', getValue: (car) => car.transmission },
  { label: 'Động cơ', getValue: (car) => car.engine },
  { label: 'Công suất', getValue: (car) => `${car.horsepower} mã lực` },
  { label: 'Màu ngoại thất', getValue: (car) => car.color },
]

function Compare() {
  const { compareIds, toggleCompare, maxCompare } = useCompare()
  const [pickerSlotIndex, setPickerSlotIndex] = useState(null)

  // Lấy đúng xe theo THỨ TỰ đã chọn (compareIds), không theo thứ tự trong MOCK_CARS
  const compareCars = compareIds
    .map((id) => MOCK_CARS.find((car) => car.id === id))
    .filter(Boolean)

  const slots = Array.from({ length: maxCompare }, (_, i) => compareCars[i] || null)

  function handleSelectCar(carId) {
    toggleCompare(carId)
  }

  function handleRemove(carId) {
    toggleCompare(carId)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">So sánh xe</h1>
      <p className="text-text/60 mb-8">
        Chọn tối đa {maxCompare} xe để xem chi tiết thông số song song
      </p>

      {/* 3 ô chọn xe */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {slots.map((car, index) =>
          car ? (
            <div
              key={car.id}
              className="relative bg-secondary/40 border border-border rounded-xl p-4"
            >
              <button
                onClick={() => handleRemove(car.id)}
                aria-label="Bỏ khỏi so sánh"
                className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white text-text/50 hover:text-accent shadow-sm"
              >
                <HiX size={16} />
              </button>

              <Link to={carDetailPath(car.id)}>
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-xs text-text/60">{car.brand}</p>
                <p className="font-semibold text-text hover:text-primary transition-colors">
                  {car.model}
                </p>
              </Link>
            </div>
          ) : (
            <button
              key={`empty-${index}`}
              onClick={() => setPickerSlotIndex(index)}
              className="flex flex-col items-center justify-center gap-2 h-full min-h-[180px] border-2 border-dashed border-border rounded-xl text-text/50 hover:border-primary hover:text-primary transition-colors"
            >
              <HiPlus size={28} />
              <span className="text-sm font-medium">Xe {index + 1}</span>
            </button>
          )
        )}
      </div>

      {/* Bảng so sánh — chỉ hiện khi có từ 2 xe trở lên */}
      {compareCars.length >= 2 ? (
        <div className="overflow-x-auto mt-10">
          <table className="w-full min-w-[500px] border-collapse">
            <tbody>
              {COMPARE_ROWS.map((row) => {
                const values = compareCars.map((car) => row.getValue(car))
                const hasDifference = new Set(values).size > 1

                return (
                  <tr key={row.label} className="border-b border-border">
                    <td className="p-3 text-sm font-medium text-text/60 w-40">
                      {row.label}
                    </td>
                    {values.map((value, i) => (
                      <td
                        key={compareCars[i].id}
                        className={`p-3 text-sm text-center ${
                          hasDifference ? 'bg-accent/5 font-semibold text-text' : 'text-text/80'
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-text/50 mt-10">
          Chọn thêm ít nhất {2 - compareCars.length} xe nữa để xem bảng so sánh chi tiết.
        </p>
      )}

      <CompareCarPicker
        isOpen={pickerSlotIndex !== null}
        onClose={() => setPickerSlotIndex(null)}
        excludeIds={compareIds}
        onSelect={handleSelectCar}
      />
    </div>
  )
}

export default Compare