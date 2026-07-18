import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi'
import { ROUTES } from '../../constants/routes'
import { SOCIAL_LINKS } from '../../constants/socialLinks'
import logo from '../../assets/logo.png'

const QUICK_LINKS = [
  { label: 'Trang chủ', to: ROUTES.HOME },
  { label: 'Xe', to: ROUTES.CARS },
  { label: 'So sánh', to: ROUTES.COMPARE },
  { label: 'Giới thiệu', to: ROUTES.ABOUT },
  { label: 'Liên hệ', to: ROUTES.CONTACT },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    // TODO: gọi API đăng ký nhận tin thật khi có backend
    console.log('Đăng ký nhận tin:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      {/* Newsletter — dải riêng nổi bật, đặt trên cùng của Footer */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-text">Đăng ký nhận tin</h3>
              <p className="text-sm text-text/60 mt-1">
                Nhận thông báo xe mới và ưu đãi sớm nhất
              </p>
            </div>

            {subscribed ? (
              <p className="text-sm text-primary font-medium">
                Cảm ơn bạn đã đăng ký!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 border border-border rounded-lg bg-background text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Đăng ký"
                  className="shrink-0 w-11 h-11 flex items-center justify-center bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <HiArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="OKars Dealer" className="h-12 w-auto" />
            <h2 className="text-xl font-bold text-text mt-2">OKars Dealer</h2>
            <p className="text-sm text-text/70 leading-relaxed mt-4">
              Nền tảng mua bán xe hơi trực tuyến hiện đại, minh bạch và đáng tin cậy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-3">Liên kết nhanh</h4>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-3">Liên hệ</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-text/70">
                <HiOutlineLocationMarker size={18} className="text-primary shrink-0" />
                123 Nguyễn Huệ, Quận 1, TP.HCM
              </li>
              <li className="flex items-center gap-2 text-sm text-text/70">
                <HiOutlinePhone size={18} className="text-primary shrink-0" />
                (028) 1234 5678
              </li>
              <li className="flex items-center gap-2 text-sm text-text/70">
                <HiOutlineMail size={18} className="text-primary shrink-0" />
                contact@okarsdealer.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-3">Theo dõi chúng tôi</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-text hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-text/60">
          © {new Date().getFullYear()} OKars Dealer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer