import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function ImageGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalImages = images.length

  function goToPrevious() {
    setActiveIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  function goToNext() {
    setActiveIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  return (
    <div>
      {/* Ảnh chính + nút mũi tên */}
      <div className="relative rounded-xl overflow-hidden border border-border group">
        <img
          src={images[activeIndex]}
          alt={`${alt} - ảnh ${activeIndex + 1}/${totalImages}`}
          className="w-full h-80 md:h-[420px] object-cover"
        />

        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-text hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <HiChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Ảnh sau"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-text hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <HiChevronRight size={22} />
            </button>

            {/* Số thứ tự ảnh, góc dưới phải */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
              {activeIndex + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {/* Chấm tròn (dot) thay cho dải thumbnail đầy đủ */}
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
    </div>
  )
}

export default ImageGallery