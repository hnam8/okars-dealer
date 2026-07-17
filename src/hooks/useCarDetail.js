import { useParams } from 'react-router-dom'
import { MOCK_CARS } from '../constants/mockCars'

export function useCarDetail() {
  const { id } = useParams()
  const car = MOCK_CARS.find((c) => String(c.id) === id)

  const similarCars = car
    ? MOCK_CARS.filter((c) => c.id !== car.id && c.brand === car.brand).length > 0
      ? MOCK_CARS.filter((c) => c.id !== car.id && c.brand === car.brand)
      : MOCK_CARS.filter((c) => c.id !== car.id).slice(0, 3)
    : []

  return { car, similarCars }
}