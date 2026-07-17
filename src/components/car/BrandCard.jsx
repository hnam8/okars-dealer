import { Link } from 'react-router-dom'

function BrandCard({ brand }) {
  return (
    <Link
      to={`/cars?brand=${brand.id}`}
      className="flex items-center justify-center h-20 bg-background border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
    >
      <span className="font-semibold text-text/70 hover:text-primary transition-colors">
        {brand.name}
      </span>
    </Link>
  )
}

export default BrandCard