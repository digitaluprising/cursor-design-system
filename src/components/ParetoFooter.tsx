import React from 'react';
import Typography from './Typography';

interface ParetoFooterProps {
  className?: string;
}

/**
 * Minimalist footer with navigation, social links, and brand
 * Features clean layout with horizontal divider and logo
 */
const ParetoFooter: React.FC<ParetoFooterProps> = ({ className = '' }) => {
  const navigationLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Community', href: '#community' },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#linkedin' },
    { label: 'Threads', href: '#threads' },
    { label: 'Instagram', href: '#instagram' },
  ];

  return (
    <footer className={`bg-[#8B4513] px-6 py-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Navigation and Social Links */}
        <div className="flex justify-between items-start mb-6">
          {/* Navigation Links - Left Side */}
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F5F5DC] hover:text-white transition-colors duration-200 text-xl font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links - Right Side */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#F5F5DC] hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-[#F5F5DC] mb-6"></div>

        {/* Bottom Section - Logo and Brand */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#F5F5DC]"
            >
              {/* Intertwined S shapes logo */}
              <path
                d="M8 4C8 2 10 2 12 4C14 6 16 8 18 6C20 4 22 4 24 6C24 8 22 10 20 8C18 6 16 6 14 8C12 10 10 12 8 10C6 8 6 6 8 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M8 12C8 10 10 10 12 12C14 14 16 16 18 14C20 12 22 12 24 14C24 16 22 18 20 16C18 14 16 14 14 16C12 18 10 20 8 18C6 16 6 14 8 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M8 20C8 18 10 18 12 20C14 22 16 24 18 22C20 20 22 20 24 22C24 24 22 26 20 24C18 22 16 22 14 24C12 26 10 28 8 26C6 24 6 22 8 20Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Brand Name */}
          <div className="flex items-center">
            <Typography
              variant="h1"
              className="text-[#F5F5DC] text-9xl font-bold tracking-tight"
            >
              Pareto
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ParetoFooter;
