function CarIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Minh họa xe hơi"
    >
      {/* Vệt sáng mặt trời phía sau */}
      <circle cx="460" cy="120" r="70" fill="#F97316" opacity="0.25" />
      <circle cx="460" cy="120" r="45" fill="#FCD34D" opacity="0.5" />

      {/* Đường chân trời */}
      <ellipse cx="300" cy="330" rx="260" ry="18" fill="#FFFFFF" opacity="0.15" />

      {/* Thân xe — bo tròn hiện đại */}
      <path
        d="M 90 260
           Q 90 220 140 210
           L 190 175
           Q 230 150 290 150
           L 380 150
           Q 420 150 440 180
           L 470 210
           Q 510 215 510 260
           L 510 275
           Q 510 290 495 290
           L 105 290
           Q 90 290 90 275
           Z"
        fill="#FFFFFF"
      />

      {/* Kính chắn gió + cửa sổ */}
      <path
        d="M 200 205 L 235 175 Q 260 160 295 160 L 340 160 L 340 205 Z"
        fill="#1E3A8A"
        opacity="0.9"
      />
      <path
        d="M 350 160 L 380 160 Q 405 160 420 180 L 435 205 L 350 205 Z"
        fill="#1E3A8A"
        opacity="0.9"
      />
      <line x1="343" y1="160" x2="343" y2="205" stroke="#FFFFFF" strokeWidth="3" />

      {/* Đèn pha */}
      <ellipse cx="480" cy="235" rx="14" ry="9" fill="#FCD34D" />
      <ellipse cx="120" cy="240" rx="10" ry="8" fill="#F97316" />

      {/* Lưới tản nhiệt */}
      <rect x="495" y="245" width="14" height="20" rx="3" fill="#2563EB" opacity="0.3" />

      {/* Bánh xe */}
      <circle cx="180" cy="290" r="32" fill="#111827" />
      <circle cx="180" cy="290" r="14" fill="#E5E7EB" />
      <circle cx="420" cy="290" r="32" fill="#111827" />
      <circle cx="420" cy="290" r="14" fill="#E5E7EB" />

      {/* Vệt chuyển động phía sau, gợi tốc độ */}
      <line x1="10" y1="250" x2="70" y2="250" stroke="#FFFFFF" strokeWidth="4" opacity="0.4" strokeLinecap="round" />
      <line x1="0" y1="270" x2="55" y2="270" stroke="#FFFFFF" strokeWidth="4" opacity="0.25" strokeLinecap="round" />
      <line x1="20" y1="230" x2="65" y2="230" stroke="#FFFFFF" strokeWidth="3" opacity="0.2" strokeLinecap="round" />
    </svg>
  )
}

export default CarIllustration