import { Link } from 'react-router-dom'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { ROUTES } from '../../constants/routes'
import { SOCIAL_LINKS } from '../../constants/socialLinks'

const QUICK_LINKS = [
  { label: 'Trang chủ', to: ROUTES.HOME },
  { label: 'Xe', to: ROUTES.CARS },
  { label: 'So sánh', to: ROUTES.COMPARE },
  { label: 'Giới thiệu', to: ROUTES.ABOUT },
  { label: 'Liên hệ', to: ROUTES.CONTACT },
]



function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cột 1: Thương hiệu */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">OKars Dealer</h3>
            <p className="text-sm text-text/70 leading-relaxed">
              Nền tảng mua bán xe hơi trực tuyến hiện đại, minh bạch và đáng tin cậy.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
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

          {/* Cột 3: Thông tin liên hệ */}
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

          {/* Cột 4: Social media */}
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

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-text/60">
          © {new Date().getFullYear()} OKars Dealer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer