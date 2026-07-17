import { useState } from 'react'
import FormField from '../components/common/FormField'
import Button from '../components/common/Button'
import { useFormValidation } from '../hooks/useFormValidation'
import { isValidEmail, isValidPhone } from '../utils/validators'
import { SOCIAL_LINKS } from '../constants/socialLinks'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'

const validationRules = {
  fullName: (value) => (!value ? 'Vui lòng nhập họ tên.' : null),
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
  message: (value) => {
    if (!value) return 'Vui lòng nhập nội dung cần tư vấn.'
    if (value.trim().length < 10) return 'Nội dung quá ngắn, vui lòng mô tả rõ hơn.'
    return null
  },
}

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { values, errors, handleChange, handleBlur, validateAll } = useFormValidation(
    { fullName: '', email: '', phone: '', message: '' },
    validationRules
  )

  function handleSubmit(e) {
    e.preventDefault()
    const isValid = validateAll()
    if (!isValid) return

    // TODO: gọi API gửi liên hệ thật qua services/contactService.js khi có backend
    console.log('Gửi liên hệ:', values)
    setIsSubmitted(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-text">Liên hệ với chúng tôi</h1>
        <p className="text-text/60 mt-3 max-w-xl mx-auto">
          Có câu hỏi về xe, giá cả, hay muốn đặt lịch xem xe? Đội ngũ tư vấn của
          chúng tôi luôn sẵn sàng hỗ trợ.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Cột trái: Form (chiếm nhiều không gian hơn vì là hành động chính) */}
        <div className="lg:col-span-3 bg-secondary/40 border border-border rounded-xl p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-10">
              <h2 className="text-xl font-bold text-text mb-2">
                Đã gửi thành công!
              </h2>
              <p className="text-text/60">
                Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  label="Số điện thoại"
                  type="tel"
                  value={values.phone}
                  onChange={(v) => handleChange('phone', v)}
                  onBlur={() => handleBlur('phone')}
                  error={errors.phone}
                  placeholder="0912345678"
                  required
                />
              </div>

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

              {/* Textarea không tái sử dụng được FormField vì khác thẻ HTML (textarea vs input) */}
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Nội dung <span className="text-accent ml-0.5">*</span>
                </label>
                <textarea
                  value={values.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Tôi muốn tìm hiểu thêm về..."
                  rows={5}
                  className={`w-full px-4 py-2.5 border rounded-lg bg-background text-text focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-border focus:ring-primary/30 focus:border-primary'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Gửi yêu cầu
              </Button>
            </form>
          )}
        </div>

        {/* Cột phải: Thông tin liên hệ + Social */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-background border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-text">Địa chỉ</p>
                <p className="text-sm text-text/60">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlinePhone size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-text">Điện thoại</p>
                <p className="text-sm text-text/60">(028) 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineMail size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-text">Email</p>
                <p className="text-sm text-text/60">contact@okarsdealer.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineClock size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-text">Giờ làm việc</p>
                <p className="text-sm text-text/60">Thứ 2 - Thứ 7: 8:00 - 18:00</p>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary border border-border text-text hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              title="OKars Dealer trên Google Maps"
              src="https://www.google.com/maps?q=123+Nguyen+Hue,+Quan+1,+Ho+Chi+Minh&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact