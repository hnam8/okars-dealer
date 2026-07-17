import SearchBar from '../components/car/SearchBar'
import FilterPanel from '../components/car/FilterPanel'
import SortDropdown from '../components/car/SortDropdown'
import CarCard from '../components/car/CarCard'
import Pagination from '../components/common/Pagination'
import { useCarFilters } from '../hooks/useCarFilters'

const PAGE_SIZE = 8

function Cars() {
  const { filters, updateFilters, clearFilters, filteredCars } = useCarFilters()

  const totalPages = Math.ceil(filteredCars.length / PAGE_SIZE)
  const paginatedCars = filteredCars.slice(
    (filters.page - 1) * PAGE_SIZE,
    filters.page * PAGE_SIZE
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-6">
        Danh sách xe
      </h1>

      {/* Thanh tìm kiếm */}
      <SearchBar
        value={filters.search}
        onSearch={(search) => updateFilters({ search })}
      />

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Sidebar filter */}
        <FilterPanel
          filters={filters}
          onChange={updateFilters}
          onClear={clearFilters}
        />

        {/* Nội dung chính */}
        <div className="flex-1">
          {/* Toolbar: số lượng kết quả + sort */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-text/60">
              Tìm thấy <span className="font-semibold text-text">{filteredCars.length}</span> xe
            </p>
            <SortDropdown
              value={filters.sort}
              onChange={(sort) => updateFilters({ sort })}
            />
          </div>

          {/* Grid kết quả */}
          {paginatedCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {paginatedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-text/60">
              Không tìm thấy xe phù hợp với bộ lọc hiện tại.
            </div>
          )}

          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={(page) => updateFilters({ page })}
          />
        </div>
      </div>
    </div>
  )
}

export default Cars