import { Link } from 'react-router-dom'
import ImageGallery from '../components/car/ImageGallery'
import Specifications from '../components/car/Specifications'
import FeatureList from '../components/car/FeatureList'
import DealerInfo from '../components/car/DealerInfo'
import SimilarCars from '../components/car/SimilarCars'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import { useCarDetail } from '../hooks/useCarDetail'
import { formatPrice } from '../utils/formatters'
import { ROUTES } from '../constants/routes'

function CarDetail() {
  const { car, similarCars } = useCarDetail()

  // Xử lý trường hợp không tìm thấy xe (ví dụ id sai hoặc đã bị xóa)
  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-text">Không tìm thấy xe</h1>
        <p className="text-text/60 mt-2">
          Xe bạn tìm không tồn tại hoặc đã bị gỡ khỏi hệ thống.
        </p>
        <Button to={ROUTES.CARS} className="mt-6">
          Quay lại danh sách xe
        </Button>
      </div>
    )
  }

  const isSold = car.status === 'sold'

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:px-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-text/60 mb-6">
        <Link to={ROUTES.HOME} className="hover:text-primary">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to={ROUTES.CARS} className="hover:text-primary">Xe</Link>
        <span className="mx-2">/</span>
        <span className="text-text">{car.brand} {car.model}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cột trái: Gallery + thông tin chi tiết */}
        <div className="lg:col-span-2">
          <ImageGallery images={car.images} alt={`${car.brand} ${car.model}`} />

          <div className="mt-8">
            <Badge variant={isSold ? 'sold' : 'available'}>
              {isSold ? 'Đã bán' : 'Còn hàng'}
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold text-text mt-3">
              {car.brand} {car.model} ({car.year})
            </h1>

            <p className="text-2xl font-bold text-primary mt-3">
              {formatPrice(car.price)}
            </p>

            <p className="text-text/70 leading-relaxed mt-4">
              {car.description}
            </p>
          </div>

          <div className="mt-10 space-y-10">
            <Specifications car={car} />
            <FeatureList features={car.features} />
          </div>
        </div>

        {/* Cột phải: thông tin đại lý (sticky khi cuộn) */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <DealerInfo dealer={car.dealer} location={car.location} />
          </div>
        </div>
      </div>

      <SimilarCars cars={similarCars} />
    </div>
  )
}

export default CarDetail