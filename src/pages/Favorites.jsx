import CarCard from '../components/car/CarCard'
import Button from '../components/common/Button'
import { MOCK_CARS } from '../constants/mockCars'
import { useFavorites } from '../context/FavoritesContext'
import { ROUTES } from '../constants/routes'

function Favorites() {
  const { favoriteIds } = useFavorites()
  const favoriteCars = MOCK_CARS.filter((car) => favoriteIds.includes(car.id))

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
        Xe yêu thích
      </h1>
      <p className="text-text/60 mb-8">
        {favoriteCars.length > 0
          ? `Bạn đang lưu ${favoriteCars.length} xe`
          : 'Bạn chưa lưu xe nào'}
      </p>

      {favoriteCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text/60 mb-4">
            Nhấn biểu tượng trái tim trên bất kỳ xe nào để lưu vào đây.
          </p>
          <Button to={ROUTES.CARS}>Khám phá xe ngay</Button>
        </div>
      )}
    </div>
  )
}

export default Favorites