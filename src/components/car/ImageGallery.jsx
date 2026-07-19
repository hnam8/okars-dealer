import { useState, useRef } from 'react'
import { HiChevronLeft, HiChevronRight, HiOutlineArrowsExpand } from 'react-icons/hi'
import ImageLightbox from './ImageLightbox'

const SWIPE_THRESHOLD = 50

function ImageGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const totalImages = images.length

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const hasSwiped = useRef(false)

  function goToPrevious() {
    setActiveIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  function goToNext() {
    setActiveIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  function handleTouchStart(e) {
    touchEndX.current = 0
    hasSwiped.current = false
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      hasSwiped.current = true
    }
  }

  function handleTouchEnd() {
    if (!touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > SWIPE_THRESHOLD) goToNext()
    else if (distance < -SWIPE_THRESHOLD) goToPrevious()
  }

  function handleImageClick() {
    // Nếu vừa mới vuốt (kéo ảnh) thì không mở lightbox, tránh mở nhầm ngay sau khi vuốt
    if (hasSwiped.current) {
      hasSwiped.current = false
      return
    }
    setIsLightboxOpen(true)
  }

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden border border-border group">
        <img
          src={images[activeIndex]}
          alt={`${alt} - ảnh ${activeIndex + 1}/${totalImages}`}
          className="w-full h-80 md:h-[420px] object-cover select-none cursor-zoom-in"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleImageClick}
          draggable={false}
        />

        {/* Gợi ý "bấm để xem lớn" — chỉ hiện khi hover trên desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-text">
            <HiOutlineArrowsExpand size={20} />
          </div>
        </div>

        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Ảnh trước"
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/90 text-text hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <HiChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Ảnh sau"
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/90 text-text hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <HiChevronRight size={22} />
            </button>

            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
              {activeIndex + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {totalImages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-3">
          {images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem ảnh ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <ImageLightbox
          images={images}
          alt={alt}
          activeIndex={activeIndex}
          onNavigate={setActiveIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  )
}

export default ImageGallery