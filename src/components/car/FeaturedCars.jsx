import CarGrid from './CarGrid'
import { MOCK_CARS } from '../../constants/mockCars'

function FeaturedCars() {
  // Tạm thời lấy hết mock data; sau này lọc theo field "featured" khi có backend
  const featuredCars = MOCK_CARS

  return (
    <CarGrid
      title="Xe nổi bật"
      subtitle="Những mẫu xe được quan tâm nhiều nhất tuần này"
      cars={featuredCars}
    />
  )
}

export default FeaturedCars