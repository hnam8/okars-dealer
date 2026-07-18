function BackgroundPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="car-pattern"
          x="0"
          y="0"
          width="200"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          {/* Hình bóng xe đơn giản, lặp lại rải rác */}
          <path
            d="M 20 90 Q 20 75 35 72 L 55 58 Q 68 48 90 48 L 130 48 Q 148 48 158 62 L 172 74 Q 190 76 190 92 L 190 98 Q 190 104 182 104 L 28 104 Q 20 104 20 98 Z"
            fill="#FFFFFF"
          />
          <circle cx="55" cy="104" r="10" fill="#FFFFFF" />
          <circle cx="155" cy="104" r="10" fill="#FFFFFF" />

          {/* Đường kẻ gợi ý mặt đường */}
          <line x1="0" y1="140" x2="60" y2="140" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="100" y1="140" x2="160" y2="140" stroke="#FFFFFF" strokeWidth="3" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="url(#car-pattern)" />
    </svg>
  )
}

export default BackgroundPattern