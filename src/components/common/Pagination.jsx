import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-text disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary transition-colors"
        aria-label="Trang trước"
      >
        <HiChevronLeft size={18} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
            page === currentPage
              ? 'bg-primary text-white'
              : 'text-text hover:bg-secondary'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-text disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary transition-colors"
        aria-label="Trang sau"
      >
        <HiChevronRight size={18} />
      </button>
    </nav>
  )
}

export default Pagination