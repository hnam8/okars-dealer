import ReviewCard from './ReviewCard'
import { REVIEWS } from '../../constants/reviews'

function Reviews() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-text/60 mt-2">
            Hàng ngàn khách hàng đã tin tưởng lựa chọn OKars Dealer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews