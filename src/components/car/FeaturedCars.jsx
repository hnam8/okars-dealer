import CarCard from './CarCard'
import Button from '../common/Button'
import { MOCK_CARS } from '../../constants/mockCars'
import { ROUTES } from '../../constants/routes'

function FeaturedCars() {
  // Tạm thời lấy hết mock data; sau này khi có backend sẽ lọc theo field "featured"
  const featuredCars = MOCK_CARS

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            Xe nổi bật
          </h2>
          <p className="text-text/60 mt-1">
            Những mẫu xe được quan tâm nhiều nhất tuần này
          </p>
        </div>
        <Button to={ROUTES.CARS} variant="ghost" size="sm" className="hidden sm:inline-flex">
          Xem tất cả
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCars