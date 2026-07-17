import BrandCard from './BrandCard'
import { BRANDS } from '../../constants/brands'

function Brands() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Thương hiệu nổi bật
        </h2>
        <p className="text-text/60 mt-2">
          Đối tác từ các hãng xe uy tín hàng đầu
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {BRANDS.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </section>
  )
}

export default Brands