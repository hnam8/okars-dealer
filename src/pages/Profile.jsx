import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/common/FormField'
import Button from '../components/common/Button'
import { useFormValidation } from '../hooks/useFormValidation'
import { isValidEmail, isValidPhone } from '../utils/validators'
import { MOCK_USER } from '../constants/mockUser'
import { ROUTES } from '../constants/routes'

const validationRules = {
  fullName: (value) => (!value ? 'Vui lòng nhập họ tên.' : null),
  email: (value) => {
    if (!value) return 'Vui lòng nhập email.'
    if (!isValidEmail(value)) return 'Email không đúng định dạng.'
    return null
  },
  phone: (value) => {
    if (!value) return 'Vui lòng nhập số điện thoại.'
    if (!isValidPhone(value)) return 'Số điện thoại không hợp lệ.'
    return null
  },
  address: (value) => (!value ? 'Vui lòng nhập địa chỉ.' : null),
}

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  const { values, errors, handleChange, handleBlur, validateAll } = useFormValidation(
    {
      fullName: MOCK_USER.fullName,
      email: MOCK_USER.email,
      phone: MOCK_USER.phone,
      address: MOCK_USER.address,
    },
    validationRules
  )

  function handleSubmit(e) {
    e.preventDefault()
    const isValid = validateAll()
    if (!isValid) return

    // TODO: gọi API cập nhật profile thật qua services/userService.js khi có backend
    console.log('Cập nhật thông tin:', values)
    setIsEditing(false)
    setSaveMessage('Cập nhật thông tin thành công.')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 md:px-6">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={MOCK_USER.avatar}
          alt={MOCK_USER.fullName}
          className="w-16 h-16 rounded-full object-cover border border-border"
        />
        <div>
          <h1 className="text-xl font-bold text-text">{MOCK_USER.fullName}</h1>
          <p className="text-sm text-text/60">
            Tham gia từ {new Date(MOCK_USER.joinedDate).toLocaleDateString('vi-VN')}
          </p>
        </div>
      </div>

      {saveMessage && (
        <div className="mb-6 px-4 py-3 bg-green-50 text-green-700 text-sm rounded-lg">
          {saveMessage}
        </div>
      )}

      <div className="bg-secondary/40 border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-text">Thông tin cá nhân</h2>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-primary font-medium hover:underline"
            >
              Chỉnh sửa
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <FormField
            label="Họ và tên"
            value={values.fullName}
            onChange={(v) => handleChange('fullName', v)}
            onBlur={() => handleBlur('fullName')}
            error={errors.fullName}
            disabled={!isEditing}
            required
          />
          <FormField
            label="Email"
            type="email"
            value={values.email}
            onChange={(v) => handleChange('email', v)}
            onBlur={() => handleBlur('email')}
            error={errors.email}
            disabled={!isEditing}
            required
          />
          <FormField
            label="Số điện thoại"
            type="tel"
            value={values.phone}
            onChange={(v) => handleChange('phone', v)}
            onBlur={() => handleBlur('phone')}
            error={errors.phone}
            disabled={!isEditing}
            required
          />
          <FormField
            label="Địa chỉ"
            value={values.address}
            onChange={(v) => handleChange('address', v)}
            onBlur={() => handleBlur('address')}
            error={errors.address}
            disabled={!isEditing}
            required
          />

          {isEditing && (
            <div className="flex gap-3 pt-2">
              <Button type="submit">Lưu thay đổi</Button>
              <Button type="button" variant="ghost" onClick={() => setIsEditing(false)}>
                Hủy
              </Button>
            </div>
          )}
        </form>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          to={ROUTES.FAVORITES}
          className="flex-1 text-center bg-background border border-border rounded-xl p-4 hover:border-primary transition-colors"
        >
          <p className="font-semibold text-text">Xe yêu thích</p>
          <p className="text-sm text-text/60 mt-1">Xem danh sách đã lưu</p>
        </Link>
        <Link
          to={ROUTES.CART}
          className="flex-1 text-center bg-background border border-border rounded-xl p-4 hover:border-primary transition-colors"
        >
          <p className="font-semibold text-text">Yêu cầu tư vấn</p>
          <p className="text-sm text-text/60 mt-1">Theo dõi yêu cầu đã gửi</p>
        </Link>
      </div>
    </div>
  )
}

export default Profile