import HeroBanner from '../components/layout/HeroBanner'
import FeaturedCars from '../components/car/FeaturedCars'
import Categories from '../components/car/Categories'
import Brands from '../components/car/Brands'
import LatestCars from '../components/car/LatestCars'
import Reviews from '../components/car/Reviews'
import CtaSection from '../components/layout/CtaSection'

function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedCars />
      <Categories />
      <Brands />
      <LatestCars />
      <Reviews />
      <CtaSection />
    </div>
  )
}

export default Home