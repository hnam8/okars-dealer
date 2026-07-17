import { useState } from 'react'

export function useFormValidation(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Nếu field đã từng được validate trước đó, kiểm tra lại ngay khi gõ
    if (touched[field]) {
      const error = validationRules[field]?.(value, values)
      setErrors((prev) => ({ ...prev, [field]: error || null }))
    }
  }

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const error = validationRules[field]?.(values[field], values)
    setErrors((prev) => ({ ...prev, [field]: error || null }))
  }

  function validateAll() {
    const newErrors = {}
    Object.keys(validationRules).forEach((field) => {
      const error = validationRules[field](values[field], values)
      if (error) newErrors[field] = error
    })
    setErrors(newErrors)
    setTouched(
      Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    )
    return Object.keys(newErrors).length === 0
  }

  return { values, errors, touched, handleChange, handleBlur, validateAll }
}