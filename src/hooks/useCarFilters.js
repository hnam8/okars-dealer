import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import { MOCK_CARS } from '../constants/mockCars'

const CAR_TYPE_BY_ID = {
  sedan: ['Camry'],
  suv: ['CX-5', 'CR-V', 'VF 8'],
}

export function useCarFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    fuelType: searchParams.get('fuelType') || '',
    sort: searchParams.get('sort') || 'newest',
    page: Number(searchParams.get('page')) || 1,
  }

  // Cập nhật 1 hoặc nhiều field filter, tự động reset về trang 1 khi đổi filter
  function updateFilters(newValues) {
    const params = new URLSearchParams(searchParams)
    Object.entries(newValues).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    // Reset về trang 1 nếu filter thay đổi (không phải do đổi trang)
    if (!('page' in newValues)) {
      params.set('page', '1')
    }
    setSearchParams(params)
  }

  function clearFilters() {
    setSearchParams({})
  }

  // Lọc + sắp xếp dữ liệu dựa trên filters hiện tại
  const filteredCars = useMemo(() => {
    let result = [...MOCK_CARS]

    if (filters.search) {
      const keyword = filters.search.toLowerCase()
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(keyword) ||
          car.model.toLowerCase().includes(keyword)
      )
    }

    if (filters.brand) {
      result = result.filter(
        (car) => car.brand.toLowerCase() === filters.brand.toLowerCase()
      )
    }

    if (filters.fuelType) {
      result = result.filter((car) => car.fuelType === filters.fuelType)
    }

    if (filters.category && CAR_TYPE_BY_ID[filters.category]) {
      const models = CAR_TYPE_BY_ID[filters.category]
      result = result.filter((car) =>
        models.some((m) => car.model.includes(m))
      )
    }

    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'year-desc':
        result.sort((a, b) => b.year - a.year)
        break
      default:
        result.sort((a, b) => b.id - a.id) // "newest" — tạm dùng id giảm dần
    }

    return result
  }, [filters.search, filters.brand, filters.fuelType, filters.category, filters.sort])

  return { filters, updateFilters, clearFilters, filteredCars }
}