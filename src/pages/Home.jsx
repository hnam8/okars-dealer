import HeroBanner from '../components/layout/HeroBanner'
import FeaturedCars from '../components/car/FeaturedCars'
import Categories from '../components/car/Categories'
import Brands from '../components/car/Brands'

function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedCars />
      <Categories />
      <Brands />
      {/* Latest Cars, Reviews, CTA sẽ thêm ở bước sau */}
    </div>
  )
}

export default Home