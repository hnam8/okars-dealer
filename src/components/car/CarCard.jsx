import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart, HiOutlineShoppingCart, HiShoppingCart, HiOutlineCalendar, HiOutlineEye } from 'react-icons/hi'
import Badge from '../common/Badge'
import { formatPrice, formatMileage, formatRelativeDate, formatViews } from '../../utils/formatters'
import { carDetailPath } from '../../constants/routes'
import { useFavorites } from '../../context/FavoritesContext'
import { useCart } from '../../context/CartContext'

function CarCard({ car }) {
  const {
    id, brand, model, year, price, mileage,
    fuelType, transmission, image, status, updatedAt, views,
  } = car

  const isSold = status === 'sold'
  const { isFavorite, toggleFavorite } = useFavorites()
  const { isInCart, addToCart, removeFromCart } = useCart()
  const favorited = isFavorite(id)
  const inCart = isInCart(id)

  return (
    <div className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link to={carDetailPath(id)}>
          <img
            src={image}
            alt={`${brand} ${model}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label={favorited ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
            onClick={() => toggleFavorite(id)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-text hover:text-accent transition-colors"
          >
            {favorited ? <HiHeart size={18} className="text-accent" /> : <HiOutlineHeart size={18} />}
          </button>

          {!isSold && (
            <button
              type="button"
              aria-label={inCart ? 'Bỏ khỏi yêu cầu tư vấn' : 'Thêm vào yêu cầu tư vấn'}
              onClick={() => (inCart ? removeFromCart(id) : addToCart(id))}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-text hover:text-primary transition-colors"
            >
              {inCart ? <HiShoppingCart size={18} className="text-primary" /> : <HiOutlineShoppingCart size={18} />}
            </button>
          )}
        </div>

        <div className="absolute top-3 left-3">
          <Badge variant={isSold ? 'sold' : 'available'}>
            {isSold ? 'Đã bán' : 'Còn hàng'}
          </Badge>
        </div>
      </div>

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

        {/* Thông tin tin đăng: ngày cập nhật + lượt xem — thay thế checkbox compare cũ */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-xs text-text/50">
          <span className="flex items-center gap-1">
            <HiOutlineCalendar size={14} />
            {formatRelativeDate(updatedAt)}
          </span>
          <span className="flex items-center gap-1">
            <HiOutlineEye size={14} />
            {formatViews(views)} lượt xem
          </span>
        </div>
      </div>
    </div>
  )
}

export default CarCard