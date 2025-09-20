import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

/**
 * Button component with Apple-level design precision
 * Features refined interactions, micro-animations, and styling
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-medium transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring
    disabled:opacity-50 disabled:pointer-events-none
    active:scale-[0.98] transform-gpu
    group
  `.trim();
  
  const variantClasses = {
    primary: `
      bg-white text-black
      hover:bg-gray-50 hover:shadow-lg hover:shadow-white/10
      focus:ring-gray-300
      shadow-sm
    `,
    secondary: `
      text-cursor-orange hover:text-cursor-orange-light
      hover:bg-cursor-orange/5
      focus:ring-cursor-orange/20
      rounded-md px-2 py-1
    `,
    outline: `
      border border-border text-foreground
      hover:bg-muted hover:border-muted-foreground/20
      focus:ring-muted-foreground/20
      shadow-sm
    `,
    ghost: `
      text-muted-foreground hover:text-foreground
      hover:bg-muted/50
      focus:ring-muted-foreground/20
    `,
    link: `
      text-cursor-orange hover:text-cursor-orange-light
      underline-offset-4 hover:underline
      focus:ring-cursor-orange/20
    `,
  };
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-4 text-sm rounded-lg',
    lg: 'h-12 px-6 text-base rounded-lg',
    xl: 'h-14 px-8 text-lg rounded-xl',
  };
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
};

export default Button;
