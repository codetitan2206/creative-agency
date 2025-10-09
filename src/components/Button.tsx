import clsx from "clsx";

const buttonClasses = {
  base: "rounded-md cursor-pointer font-semibold transition-colors disabled:opacity-50 flex items-center justify-center",
  variants: {
    primary: "bg-[#0A84FF] text-white hover:bg-[#007AFF]",
    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900",
  },
  sizes: {
    small: "px-3 py-1 text-sm",
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  },
};

export function Button({
  children,
  icon,
  variant = "primary",
  size = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "default" | "large";
}) {
  return (
    <button
      className={clsx(
        buttonClasses.base,
        buttonClasses.variants[variant],
        buttonClasses.sizes[size],
        icon && "gap-2"
      )}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
