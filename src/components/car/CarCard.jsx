import { Link } from 'react-router-dom'
import { HiOutlineHeart } from 'react-icons/hi'
import Badge from '../common/Badge'
import { formatPrice, formatMileage } from '../../utils/formatters'
import { carDetailPath } from '../../constants/routes'

function CarCard({ car }) {
  const {
    id, brand, model, year, price, mileage,
    fuelType, transmission, image, status,
  } = car

  const isSold = status === 'sold'

  return (
    <div className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      {/* Ảnh + nút yêu thích + badge */}
      <div className="relative">
        <Link to={carDetailPath(id)}>
          <img
            src={image}
            alt={`${brand} ${model}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <button
          type="button"
          aria-label="Thêm vào yêu thích"
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-text hover:text-accent transition-colors"
        >
          <HiOutlineHeart size={18} />
        </button>

        <div className="absolute top-3 left-3">
          <Badge variant={isSold ? 'sold' : 'available'}>
            {isSold ? 'Đã bán' : 'Còn hàng'}
          </Badge>
        </div>
      </div>

      {/* Nội dung */}
      <div className="p-4">
        <p className="text-sm text-text/60">{brand}</p>
        <Link to={carDetailPath(id)}>
          <h3 className="font-semibold text-text mt-0.5 hover:text-primary transition-colors">
            {model} ({year})
          </h3>
        </Link>

        <p className="text-lg font-bold text-primary mt-2">
          {formatPrice(price)}
        </p>

        <div className="flex items-center gap-3 mt-3 text-xs text-text/60">
          <span>{formatMileage(mileage)}</span>
          <span>•</span>
          <span>{fuelType}</span>
          <span>•</span>
          <span>{transmission}</span>
        </div>
      </div>
    </div>
  )
}

export default CarCard