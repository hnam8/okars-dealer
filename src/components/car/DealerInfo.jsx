import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import Button from '../common/Button'

function DealerInfo({ dealer, location }) {
  return (
    <div className="bg-secondary border border-border rounded-xl p-5">
      <h3 className="font-semibold text-text mb-3">Thông tin đại lý</h3>

      <p className="text-sm font-medium text-text">{dealer}</p>

      <div className="flex items-center gap-2 mt-2 text-sm text-text/60">
        <HiOutlineLocationMarker size={16} className="shrink-0" />
        {location}
      </div>

      <div className="flex items-center gap-2 mt-1 text-sm text-text/60">
        <HiOutlinePhone size={16} className="shrink-0" />
        (028) 1234 5678
      </div>

      <Button to="/contact" variant="primary" size="md" className="w-full mt-4">
        Liên hệ tư vấn
      </Button>
    </div>
  )
}

export default DealerInfo