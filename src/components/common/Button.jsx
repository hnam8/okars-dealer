import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-blue-700',
  accent: 'bg-accent text-white hover:bg-orange-600',
  outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  type = 'button',
  className = '',
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  // Nếu có prop "to" → render như 1 Link điều hướng
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  // Ngược lại → render như 1 button thường (submit form, onClick...)
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button