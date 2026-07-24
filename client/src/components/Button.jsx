function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer disabled:hover:shadow-none";

  const variantClasses = {
    primary:
      "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/10 hover:scale-[1.02] hover:shadow-blue-500/25 focus:ring-blue-500",
    secondary:
      "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.02] focus:ring-slate-700",
    danger:
      "bg-linear-to-r from-rose-600 to-red-500 text-white shadow-lg shadow-rose-500/10 hover:scale-[1.02] hover:shadow-rose-500/25 focus:ring-rose-500",
  };

  const widthClasses = fullWidth ? "w-full" : "w-auto min-w-[180px]";
  const paddingClasses = "px-8 py-3.5";

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${widthClasses} ${paddingClasses} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
      )}
      <span>{children}</span>
    </button>
  );
}

export default Button;
