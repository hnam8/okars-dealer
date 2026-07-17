import { HiCheckCircle } from 'react-icons/hi'

function FeatureList({ features }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-text mb-3">Tính năng nổi bật</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-text/80">
            <HiCheckCircle className="text-primary shrink-0" size={18} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeatureList