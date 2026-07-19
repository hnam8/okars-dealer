// Quét TẤT CẢ ảnh trong mọi thư mục con của cars/ (dùng ** để quét đệ quy nhiều cấp)
const carImageModules = import.meta.glob(
  '/src/assets/cars/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true, import: 'default' }
)

// Lọc đúng ảnh thuộc 1 xe, dựa theo đường dẫn thư mục Brand/Model chính xác
function getCarImages(folderPath) {
  return Object.keys(carImageModules)
    .filter((path) => path.includes(`/cars/${folderPath}/`))
    .sort()
    .map((path) => carImageModules[path])
}

export const MOCK_CARS = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry 2.5Q',
    year: 2024,
    price: 1189000000,
    mileage: 8000,
    fuelType: 'Xăng',
    transmission: 'Tự động',
    engine: '2.5L I4',
    horsepower: 203,
    color: 'Trắng ngọc trai',
    interior: 'Da nâu',
    description:
      'Sedan hạng D cao cấp, vận hành êm ái, tiết kiệm nhiên liệu, phù hợp gia đình.',
    features: ['Camera 360', 'Cửa sổ trời', 'Ghế chỉnh điện', 'Cảnh báo điểm mù'],
    dealer: 'Toyota Long Biên',
    location: 'Hà Nội',
    status: 'available',
    updatedAt: '2026-07-15',
    views: 1284,
    images: getCarImages('Toyota/Camry 2.5Q 2024'),
    image: getCarImages('Toyota/Camry 2.5Q 2024')[0],
  },
  {
    id: 2,
    brand: 'Mazda',
    model: 'CX-5 2.0 Premium',
    year: 2023,
    price: 899000000,
    mileage: 15000,
    fuelType: 'Xăng',
    transmission: 'Tự động',
    engine: '2.0L SKYACTIV-G',
    horsepower: 154,
    color: 'Đỏ pha lê',
    interior: 'Da đen',
    description:
      'SUV 5 chỗ đô thị, thiết kế KODO, tiết kiệm nhiên liệu, đã qua kiểm định 150 điểm.',
    features: ['Cảnh báo tiền va chạm', 'Hỗ trợ giữ làn', 'Màn hình 10.25 inch'],
    dealer: 'Mazda Giải Phóng',
    location: 'Hà Nội',
    status: 'available',
    updatedAt: '2026-07-10',
    views: 856,
    images: getCarImages('Mazda/CX-5 2.0 Pre 2023'),
    image: getCarImages('Mazda/CX-5 2.0 Pre 2023')[0],
  },
  {
    id: 3,
    brand: 'Honda',
    model: 'CR-V 1.5 L',
    year: 2024,
    price: 1150000000,
    mileage: 3000,
    fuelType: 'Xăng',
    transmission: 'Tự động',
    engine: '1.5L VTEC Turbo',
    horsepower: 190,
    color: 'Xám ánh kim',
    interior: 'Da kem',
    description:
      'SUV 7 chỗ linh hoạt, không gian rộng rãi, phù hợp gia đình đông thành viên.',
    features: ['Honda Sensing', 'Cửa cốp điện', 'Sạc không dây'],
    dealer: 'Honda Ô tô Mỹ Đình',
    location: 'Hà Nội',
    status: 'available',
    updatedAt: '2026-07-17',
    views: 2103,
    images: getCarImages('Honda/CR-V 1.5 L 2024'),
    image: getCarImages('Honda/CR-V 1.5 L 2024')[0],
  },
  {
    id: 4,
    brand: 'VinFast',
    model: 'VF 8 Eco',
    year: 2024,
    price: 1050000000,
    mileage: 5000,
    fuelType: 'Điện',
    transmission: 'Tự động',
    engine: 'Động cơ điện kép',
    horsepower: 402,
    color: 'Xanh đại dương',
    interior: 'Da tổng hợp',
    description:
      'SUV điện thông minh, tăng tốc mạnh mẽ, chi phí vận hành thấp, thân thiện môi trường.',
    features: ['Trợ lý ảo', 'ADAS cấp độ 2', 'Sạc nhanh DC'],
    dealer: 'VinFast Phạm Văn Đồng',
    location: 'Hà Nội',
    status: 'sold',
    updatedAt: '2026-07-05',
    views: 674,
    images: getCarImages('VinFast/VF 8 Eco 2024'),
    image: getCarImages('VinFast/VF 8 Eco 2024')[0],
  },
]