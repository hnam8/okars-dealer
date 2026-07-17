import CarCard from './CarCard'
import Button from '../common/Button'
import { ROUTES } from '../../constants/routes'

function CarGrid({ title, subtitle, cars, viewAllLink = ROUTES.CARS }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text">{title}</h2>
          <p className="text-text/60 mt-1">{subtitle}</p>
        </div>
        <Button to={viewAllLink} variant="ghost" size="sm" className="hidden sm:inline-flex">
          Xem tất cả
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}

export default CarGrid