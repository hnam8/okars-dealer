const ICON_PATHS = {
  sedan: (
    <path d="M 6 38 Q 6 32 13 30 L 24 20 Q 30 15 40 15 L 62 15 Q 71 15 76 21 L 86 30 Q 94 31 94 38 L 94 42 Q 94 46 90 46 L 10 46 Q 6 46 6 42 Z M 26 30 L 36 20 Q 39 18 43 18 L 43 30 Z M 47 18 L 60 18 Q 65 18 68 22 L 74 30 L 47 30 Z" />
  ),
  suv: (
    <path d="M 5 40 Q 5 33 12 31 L 20 18 Q 25 12 36 12 L 66 12 Q 76 12 82 19 L 89 31 Q 95 32 95 40 L 95 43 Q 95 47 91 47 L 9 47 Q 5 47 5 43 Z M 22 31 L 29 19 Q 32 15 37 15 L 37 31 Z M 41 15 L 63 15 Q 70 15 74 20 L 80 31 L 41 31 Z" />
  ),
  pickup: (
    <path d="M 4 40 Q 4 33 11 31 L 18 19 Q 22 14 32 14 L 50 14 L 50 31 L 62 31 L 62 22 L 92 22 Q 96 22 96 27 L 96 40 Q 96 44 92 44 L 8 44 Q 4 44 4 40 Z M 20 31 L 26 20 Q 29 17 33 17 L 33 31 Z" />
  ),
  electric: (
    <>
      <path d="M 6 38 Q 6 32 13 30 L 24 20 Q 30 15 40 15 L 62 15 Q 71 15 76 21 L 86 30 Q 94 31 94 38 L 94 42 Q 94 46 90 46 L 10 46 Q 6 46 6 42 Z M 26 30 L 36 20 Q 39 18 43 18 L 43 30 Z M 47 18 L 60 18 Q 65 18 68 22 L 74 30 L 47 18 Z" />
      <path d="M 52 6 L 40 26 L 49 26 L 45 40 L 62 20 L 52 20 Z" fill="currentColor" opacity="0.9" />
    </>
  ),
  hatchback: (
    <path d="M 6 38 Q 6 32 13 30 L 22 19 Q 27 14 37 14 L 68 14 Q 74 14 74 20 L 74 30 Q 84 31 90 34 Q 94 36 94 40 L 94 42 Q 94 46 90 46 L 10 46 Q 6 46 6 42 Z M 24 30 L 32 20 Q 35 17 39 17 L 39 30 Z M 43 17 L 66 17 Q 70 17 70 21 L 70 30 L 43 30 Z" />
  ),
  luxury: (
    <>
      <path d="M 6 38 Q 6 32 13 30 L 25 19 Q 31 14 41 14 L 60 14 Q 70 14 75 20 L 85 30 Q 94 31 94 38 L 94 42 Q 94 46 90 46 L 10 46 Q 6 46 6 42 Z M 27 30 L 37 19 Q 40 17 44 17 L 44 30 Z M 48 17 L 58 17 Q 64 17 68 21 L 73 30 L 48 30 Z" />
      <line x1="6" y1="42" x2="94" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </>
  ),
}

function CarTypeIcon({ type, className = '' }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bánh xe — dùng chung cho mọi loại */}
      <circle cx="26" cy="46" r="7" />
      <circle cx="26" cy="46" r="3" fill="white" />
      <circle cx="74" cy="46" r="7" />
      <circle cx="74" cy="46" r="3" fill="white" />

      {ICON_PATHS[type] || ICON_PATHS.sedan}
    </svg>
  )
}

export default CarTypeIcon