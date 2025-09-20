import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'display' | 'heading' | 'subheading' | 'body' | 'caption' | 'lead' | 'large' | 'small';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  noMargin?: boolean;
}

/**
 * Typography component with Apple-level precision
 * Features refined font weights, spacing, and visual hierarchy
 */
const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  size,
  className = '',
  as,
  weight,
  noMargin = false,
}) => {
  // Size classes for font sizes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };

  // Variant classes for semantic meaning and styling
  const variantClasses = {
    display: 'font-extrabold leading-[1.1] tracking-[-0.02em]',
    heading: 'font-bold leading-[1.2] tracking-[-0.015em]',
    subheading: 'font-semibold leading-[1.2] tracking-[-0.005em]',
    body: 'font-normal leading-[1.4]',
    lead: 'font-normal leading-[1.4] text-muted',
    large: 'font-normal leading-[1.4] text-muted-foreground',
    small: 'font-normal leading-[1.4] text-muted-foreground',
    caption: 'font-medium leading-[1.4] text-muted-foreground uppercase tracking-wider',
  };

  // Margin classes based on variant (semantic meaning)
  const marginClasses = {
    display: 'mb-8',
    heading: 'mb-6',
    subheading: 'mb-4',
    body: 'mb-4',
    lead: 'mb-4',
    large: 'mb-4',
    small: 'mb-2',
    caption: 'mb-2',
  };
  
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };
  
  const Component = as || 'p' as keyof React.JSX.IntrinsicElements;
  
  const sizeClass = size ? sizeClasses[size] : '';
  const variantClass = variantClasses[variant];
  const marginClass = noMargin ? '' : marginClasses[variant];
  const weightClass = weight ? weightClasses[weight] : '';
  const classes = `${sizeClass} ${variantClass} ${marginClass} ${weightClass} ${className}`.trim();
  
  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default Typography;
