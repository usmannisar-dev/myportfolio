export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses = `
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-full
    font-medium
    bg-primary text-primary-foreground
    shadow-lg shadow-primary/25
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:bg-primary/90
    hover:shadow-xl hover:shadow-primary/40
    active:translate-y-0
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:hover:translate-y-0
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-9",
    default: "px-6 py-3 text-base min-h-11",
    lg: "px-8 py-4 text-lg min-h-13",
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size] || sizeClasses.default}
    ${className}
  `;

  return (
    <button className={classes} {...props}>
      {/* Animated shine */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform duration-700
          group-hover:translate-x-full
        "
      />

      {/* Soft glow */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-full
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          shadow-[inset_0_0_20px_rgba(255,255,255,0.12)]
        "
      />

      {/* Button content */}
      <span
        className="
          relative z-10
          flex items-center justify-center
          gap-2
        "
      >
        {children}
      </span>
    </button>
  );
};
