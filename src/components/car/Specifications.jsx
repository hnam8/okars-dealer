import SpecItem from './SpecItem'
import { formatMileage } from '../../utils/formatters'

function Specifications({ car }) {
  const specs = [
    { label: 'Năm sản xuất', value: car.year },
    { label: 'Số km đã đi', value: formatMileage(car.mileage) },
    { label: 'Nhiên liệu', value: car.fuelType },
    { label: 'Hộp số', value: car.transmission },
    { label: 'Động cơ', value: car.engine },
    { label: 'Công suất', value: `${car.horsepower} mã lực` },
    { label: 'Màu ngoại thất', value: car.color },
    { label: 'Nội thất', value: car.interior },
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-text mb-3">Thông số kỹ thuật</h2>
      <div>
        {specs.map((spec) => (
          <SpecItem key={spec.label} {...spec} />
        ))}
      </div>
    </div>
  )
}

export default Specifications