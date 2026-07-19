import { useEffect, useRef } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const SWIPE_THRESHOLD = 50

function ImageLightbox({ images, alt, activeIndex, onClose, onNavigate }) {
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const totalImages = images.length

  function goToPrevious() {
    onNavigate(activeIndex === 0 ? totalImages - 1 : activeIndex - 1)
  }

  function goToNext() {
    onNavigate(activeIndex === totalImages - 1 ? 0 : activeIndex + 1)
  }

  // Đóng bằng phím Esc, chuyển ảnh bằng phím mũi tên trái/phải (hỗ trợ bàn phím trên desktop)
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  function handleTouchStart(e) {
    touchEndX.current = 0
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX
  }

  function handleTouchEnd() {
    if (!touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > SWIPE_THRESHOLD) goToNext()
    else if (distance < -SWIPE_THRESHOLD) goToPrevious()
  }

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng"
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
      >
        <HiX size={24} />
      </button>

      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium z-10">
        {activeIndex + 1} / {totalImages}
      </div>

      {totalImages > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Ảnh trước"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <HiChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Ảnh sau"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <HiChevronRight size={26} />
          </button>
        </>
      )}

      <img
        src={images[activeIndex]}
        alt={`${alt} - ảnh phóng to ${activeIndex + 1}/${totalImages}`}
        className="max-w-[92vw] max-h-[85vh] object-contain select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        draggable={false}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default ImageLightbox