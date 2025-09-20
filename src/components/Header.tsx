'use client';

import React, { useState } from 'react';
import Button from './Button';
import Typography from './Typography';

interface HeaderProps {
  className?: string;
}

/**
 * Header component with Apple-level design sophistication
 * Features refined navigation, micro-interactions, and premium aesthetics
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Docs', href: '#docs' },
    { label: 'Blog', href: '#blog' },
    { label: 'Pricing', href: '#pricing' },
  ];
  
  return (
    <header className={`sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="group">
              <Typography 
                variant="h6" 
                className="text-foreground font-bold group-hover:text-cursor-orange transition-colors duration-200"
              >
                Cursor
              </Typography>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="secondary" size="sm">
              Sign Up
            </Button>
            <Button variant="primary" size="sm">
              Download
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Login
              </Button>
              <Button variant="secondary" size="sm" className="w-full">
                Sign Up
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
