import { useState } from 'react'
import { HiX } from 'react-icons/hi'
import Button from '../components/common/Button'
import { MOCK_CARS } from '../constants/mockCars'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatters'
import { carDetailPath, ROUTES } from '../constants/routes'
import { Link } from 'react-router-dom'

function Cart() {
  const { cartIds, removeFromCart, clearCart } = useCart()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const cartCars = MOCK_CARS.filter((car) => cartIds.includes(car.id))

  function handleSubmitRequest() {
    // TODO: gọi API gửi yêu cầu tư vấn thật qua services khi có backend
    console.log('Gửi yêu cầu tư vấn cho các xe:', cartIds)
    setIsSubmitted(true)
    clearCart()
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text mb-3">
          Đã gửi yêu cầu tư vấn thành công!
        </h1>
        <p className="text-text/60 mb-6">
          Đội ngũ tư vấn viên OKars Dealer sẽ liên hệ với bạn trong thời gian sớm nhất.
        </p>
        <Button to={ROUTES.CARS}>Tiếp tục khám phá xe</Button>
      </div>
    )
  }

  if (cartCars.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text mb-3">Yêu cầu tư vấn</h1>
        <p className="text-text/60 mb-6">
          Bạn chưa chọn xe nào để yêu cầu tư vấn. Nhấn biểu tượng giỏ hàng trên xe bạn quan tâm.
        </p>
        <Button to={ROUTES.CARS}>Khám phá xe ngay</Button>
      </div>
    )
  }

  const totalEstimate = cartCars.reduce((sum, car) => sum + car.price, 0)

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
        Yêu cầu tư vấn ({cartCars.length})
      </h1>
      <p className="text-text/60 mb-8">
        Xem lại danh sách xe bạn quan tâm trước khi gửi yêu cầu tới đại lý
      </p>

      <div className="space-y-4">
        {cartCars.map((car) => (
          <div
            key={car.id}
            className="flex items-center gap-4 bg-background border border-border rounded-xl p-4"
          >
            <Link to={carDetailPath(car.id)} className="shrink-0">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-24 h-20 object-cover rounded-lg"
              />
            </Link>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-text/60">{car.brand}</p>
              <Link to={carDetailPath(car.id)}>
                <h3 className="font-semibold text-text truncate hover:text-primary transition-colors">
                  {car.model} ({car.year})
                </h3>
              </Link>
              <p className="text-primary font-bold mt-1">{formatPrice(car.price)}</p>
            </div>

            <button
              onClick={() => removeFromCart(car.id)}
              aria-label="Xóa khỏi danh sách"
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-text/40 hover:text-accent hover:bg-secondary transition-colors"
            >
              <HiX size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-secondary/50 border border-border rounded-xl p-5">
        <div className="flex items-center justify-between text-sm text-text/70">
          <span>Tổng giá trị ước tính ({cartCars.length} xe)</span>
          <span className="font-semibold text-text">{formatPrice(totalEstimate)}</span>
        </div>
        <p className="text-xs text-text/50 mt-2">
          Đây là tổng giá niêm yết, không phải hóa đơn thanh toán. Giá thực tế có thể thay đổi sau khi tư vấn viên liên hệ.
        </p>

        <Button onClick={handleSubmitRequest} className="w-full mt-4">
          Gửi yêu cầu tư vấn cho tất cả xe trên
        </Button>
      </div>
    </div>
  )
}

export default Cart