import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  const { name, count, icon } = category

  return (
    <Link
      to={`/cars?category=${category.id}`}
      className="flex flex-col items-center gap-3 p-6 bg-secondary border border-border rounded-xl hover:border-primary hover:shadow-md transition-all text-center"
    >
      <span className="text-4xl">{icon}</span>
      <div>
        <h3 className="font-semibold text-text">{name}</h3>
        <p className="text-sm text-text/60 mt-0.5">{count} xe</p>
      </div>
    </Link>
  )
}

export default CategoryCard