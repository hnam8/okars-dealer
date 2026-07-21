import QuickSearchCard from '../car/QuickSearchCard'
import heroBg from '../../assets/hero-bg.png'

function HeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-[560px] md:min-h-[640px] flex items-center bg-primary-dark">
      {/* Ảnh nền thật */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-corver opacity-90"
      />

      {/* Overlay tối nhẹ bên trái, giúp thẻ tìm kiếm và chữ luôn nổi rõ trên mọi vùng ảnh */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Thẻ tìm kiếm nổi bên trái */}
        <QuickSearchCard />

        {/* Chữ phụ góc dưới phải, giống tinh thần tham khảo */}
        <div className="hidden lg:block absolute bottom-16 right-6 text-right max-w-xs">
          <p className="text-white/80 text-sm">
            Trải nghiệm mua xe được cá nhân hóa.
          </p>
          <p className="text-white text-xl font-bold mt-1 leading-snug">
            Xem xe tận nơi hoặc nhận tư vấn ngay tại nhà.
          </p>
        </div>
      </div>

      {/* Đường cong chuyển tiếp xuống section bên dưới */}
      <svg
        className="absolute bottom-0 left-0 w-full text-background"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,60 C 360,120 1080,0 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}

export default HeroBanner