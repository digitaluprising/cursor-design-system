'use client';

import React from 'react';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: () => void;
}

/**
 * Text link component for clickable links
 * Styled with orange color and hover effects
 */
const TextLink: React.FC<TextLinkProps> = ({
  href,
  children,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`text-orange-500 hover:text-orange-400 transition-colors duration-200 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default TextLink;
