import Button from '../common/Button'
import { HERO_CONTENT } from '../../constants/heroContent'

function HeroBanner() {
  const { title, subtitle, primaryCta, secondaryCta, stats } = HERO_CONTENT

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Lớp trang trí hình tròn mờ, tạo chiều sâu mà không cần ảnh nền thật */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button to={primaryCta.to} variant="accent" size="lg">
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.to} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </div>

          {/* Thống kê tin cậy */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner