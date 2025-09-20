import React from 'react';
import Typography from './Typography';

interface FooterProps {
  className?: string;
}

/**
 * Footer component with Apple-level design sophistication
 * Features refined layouts, elegant typography, and premium aesthetics
 */
const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Download', href: '#download' },
        { label: 'Docs', href: '#docs' },
        { label: 'Blog', href: '#blog' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Changelog', href: '#changelog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
      ],
    },
  ];
  
  const socialLinks = [
    { label: 'Twitter', href: '#twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { label: 'GitHub', href: '#github', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
    { label: 'Discord', href: '#discord', icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
  ];
  
  return (
    <footer className={`relative bg-background border-t border-border/50 py-16 ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-cursor-orange/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <Typography variant="h6" className="text-foreground font-bold mb-2">
                Cursor
              </Typography>
              <Typography variant="small" className="text-muted-foreground leading-relaxed">
                Cursor is an applied research team focused on building the future of coding.
              </Typography>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 bg-cursor-gray-light/50 hover:bg-cursor-orange/10 rounded-full flex items-center justify-center transition-all duration-200 group"
                  aria-label={link.label}
                >
                  <svg className="w-5 h-5 text-muted-foreground group-hover:text-cursor-orange transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <Typography variant="small" className="text-foreground font-semibold uppercase tracking-wider">
                {section.title}
              </Typography>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Typography variant="caption" className="text-muted-foreground">
            © 2023 Cursor. All rights reserved.
          </Typography>
          
          <div className="flex items-center space-x-6">
            <Typography variant="caption" className="text-muted-foreground">
              Made with ❤️ for developers
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
