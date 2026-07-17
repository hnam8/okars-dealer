import CarGrid from './CarGrid'
import { MOCK_CARS } from '../../constants/mockCars'

function LatestCars() {
  // Sắp xếp theo id giảm dần để mô phỏng "xe mới đăng gần đây nhất"
  // Khi có backend thật, thay bằng sort theo field createdAt
  const latestCars = [...MOCK_CARS].sort((a, b) => b.id - a.id)

  return (
    <CarGrid
      title="Xe mới đăng"
      subtitle="Cập nhật những mẫu xe vừa được thêm vào hệ thống"
      cars={latestCars}
    />
  )
}

export default LatestCars