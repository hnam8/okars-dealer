import HeroBanner from '../components/layout/HeroBanner'
import FeaturedCars from '../components/car/FeaturedCars'

function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedCars />
      {/* Categories, Brands, Latest Cars, Reviews, CTA sẽ thêm ở các bước sau */}
    </div>
  )
}

export default Home