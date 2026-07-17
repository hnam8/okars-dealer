// Định dạng giá tiền theo VNĐ, ví dụ 850000000 → "850.000.000 ₫"
export function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value)
}

// Định dạng số km, ví dụ 15000 → "15.000 km"
export function formatMileage(value) {
  return `${new Intl.NumberFormat('vi-VN').format(value)} km`
}