// Định dạng giá tiền theo VNĐ
export function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value)
}

// Định dạng số km
export function formatMileage(value) {
  return `${new Intl.NumberFormat('vi-VN').format(value)} km`
}

// Chuyển ngày ISO thành dạng tương đối: "Hôm nay", "3 ngày trước", "2 tuần trước"...
export function formatRelativeDate(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now - date
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return 'Hôm nay'
  if (diffDays === 1) return 'Hôm qua'
  if (diffDays < 7) return `${diffDays} ngày trước`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`
  return date.toLocaleDateString('vi-VN')
}

// Rút gọn số lượt xem lớn: 1284 → "1,3k"
export function formatViews(value) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace('.0', '')}k`
  }
  return String(value)
}