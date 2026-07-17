import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  HiMenu, HiX, HiOutlineHeart, HiOutlineShoppingCart,
  HiOutlineUser, HiChevronDown, HiOutlineLogout,
} from 'react-icons/hi'
import { ROUTES } from '../../constants/routes'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

const NAV_LINKS = [
  { label: 'Trang chủ', to: ROUTES.HOME },
  { label: 'Xe', to: ROUTES.CARS },
  { label: 'So sánh', to: ROUTES.COMPARE },
  { label: 'Giới thiệu', to: ROUTES.ABOUT },
  { label: 'Liên hệ', to: ROUTES.CONTACT },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const profileMenuRef = useRef(null)

  const { cartIds } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-primary' : 'text-text hover:text-primary'
    }`

  // Đóng dropdown Profile khi bấm ra ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setIsProfileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleLogout() {
    logout()
    setIsProfileMenuOpen(false)
    setIsMenuOpen(false)
    navigate(ROUTES.HOME)
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link to={ROUTES.HOME} className="text-xl font-bold text-primary">
          OKars Dealer
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to={ROUTES.FAVORITES}
            className="text-text hover:text-primary transition-colors"
            aria-label="Xe yêu thích"
          >
            <HiOutlineHeart size={22} />
          </Link>

          <Link
            to={ROUTES.CART}
            className="relative text-text hover:text-primary transition-colors"
            aria-label="Yêu cầu tư vấn"
          >
            <HiOutlineShoppingCart size={22} />
            {cartIds.length > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">
                {cartIds.length}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            // Đã đăng nhập: hiện dropdown Hồ sơ thay vì nút Đăng nhập/Đăng ký
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-text hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  {user.fullName.charAt(0).toUpperCase()}
                </span>
                <span className="max-w-[100px] truncate">{user.fullName}</span>
                <HiChevronDown
                  size={16}
                  className={`transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                  <Link
                    to={ROUTES.PROFILE}
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-text hover:bg-secondary transition-colors"
                  >
                    <HiOutlineUser size={16} />
                    Hồ sơ của tôi
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-secondary transition-colors"
                  >
                    <HiOutlineLogout size={16} />
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Chưa đăng nhập: hiện nút Đăng nhập/Đăng ký như cũ
            <>
              <Link
                to={ROUTES.LOGIN}
                className="flex items-center gap-1 text-sm font-medium text-text hover:text-primary transition-colors"
              >
                <HiOutlineUser size={20} />
                Đăng nhập
              </Link>
              <Link
                to={ROUTES.REGISTER}
                className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Mở menu"
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border px-4 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to={ROUTES.FAVORITES}
                className="text-text hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Xe yêu thích
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.CART}
                className="text-text hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Yêu cầu tư vấn {cartIds.length > 0 && `(${cartIds.length})`}
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to={ROUTES.PROFILE}
                    className="text-text hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hồ sơ của tôi ({user.fullName})
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 font-medium"
                  >
                    Đăng xuất
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to={ROUTES.LOGIN}
                    className="text-text hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTES.REGISTER}
                    className="inline-block bg-primary text-white px-4 py-2 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng ký
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar