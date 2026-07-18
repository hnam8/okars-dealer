import Button from '../common/Button'
import ctaBg from '../../assets/cta-bg.png'
import { ROUTES } from '../../constants/routes'

function CtaSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative max-w-4xl mx-auto px-4 py-16 text-center md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Sẵn sàng tìm chiếc xe mơ ước?
        </h2>
        <p className="text-white/80 mt-3 max-w-xl mx-auto">
          Đăng ký tài khoản miễn phí để lưu xe yêu thích, nhận tư vấn và cập nhật
          xe mới sớm nhất từ các đại lý uy tín.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to={ROUTES.REGISTER} variant="accent" size="lg">
            Đăng ký miễn phí
          </Button>
          <Button to={ROUTES.CARS} variant="outline" size="lg">
            Khám phá xe ngay
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection