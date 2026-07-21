import { Link } from 'react-router-dom'
import CarTypeIcon from './CarTypeIcon'

function CategoryCard({ category }) {
  const { name, count, type } = category

  return (
    <Link
      to={`/cars?category=${category.id}`}
      className="group flex flex-col items-center gap-3 p-6 bg-secondary border border-border rounded-xl hover:border-primary hover:shadow-md transition-all text-center"
    >
      {/* Nền tròn mờ phía sau icon, giống tinh thần ảnh tham khảo */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors" />
        <CarTypeIcon
          type={type}
          className="relative w-11 h-11 text-text/70 group-hover:text-primary transition-colors"
        />
      </div>

      <div>
        <h3 className="font-semibold text-text">{name}</h3>
        <p className="text-sm text-text/60 mt-0.5">{count} xe</p>
      </div>
    </Link>
  )
}

export default CategoryCard