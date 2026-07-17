import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormField from '../components/common/FormField'
import Button from '../components/common/Button'
import { useFormValidation } from '../hooks/useFormValidation'
import { isValidEmail } from '../utils/validators'
import { ROUTES } from '../constants/routes'

const validationRules = {
  email: (value) => {
    if (!value) return 'Vui lòng nhập email.'
    if (!isValidEmail(value)) return 'Email không đúng định dạng.'
    return null
  },
  password: (value) => {
    if (!value) return 'Vui lòng nhập mật khẩu.'
    return null
  },
}

function Login() {
  const navigate = useNavigate()
  const [submitError, setSubmitError] = useState('')
  const { values, errors, handleChange, handleBlur, validateAll } =
    useFormValidation({ email: '', password: '' }, validationRules)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')

    const isValid = validateAll()
    if (!isValid) return

    // Chưa có backend thật — giả lập đăng nhập thành công và chuyển hướng
    // TODO: thay bằng gọi API thật qua services/authService.js khi có backend
    console.log('Đăng nhập với:', values)
    navigate(ROUTES.PROFILE)
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 md:px-6">
      <h1 className="text-2xl font-bold text-text text-center">Đăng nhập</h1>
      <p className="text-text/60 text-center mt-2">
        Chào mừng quay lại OKars Dealer
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
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
          label="Mật khẩu"
          type="password"
          value={values.password}
          onChange={(v) => handleChange('password', v)}
          onBlur={() => handleBlur('password')}
          error={errors.password}
          placeholder="••••••••"
          required
        />

        {submitError && (
          <p className="text-sm text-red-500 text-center">{submitError}</p>
        )}

        <Button type="submit" className="w-full">
          Đăng nhập
        </Button>
      </form>

      <p className="text-center text-sm text-text/60 mt-6">
        Chưa có tài khoản?{' '}
        <Link to={ROUTES.REGISTER} className="text-primary font-medium hover:underline">
          Đăng ký ngay
        </Link>
      </p>
    </div>
  )
}

export default Login