function FormField({
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  disabled = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2.5 border rounded-lg bg-background text-text focus:outline-none focus:ring-2 transition-all disabled:bg-secondary disabled:text-text/50 disabled:cursor-not-allowed ${
          error
            ? 'border-red-400 focus:ring-red-200'
            : 'border-border focus:ring-primary/30 focus:border-primary'
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default FormField