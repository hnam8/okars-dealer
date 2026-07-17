import { useState } from 'react'

function ImageGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {/* Ảnh chính */}
      <div className="rounded-xl overflow-hidden border border-border">
        <img
          src={images[activeIndex]}
          alt={`${alt} - ảnh ${activeIndex + 1}`}
          className="w-full h-80 md:h-[420px] object-cover"
        />
      </div>

      {/* Dải ảnh thumbnail */}
      <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
              index === activeIndex ? 'border-primary' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`${alt} - thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery