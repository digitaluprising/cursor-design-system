import React from 'react';
import Image from 'next/image';

interface ImageWrapperProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

/**
 * ImageWrapper component for consistent image handling
 * Provides responsive image display with proper optimization
 */
const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
}) => {
  const baseClasses = 'relative overflow-hidden rounded-lg';
  const classes = `${baseClasses} ${className}`;
  
  if (fill) {
    return (
      <div className={classes}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }
  
  return (
    <div className={classes}>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        priority={priority}
        sizes={sizes}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageWrapper;
