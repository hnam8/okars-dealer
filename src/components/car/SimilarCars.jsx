import CarCard from './CarCard'

function SimilarCars({ cars }) {
  if (cars.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-text mb-6">Xe tương tự</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}

export default SimilarCars