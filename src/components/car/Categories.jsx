import CategoryCard from './CategoryCard'
import { CATEGORIES } from '../../constants/categories'

function Categories() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            Duyệt theo dòng xe
          </h2>
          <p className="text-text/60 mt-2">
            Tìm nhanh loại xe phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories