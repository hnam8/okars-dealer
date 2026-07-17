import Button from '../components/common/Button'
import { TEAM_MEMBERS } from '../constants/team'
import { ROUTES } from '../constants/routes'

function About() {
  return (
    <div>
      {/* Hero giới thiệu — dùng lại nền primary như HeroBanner để đồng bộ thương hiệu */}
      <section className="bg-primary py-20">
        <div className="max-w-3xl mx-auto px-4 text-center md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Về OKars Dealer
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            Chúng tôi tin rằng mua một chiếc xe nên là trải nghiệm minh bạch,
            đơn giản và đáng tin cậy — không phải là một cuộc mặc cả căng thẳng.
          </p>
        </div>
      </section>

      {/* Company + Mission */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-text mb-3">Chúng tôi là ai</h2>
            <p className="text-text/70 leading-relaxed">
              OKars Dealer được thành lập với mục tiêu kết nối người mua xe với
              hàng trăm đại lý uy tín trên toàn quốc thông qua một nền tảng
              trực tuyến duy nhất. Chúng tôi giúp khách hàng tiết kiệm thời
              gian tìm kiếm, so sánh và ra quyết định mua xe phù hợp nhất.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-text mb-3">Sứ mệnh</h2>
            <p className="text-text/70 leading-relaxed">
              Số hóa toàn bộ hành trình mua xe tại Việt Nam — từ tìm kiếm,
              so sánh, tư vấn đến hỗ trợ sau bán hàng — bằng công nghệ hiện
              đại, dữ liệu minh bạch và trải nghiệm người dùng lấy khách
              hàng làm trung tâm.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/50 py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-text/60 mt-2">
              Những con người đứng sau trải nghiệm OKars Dealer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border border-border"
                />
                <h3 className="font-semibold text-text mt-3">{member.name}</h3>
                <p className="text-sm text-text/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA cuối trang */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center md:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-text">
          Sẵn sàng tìm chiếc xe của bạn?
        </h2>
        <p className="text-text/60 mt-2">
          Khám phá hàng ngàn xe từ các đại lý uy tín ngay hôm nay.
        </p>
        <Button to={ROUTES.CARS} size="lg" className="mt-6">
          Khám phá xe ngay
        </Button>
      </section>
    </div>
  )
}

export default About