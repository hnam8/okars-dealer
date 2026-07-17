import StarRating from '../common/StarRating'

function ReviewCard({ review }) {
  const { name, location, rating, comment, avatar } = review

  return (
    <div className="bg-background border border-border rounded-xl p-6 h-full flex flex-col">
      <StarRating rating={rating} />
      <p className="text-text/70 leading-relaxed mt-3 flex-1">"{comment}"</p>

      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-text">{name}</p>
          <p className="text-xs text-text/60">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard