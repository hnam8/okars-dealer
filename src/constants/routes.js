export const ROUTES = {
  HOME: '/',
  CARS: '/cars',
  CAR_DETAIL: '/cars/:id',
  COMPARE: '/compare',
  FAVORITES: '/favorites',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  CART: '/cart',
}

// Hàm hỗ trợ tạo đường dẫn động, ví dụ carDetailPath(12) → "/cars/12"
export const carDetailPath = (id) => `/cars/${id}`