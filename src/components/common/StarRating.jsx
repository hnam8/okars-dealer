import { HiStar } from 'react-icons/hi'

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} trên ${max} sao`}>
      {Array.from({ length: max }, (_, i) => (
        <HiStar
          key={i}
          size={16}
          className={i < rating ? 'text-accent' : 'text-border'}
        />
      ))}
    </div>
  )
}

export default StarRating