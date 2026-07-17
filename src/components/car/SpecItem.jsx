function SpecItem({ label, value }) {
  return (
    <div className="flex justify-between py-3 border-b border-border">
      <span className="text-sm text-text/60">{label}</span>
      <span className="text-sm font-medium text-text">{value}</span>
    </div>
  )
}

export default SpecItem