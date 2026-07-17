import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormField from '../components/common/FormField'
import Button from '../components/common/Button'
import { useFormValidation } from '../hooks/useFormValidation'
import { isValidEmail, isStrongPassword, isValidPhone } from '../utils/validators'
import { ROUTES } from '../constants/routes'

const validationRules = {
  fullName: (value) => {
    if (!value) return 'Vui lòng nhập họ tên.'
    if (value.trim().length < 2) return 'Họ tên quá ngắn.'
    return null
  },
  email: (value) => {
    if (!value) return 'Vui lòng nhập email.'
    if (!isValidEmail(value)) return 'Email không đúng định dạng.'
    return null
  },
  phone: (value) => {
    if (!value) return 'Vui lòng nhập số điện thoại.'
    if (!isValidPhone(value)) return 'Số điện thoại không hợp lệ (VD: 0912345678).'
    return null
  },
  password: (value) => {
    if (!value) return 'Vui lòng nhập mật khẩu.'
    if (!isStrongPassword(value))
      return 'Mật khẩu tối thiểu 8 ký tự, gồm chữ hoa, chữ thường và số.'
    return null
  },
  confirmPassword: (value, allValues) => {
    if (!value) return 'Vui lòng xác nhận mật khẩu.'
    if (value !== allValues.password) return 'Mật khẩu xác nhận không khớp.'
    return null
  },
}

function Register() {
  const navigate = useNavigate()
  const { values, errors, handleChange, handleBlur, validateAll } = useFormValidation(
    { fullName: '', email: '', phone: '', password: '', confirmPassword: '' },
    validationRules
  )

  function handleSubmit(e) {
    e.preventDefault()

    const isValid = validateAll()
    if (!isValid) return

    // TODO: thay bằng gọi API thật qua services/authService.js khi có backend
    console.log('Đăng ký với:', values)
    navigate(ROUTES.LOGIN)
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 md:px-6">
      <h1 className="text-2xl font-bold text-text text-center">Tạo tài khoản</h1>
      <p className="text-text/60 text-center mt-2">
        Tham gia OKars Dealer để lưu xe yêu thích và nhận tư vấn
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        <FormField
          label="Họ và tên"
          value={values.fullName}
          onChange={(v) => handleChange('fullName', v)}
          onBlur={() => handleBlur('fullName')}
          error={errors.fullName}
          placeholder="Nguyễn Văn A"
          required
        />

        <FormField
          label="Email"
          type="email"
          value={values.email}
          onChange={(v) => handleChange('email', v)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          placeholder="ban@email.com"
          required
        />

        <FormField
          label="Số điện thoại"
          type="tel"
          value={values.phone}
          onChange={(v) => handleChange('phone', v)}
          onBlur={() => handleBlur('phone')}
          error={errors.phone}
          placeholder="0912345678"
          required
        />

        <FormField
          label="Mật khẩu"
          type="password"
          value={values.password}
          onChange={(v) => handleChange('password', v)}
          onBlur={() => handleBlur('password')}
          error={errors.password}
          placeholder="••••••••"
          required
        />

        <FormField
          label="Xác nhận mật khẩu"
          type="password"
          value={values.confirmPassword}
          onChange={(v) => handleChange('confirmPassword', v)}
          onBlur={() => handleBlur('confirmPassword')}
          error={errors.confirmPassword}
          placeholder="••••••••"
          required
        />

        <Button type="submit" className="w-full">
          Đăng ký
        </Button>
      </form>

      <p className="text-center text-sm text-text/60 mt-6">
        Đã có tài khoản?{' '}
        <Link to={ROUTES.LOGIN} className="text-primary font-medium hover:underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  )
}

export default Register