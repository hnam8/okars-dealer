const BADGE_VARIANTS = {
  available: 'bg-green-100 text-green-700',
  sold: 'bg-gray-200 text-gray-600',
  new: 'bg-accent/10 text-accent',
}

function Badge({ children, variant = 'available' }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${BADGE_VARIANTS[variant]}`}
    >
      {children}
    </span>
  )
}

export default Badge