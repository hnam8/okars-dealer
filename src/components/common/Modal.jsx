import { useEffect, useRef } from 'react'
import { HiX } from 'react-icons/hi'

function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null)

  // Đóng modal khi bấm phím Esc
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Khóa cuộn trang nền khi modal đang mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        // Chỉ đóng khi bấm đúng vào lớp nền, không phải nội dung bên trong
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative bg-background rounded-xl shadow-lg w-full max-w-2xl max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-semibold text-text">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="text-text/50 hover:text-text transition-colors"
          >
            <HiX size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal