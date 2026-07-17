export function isValidEmail(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value)
}

export function isStrongPassword(value) {
  // Tối thiểu 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  return regex.test(value)
}

export function isValidPhone(value) {
  // Số điện thoại Việt Nam: 10 số, bắt đầu bằng 0
  const regex = /^0\d{9}$/
  return regex.test(value)
}