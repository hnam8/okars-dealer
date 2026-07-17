import { HiX } from 'react-icons/hi'
import Button from '../components/common/Button'
import { MOCK_CARS } from '../constants/mockCars'
import { useCompare } from '../context/CompareContext'
import { formatPrice, formatMileage } from '../utils/formatters'
import { ROUTES } from '../constants/routes'

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
  const { compareIds, toggleCompare, clearCompare } = useCompare()
  const compareCars = MOCK_CARS.filter((car) => compareIds.includes(car.id))

  if (compareCars.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text mb-3">So sánh xe</h1>
        <p className="text-text/60 mb-6">
          Chưa có xe nào được chọn để so sánh. Tick vào ô "So sánh xe này" trên các thẻ xe để bắt đầu.
        </p>
        <Button to={ROUTES.CARS}>Chọn xe để so sánh</Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text">So sánh xe</h1>
        <button
          onClick={clearCompare}
          className="text-sm text-primary hover:underline"
        >
          Xóa tất cả
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 w-40"></th>
              {compareCars.map((car) => (
                <th key={car.id} className="p-3 align-top">
                  <div className="relative bg-secondary border border-border rounded-xl p-4">
                    <button
                      onClick={() => toggleCompare(car.id)}
                      aria-label="Bỏ khỏi so sánh"
                      className="absolute top-2 right-2 text-text/40 hover:text-accent"
                    >
                      <HiX size={18} />
                    </button>
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <p className="text-sm text-text/60">{car.brand}</p>
                    <p className="font-semibold text-text">{car.model}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row) => {
              // Highlight nếu các giá trị trong hàng này khác nhau giữa các xe
              const values = compareCars.map((car) => row.getValue(car))
              const hasDifference = new Set(values).size > 1

              return (
                <tr key={row.label} className="border-b border-border">
                  <td className="p-3 text-sm font-medium text-text/60">
                    {row.label}
                  </td>
                  {compareCars.map((car, index) => (
                    <td
                      key={car.id}
                      className={`p-3 text-sm text-center ${
                        hasDifference ? 'bg-accent/5 font-semibold text-text' : 'text-text/80'
                      }`}
                    >
                      {values[index]}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Compare